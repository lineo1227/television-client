<template>
    <div class="home">
        <div class="home__bg">
            <Advertisement />
        </div>
        <div class="home__container">
            <SortCom title="最近更新" digest="超级英雄 漫威宇宙 ">
                <ItemCom v-for="item in 5"></ItemCom>
            </SortCom>
            <SortCom title="正在热播" digest="超级英雄 漫威宇宙 " :add="true">
                <HotItem v-for="item in 4"></HotItem>
            </SortCom>
            <BingeWatch :img="img" />
            <SortCom title="电影推荐" digest="超级英雄 漫威宇宙 ">
                <ItemCom v-for="item in 5"></ItemCom>
            </SortCom>
            <SortCom title="动漫推荐" digest="超级英雄 漫威宇宙 ">
                <ItemCom v-for="item in 5"></ItemCom>
            </SortCom>
            <SortCom title="儿童推荐" digest="超级英雄 漫威宇宙 ">
                <ItemCom v-for="item in 5"></ItemCom>
            </SortCom>
        </div>
    </div>
</template>

<script setup lang="ts">
import img from "@/assets/images/binge-watch.png"
import ItemCom from "@/components/ItemCom.vue";
import HotItem from "./components/HotItem.vue"
import Advertisement from "./components/Advertisement.vue"
import SortCom from "@/components/SortCom.vue"
import BingeWatch from "@/components/BingeWatch.vue";
</script>

<style lang="scss">
.home {
    color: white;
    min-height: 100vh;

    &__bg {
        height: 448px;
        background: linear-gradient(transparent, black, black, transparent);
        width: 100vw;
        margin-top: -70px;
        padding-top: 266px;
    }

    &__container {
        width: 1188px;
        margin: 0 auto;
    }
}
</style>
