<template>
    <div class="details">
        <div class="details__container">
            <VideoContent v-show="playFlag" />
            <DetailsContent v-show="!playFlag" v-model="playFlag" />
            <div class="details__container-digest">
                <h4>电影简介</h4>
                <p>在与灭霸的终极决战结束后，“蚁人”斯科特·朗（保罗·路德 Paul Rudd 饰）和“黄蜂女”霍普·凡·戴恩（伊万杰琳·莉莉 Evangeline Lilly
                    饰）一家迎来了分外难得的平静生活，当然两个人作为救世主也得到周遭人的喜爱和敬仰。可是短暂的安逸之后，新的危机突然袭来。斯科特的女儿凯茜（凯瑟琳·纽 顿 Kathryn Newton
                    饰）一次失误操作，将父母以及外公外婆重新带回量子世界。在那个光怪陆离的世界里，珍妮特米歇尔·菲佛 Michelle
                    Pfeiffer）与老友重逢，斯科特等也结识新的朋友。与此同时，他们发现曾在量子世界得到珍妮特帮助的征服者康（乔纳森·梅杰斯 Jonathan ...</p>
                <Upload />

            </div>
            <BingeWatch :img="img" title="同类影视推荐" desc="一次看个够!" />
            <SortCom title="猜你喜欢" digest="超级英雄 漫威宇宙 ">
                <ItemCom v-for="item in 5"></ItemCom>
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
import { ref } from "vue";
const playFlag = ref(false)
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
