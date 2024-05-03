<template>
    <div class="all">
        <div class="all__container">
            <ChoiceCom />
            <SortCom>
                <ItemCom v-for="item in 25"></ItemCom>
            </SortCom>
            <div class="all__container-pagination">
                <el-pagination small background layout="prev, pager, next" :total="50" />
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import ChoiceCom from "@/components/ChoiceCom.vue"
import SortCom from '@/components/SortCom.vue';
import ItemCom from '@/components/ItemCom.vue';
</script>
<style lang="scss">
.all {
    @include RouterCss;
}
</style>