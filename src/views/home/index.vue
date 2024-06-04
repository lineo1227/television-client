<template>
    <div class="home">
        <div class="home__bg">
            <Advertisement />
            <img style="position: absolute;top:0;left:0;width: 100%;height: 100%;object-fit: cover;z-index: -1;"
                src="@/assets/images/zzx.png" alt="">

        </div>
        <div class="home__container">
            <SortCom title="最近更新" digest="超级英雄 漫威宇宙 " :add="false">
                <ItemCom v-if="recent.length > 0" v-for="item in recent" :key="item.id" :item="item"></ItemCom>
            </SortCom>
            <SortCom title="正在热播" digest="超级英雄 漫威宇宙 " :add="true">
                <HotItem v-for="item in hotBroadcast.splice(0, 4)" :key="item.id" :item="item"></HotItem>
            </SortCom>
            <BingeWatch :img="img" :itemList="weekUpdate" />
            <SortCom :add="false" title="电影推荐" digest="超级英雄 漫威宇宙 ">
                <ItemCom v-for="item in recommendMovie" :key="item.id" :item="item"></ItemCom>
            </SortCom>
            <SortCom :add="false" title="动漫推荐" digest="超级英雄 漫威宇宙 ">
                <ItemCom v-for="item in recommendAnime" :key="item.id" :item="item"></ItemCom>
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
import { getRecent, getHotBroadcast, getWeekUpdate, getRecommendMovie, getRecommendAnime } from "@/api"
import { ref } from "vue";
import { useHotSearchListStore } from "@/stores";
const hotSearchListStore = useHotSearchListStore()
export interface Item {
    id: number,
    title: string,
    coverUrl: string,
    categoryName?: string,
    playCount?: number
    typeList?: string[],
    year?: string
}
const recent = ref<Item[]>([])
const hotBroadcast = ref<Item[]>([])
const weekUpdate = ref<Item[]>([])
const recommendMovie = ref<Item[]>([])
const recommendAnime = ref<Item[]>([])
async function initData() {
    const [{ data: recentRes }, { data: hotBroadcastRes }, { data: weekUpdateRes }, { data: recommendMovieRes }, {
        data: recommendAnimeRes
    }] = await Promise.all([getRecent(), getHotBroadcast(), getWeekUpdate(), getRecommendMovie(), getRecommendAnime()])

    const { data: data1 } = recentRes as { data: Item[] }
    recent.value = data1
    const { data: data2 } = hotBroadcastRes as { data: Item[] }
    hotBroadcast.value = data2
    const { data: data3 } = weekUpdateRes as { data: Item[] }
    weekUpdate.value = data3
    const { data: data4 } = recommendMovieRes as { data: Item[] }
    recommendMovie.value = data4
    const { data: data5 } = recommendAnimeRes as { data: Item[] }
    recommendAnime.value = data5
    hotSearchListStore.list.anime = data5
    hotSearchListStore.list.default = data2
    hotSearchListStore.list.movie = data4
}
initData()
</script>

<style lang="scss">
.home {
    color: white;
    min-height: 100vh;

    &__bg {
        height: 448px;
        background: linear-gradient($color-purple-light, transparent, $color-purple-light);
        width: 100vw;
        margin-top: -70px;
        padding-top: 266px;
        position: relative;
    }

    &__container {
        width: 1188px;
        margin: 0 auto;
    }
}
</style>
