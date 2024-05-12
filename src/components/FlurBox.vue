<template>
    <div class="flur-box" @mouseleave="flurBoxFlag = false" @mouseenter="flurBoxFlag = true">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue'
const flurBoxFlag = defineModel<boolean>()
</script>

<style scoped lang="scss">
.flur-box {
    letter-spacing: 2px;
    width: 395px;
    border-radius: 8px;
    @include boxPadding(20px);
    background-color: rgba(25, 24, 37, 1);
    @include position(absolute, $b: -245px, $l: -10px)
}
</style>
