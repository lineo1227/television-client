<template>
    <div class="brower">
        <div class="brower__container">
            <SelectCom :msg="`历史观看影片 共${televisions?.length}个`" />
            <SortCom>
                <ItemCom v-for="item in televisions" :key="item.id" :item="item"></ItemCom>
            </SortCom>
            <div class="brower__container-pagination">
                <el-pagination :page-size="25" small background layout="prev, pager, next" v-model:current-page="page"
                    :total="televisions.length" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import SelectCom from "@/components/SelectCom.vue"
import SortCom from '@/components/SortCom.vue';
import ItemCom from '@/components/ItemCom.vue';
import { getHistoryView } from "@/api"
import { storeToRefs } from "pinia";
import { useUserInfoStore } from "@/stores";
import { ref, watch } from 'vue';
import type { Item } from '@/views/home/index.vue';
const page = ref(1)
const televisions = ref<Item[]>([])
const { user } = storeToRefs(useUserInfoStore())

function initData() {
    getHistoryView({ page: 1, pageSize: 10, token: user.value?.token }).then(({ data }) => {
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
.brower {
    @include RouterCss;

    &__container {
        margin-top: 20px;
    }
}
</style>