<template>
    <div class="search">
        <div class="search__container">
            <SelectCom :msg="msg" />
            <SortCom>
                <ItemCom v-for="item in 25"></ItemCom>
            </SortCom>
            <div class="search__container-pagination">
                <el-pagination small background layout="prev, pager, next" :total="50" />
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
const route = useRoute();
console.log(route.query.key);
const msg = ref(`与“${route.query.key}”相关的影片 共22个`);
watch(
    () => route.query.key,
    (newVal: unknown) => {
        msg.value = `与“${newVal}”相关的影片 共22个`;
    })
</script>
<style lang="scss">
.search {
    @include RouterCss;

    &__container {
        margin-top: 20px;
    }
}
</style>