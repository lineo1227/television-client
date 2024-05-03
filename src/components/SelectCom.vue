<template>
    <div class="select">
        <span>{{ msg }}</span>
    </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
withDefaults(defineProps<{ msg: string }>(), {
    msg: '',
});
</script>

<style scoped lang="scss">
.select {
    border: 2px solid transparent;
    border-radius: 6px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, $color-purple-light, $color-purple-light), $border-color;
    @include boxPadding(20px);
    border-radius: 10px;

    span {
        display: inline-block;
        padding: 10px 14px;
        font-size: 16px;
        border-radius: 4px;
        background-color: $color-purple;
    }
}
</style>
