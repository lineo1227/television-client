<template>
    <div class="all">
        <div class="all__container">
            <ChoiceCom v-model:list="choiceList" v-model:active="tagType" />
            <SortCom v-if="itemList.length > 0">
                <ItemCom v-for="item in itemList" :key="item.id" :item="item"></ItemCom>
            </SortCom>
            <div class="all__container-pagination">
                <el-pagination :page-size="25" small background layout="prev, pager, next" v-model:current-page="page"
                    :total="total" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ChoiceCom from "@/components/ChoiceCom.vue"
import SortCom from '@/components/SortCom.vue';
import ItemCom from '@/components/ItemCom.vue';
import { getVideoPageQuery } from "@/api"
import { ref, watch } from 'vue';
import type { Item } from "../home/index.vue";
const page = ref(1)
const itemList = ref<Item[]>([])
const total = ref(0)
export interface ChoiceListType {
    name: string,
    check: string,
    list: string[]
}
const choiceList = ref<ChoiceListType[]>([{
    name: "分类",
    check: "全部",
    list: [
        "全部", "电影", "动漫",
    ]
}, {
    name: "资费",
    check: "全部",
    list: [
        "全部", "免费", "会员"
    ]
}, {
    name: "类型",
    check: "全部",
    list: [
        "全部", "动漫", "儿童"
    ]
}, {
    name: "年代",
    check: "全部",
    list: [
        "全部", "2024", "2023", "2022", "2021", "2020", "更早"
    ]
}, {
    name: "地区",
    check: "全部",
    list: [
        "全部", "中国", "法国 ", "港台", "日本", "韩国", "美国", "英国", '德国', '印度', "澳大利亚"
    ]
},
])
const tagType = ref(0)
function initData() {
    const obj = {
        categoryName: choiceList.value[0].check === "全部" ? "" : choiceList.value[0].check,
        price: choiceList.value[1].check === "全部" ? "" : choiceList.value[1].check === "免费" ? 1 : 2,
        region: choiceList.value[4].check === "全部" ? "" : choiceList.value[4].check,
        year: ["全部", "更早"].includes(choiceList.value[3].check) ? "" : choiceList.value[3].check,
    }
    choiceList.value[4].check
    getVideoPageQuery({ page: page.value, pageSize: 25, pageTag: tagType.value + 1, ...obj }).then(({ data }) => {
        const { data: { records: rows, total: t } } = data as { data: { records: Item[], total: number } }
        total.value = t
        itemList.value = rows
    })
}
initData()
watch([tagType, choiceList], () => {
    if (page.value === 1) {
        initData()
    }
    else {
        page.value = 1
    }
}, {
    deep: true
})
watch(page, () => {
    initData()
}, {
    deep: true
})

</script>
<style lang="scss">
.all {
    @include RouterCss;
}
</style>