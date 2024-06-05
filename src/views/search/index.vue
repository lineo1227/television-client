<template>
    <div class="search">
        <div class="search__container">
            <SelectCom :msg="msg" />
            <SortCom>
                <ItemCom v-for="item in televisions.slice((page - 1) * 25, 25 * page)" :item="item" :key="item.id">
                </ItemCom>
            </SortCom>
            <div class="search__container-pagination">
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
import { useRoute } from "vue-router";
import { ref, watch } from "vue"
import { getHotBroadcast, getVideoPageQuery } from "@/api"
import type { Item } from "../home/index.vue";
const page = ref(1)
interface ItemType extends Item {
    year: string
}
const route = useRoute();
const msg = ref(route.query.key === "正在热播" ? "正在热播" : `与“${route.query.key}”相关的影片 共22个`);
watch(
    () => route.query.key,
    (newVal: unknown) => {
        initData()
    })
const televisions = ref<ItemType[]>([])
function initData() {
    if (route.query.key === "正在热播") {
        getHotBroadcast().then(({ data: res }) => {
            const { data } = res as { data: ItemType[] }
            televisions.value = data
        })
    } else {
        getVideoPageQuery({ pageTag: 4, page: page.value, title: route.query.key, pageSize: 25 }).then(({ data: res }) => {
            const { data: { records } } = res as { data: { records: ItemType[] } }
            televisions.value = records
            msg.value = `与“${route.query.key}”相关的影片 共${records.length}个`;
        })
    }
}
initData()
</script>

<style lang="scss">
.search {
    @include RouterCss;

    &__container {
        margin-top: 20px;
    }
}
</style>