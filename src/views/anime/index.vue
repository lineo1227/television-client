<template>
    <div class="ainme">
        <div class="ainme__container">
            <SortCom>
                <ItemCom v-for="item in televisions" :key="item.id" :item="item"></ItemCom>
            </SortCom>
            <div class="ainme__container-pagination">
                <el-pagination :page-size="25" small background layout="prev, pager, next" v-model:current-page="page"
                    :total="televisions.length" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import SortCom from '@/components/SortCom.vue';
import ItemCom from '@/components/ItemCom.vue';
import { getVideoPageQuery } from "@/api"
import { ref, watch } from 'vue';
import type { Item } from '@/views/home/index.vue';
const page = ref(1)
const televisions = ref<Item[]>([])
function initData() {
    getVideoPageQuery({ pageTag: 4, page: page.value, categoryName: "动漫", pageSize: 25 }).then(({ data }) => {
        const { data: { records } } = data as { data: { records: Item[] } }
        televisions.value = records
    })
}
initData()
watch(page, () => {
    initData()
})
</script>
<style lang="scss">
.ainme {
    @include RouterCss;

    &__container {
        margin-top: 20px;
    }
}
</style>