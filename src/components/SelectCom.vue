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
    border-radius: 6px;
    @include border;
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
