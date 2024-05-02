<template>
    <div class="sort-com">
        <div class="sort-com-title">
            <h3>最近更新</h3>
            <span>超级英雄 漫威宇宙</span>
        </div>
        <ul class="sort-com-content">
            <ItemCom />
            <ItemCom />
            <ItemCom />
            <ItemCom />
        </ul>
    </div>
</template>

<script setup lang="ts">
import ItemCom from "@/components/ItemCom.vue"
</script>

<style scoped lang="scss">
.sort-com {
    height: 500px;
    @include flex($fd: column, $jc: space-between);
    margin-bottom: 50px;

    &-title {
        @include flex($ai: flex-end);

        h3 {
            font-size: 36px;
            letter-spacing: 2px;
            color: white;
        }

        span {
            letter-spacing: 1px;
            font-size: 20px;
            margin-left: 6px;
            color: rgba(255, 255, 255, .7);
        }

    }

    &-content {
        @include flex($jc: space-between)
    }

}
</style>
