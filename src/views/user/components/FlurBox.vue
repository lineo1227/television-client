<template>
    <div class="flur-box">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.flur-box {
    letter-spacing: 2px;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    @include boxPadding(20px);
    @include border;
    background-image: linear-gradient(to right, #1c1b25, #1c1b25),
        $border-color;
}
</style>
