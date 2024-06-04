<template>
    <div class="television__container">
        <MyHeader />
        <RouterView />
        <MyFooter />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MyHeader from './MyHeader.vue';
import MyFooter from './MyFooter.vue';
</script>

<style lang="scss">
.television__container {
    @include flex($fd: column, $ai: center);
    margin: 30px auto;
}
</style>
