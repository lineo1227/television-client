<template>
    <div class="brower">
        <div class="brower__container">
            <SelectCom msg="历史观看影片 共8个" />
            <SortCom>
                <ItemCom v-for="item in 8"></ItemCom>
            </SortCom>
            <div class="brower__container-pagination">
                <el-pagination small background layout="prev, pager, next" :total="50" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import SelectCom from "@/components/SelectCom.vue"
import SortCom from '@/components/SortCom.vue';
import ItemCom from '@/components/ItemCom.vue';
</script>
<style lang="scss">
.brower {
    @include RouterCss;

    &__container {
        margin-top: 20px;
    }
}
</style>