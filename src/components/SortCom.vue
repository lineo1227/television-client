<template>
    <div class="sort-com">
        <div class="sort-com-title">
            <h3>{{ title }}</h3>
            <span>{{ digest }}</span>
            <el-button size="small" v-if="add" type="primary" class="sort-com-btn"> 查看更多</el-button>
        </div>
        <ul :class="add ? 'active' : ''" class="sort-com-content">
            <slot></slot>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
const { title, digest, add } = withDefaults(defineProps<{
    title: string,
    digest: string,
    add: boolean
}>(), {
    title: '',
    digest: "",
    add: false,
})
</script>

<style scoped lang="scss">
.sort-com {
    @include flex($fd: column, $jc: space-between);
    margin-bottom: 50px;

    &-btn {
        @include position(absolute, $b: 0px, $r: 10px);
        font-size: 14px;
    }

    &-title {
        @include flex($ai: flex-end);
        position: relative;

        h3 {
            font-size: 36px;
            letter-spacing: 2px;
            color: white;
        }

        span {
            letter-spacing: 1px;
            font-size: 20px;
            margin-left: 6px;
            color: $color-white-light;
        }

    }

    &-content {
        display: grid;
        margin-top: 40px;
        flex-wrap: wrap;
        grid-template-columns: repeat(5, 1fr);

        &:where(.active) {
            grid-template-columns: repeat(4, 1fr)
        }
    }

}
</style>
