<template>
    <div class="home">
        <div class="home__bg">
            <Advertisement />
        </div>
        <div class="home__container">
            <SortCom />
        </div>
    </div>
</template>

<script setup lang="ts">
import Advertisement from "./components/Advertisement.vue"
import SortCom from "@/components/SortCom.vue"
</script>

<style lang="scss">
.home {
    color: white;
    min-height: 100vh;

    &__bg {
        height: 420px;
        background: linear-gradient(transparent, black, black, transparent);
        width: 100vw;
        margin-top: -70px;
        padding-top: 250px;
    }

    &__container {
        width: 1028px;
        margin: 0 auto;
    }
}
</style>
