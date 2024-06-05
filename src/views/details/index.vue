<template>
    <div class="details">
        <div class="details__container">
            <VideoContent v-if="video !== null" :url="video?.videoWithRating[0]?.videoUrl" v-show="playFlag" />
            <DetailsContent v-if="video !== null" v-show="!playFlag" v-model="playFlag" :vid="id as string"
                :video="video" />
            <div class="details__container-digest">
                <h4>电影简介</h4>
                <p>{{ video?.videoWithRating[0]?.description }}</p>
                <Upload v-if="video?.videoWithRating[0]?.videoUrl" :url="video?.videoWithRating[0]?.videoUrl" />

            </div>
            <BingeWatch :itemList="ratingList" :img="img" title="同类影视推荐" desc="一次看个够!" />
            <SortCom title="猜你喜欢" digest="超级英雄 漫威宇宙 ">
                <ItemCom v-for="item in liskList" :key="item.id" :item="item"></ItemCom>
            </SortCom>
        </div>
    </div>
</template>

<script setup lang="ts">
import img from "@/assets/images/binge-watch2.png"
import VideoContent from "./components/VideoContent.vue"
import Upload from "./components/Upload.vue"
import ItemCom from "@/components/ItemCom.vue";
import SortCom from "@/components/SortCom.vue"
import BingeWatch from "@/components/BingeWatch.vue";
import DetailsContent from "./components/DetailsContent.vue"
import { getVideoDetail, getHotRating } from "@/api"
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from 'vue';
import type { Item } from "../home/index.vue";
import { getVideoLike } from "@/api"
const route = useRoute()
const { id } = route.params
const router = useRouter()

const playFlag = ref(false)
const video = ref<Video | null>(null)
interface VideoWithRating extends Item {
    description: string,
    duration: number,
    language: string,
    playTime: string,
    rating: number,
    region: string,
    videoUrl: string,
    year: string
}

export interface Video {
    videoTypeList: string[],
    videoWithRating: VideoWithRating[]
}
interface ItemType extends Item {
    year: string
}
const liskList = ref<ItemType[]>([])
const ratingList = ref<ItemType[]>([])
const initData = async () => {
    const [{ data: videoLiskRes }, { data: videoDetailRes }, { data: hotRatingRes }] = await Promise.all([getVideoLike(), getVideoDetail(id as string), getHotRating()])
    const { data: v } = videoDetailRes as { data: Video }
    video.value = v
    const { data: vl } = videoLiskRes as { data: ItemType[] }
    liskList.value = vl
    const { data: { hotRatingList } } = hotRatingRes as { data: { hotRatingList: ItemType[] } }
    ratingList.value = hotRatingList
}
initData()
watch(route, () => {
    router.go(0)
})
</script>

<style lang="scss">
.details {
    @include RouterCss;

    &__container {
        &-digest {
            margin-bottom: -20px;

            h4 {
                font-size: 16px;
                color: $color-white-light;
                margin-bottom: 20px;
            }

            p {
                font-size: 14px;
                letter-spacing: 1px;
                line-height: 24px;
                color: darken($color: $color-white-light, $amount: 50);
            }
        }
    }
}
</style>
