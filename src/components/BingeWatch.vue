<template>
    <div class="binge-watch">
        <img :src="img" alt="">
        <div class="binge-watch-content">
            <h2>{{ title }}</h2>
            <h3>{{ desc }}</h3>
            <ul>
                <li v-for="item in itemList" @click="pathTo(item.id)" :key="item.id">
                    <img :src="item.coverUrl" alt="">
                    <h5>{{ item.title }}</h5>
                    <span>{{ dayjs(item.year).format('YYYY-MM-DD') }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs"
import type { Item } from "@/views/home/index.vue";
import { withDefaults } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const { title, desc, img } = withDefaults(defineProps<{
    title?: string,
    desc?: string,
    img: string,
    itemList?: Item[],
}>(), {
    title: '追剧WEEK',
    desc: "每个星期都更新哦",
    img: '',
    itemList: () => []
})
function pathTo(id: number) {
    router.push("/details/" + id)
}
</script>

<style lang="scss">
.binge-watch {
    height: 480px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    >img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &-content {
        @include position(absolute, 0, 0, 0, 0);
        background: linear-gradient(to right, rgba(0, 0, 0, .85), transparent);
        color: #fff;
        @include boxPadding(70px);

        h2 {
            font-size: 42px;
        }

        h3 {
            margin-top: 18px;
            font-size: 26px;
            color: $color-white-light;
        }

        ul {
            margin-top: 64px;
            @include flex($ai: center)
        }

        li {
            height: 186px;
            width: 200px;
            margin-right: 36px;
            @include flex($jc: space-between, $fd: column);
            cursor: pointer;

            img {
                height: 120px;
                object-fit: cover;
                border-radius: 10px;
            }

            h5 {
                font-size: 18px;
                color: $color-white-light;
            }

            span {
                font-size: 16px;
                color: rgba(255, 255, 255, .5);
            }
        }
    }

    margin: 80px 0;

}
</style>
