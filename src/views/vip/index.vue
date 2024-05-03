<template>
    <div class="vip">
        <div class="vip__container">
            <SortCom>
                <ItemCom v-for="item in 25"></ItemCom>
            </SortCom>
            <div class="vip__container-pagination">
                <el-pagination small background layout="prev, pager, next" :total="50" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import SortCom from '@/components/SortCom.vue';
import ItemCom from '@/components/ItemCom.vue';
</script>
<style lang="scss">
.vip {
    @include RouterCss;

    &__container {
        margin-top: 20px;
    }
}
</style>