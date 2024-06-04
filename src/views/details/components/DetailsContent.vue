<template>
    <div class="details-content">
        <img :src="video?.videoWithRating[0]?.coverUrl" alt="">
        <div class="content-message">
            <h3>{{ video?.videoWithRating[0]?.title }}</h3>
            <p>{{ video?.videoWithRating[0].language }}·{{ dayjs(video?.videoWithRating[0]?.year).format("YYYY年")
                }}·{{ video?.videoWithRating[0]?.duration }}分</p>
            <p class="active">
                <el-icon>
                    <StarFilled />
                </el-icon>({{ video?.videoWithRating[0]?.rating }}/10.0)
            </p>
            <p>类型: {{ video?.videoTypeList.join(" / ") }}</p>
            <div class="content-btn">
                <el-button @click="playFlag = true" class="content-btn-watch" type="primary">立即观看</el-button>
                <el-button class="content-btn-collect" @click="handleCollect">点击收藏</el-button>
            </div>
            <ul class="content-desc">
                <li>
                    <h4>{{ video?.videoWithRating[0]?.rating }}+</h4>
                    <span>73619人评分</span>
                </li>
                <li class="normal"></li>
                <li>
                    <h4>{{ video?.videoWithRating[0].language }}</h4>
                    <span>电影语言</span>
                </li>
                <li class="normal"></li>
                <li>
                    <h4>{{ dayjs(video?.videoWithRating[0]?.year).format("YYYY年") }}</h4>
                    <span>上映日期</span>
                </li>
                <li class="normal"></li>
                <li>
                    <h4>{{ video?.videoWithRating[0]?.duration }}分</h4>
                    <span>电影片长</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { StarFilled } from "@element-plus/icons-vue"
import { defineModel, withDefaults } from "vue";
import type { Video } from "../index.vue";
import { setCollect } from "@/api";
import dayjs from 'dayjs';
import { useUserInfoStore } from "@/stores";
const playFlag = defineModel()
const { video, vid } = withDefaults(defineProps<{
    video: Video | null,
    vid?: string
}>(), {
    video: null,
    vid: ""
})
const token = useUserInfoStore().user?.token
function handleCollect() {
    setCollect(vid, token as string).then(({ data }) => {
        const { data: d } = data as { data: number }
        if (d === 1) {
            ElMessage({
                message: '收藏成功',
                type: 'success',
            })
        } else if (d === 0) {
            ElMessage({
                message: '取消收藏',
                type: 'info',
            })
        } else {
            ElMessage({
                message: '收藏失败',
                type: 'error',
            })
        }
    })
}
</script>

<style scoped lang="scss">
.details-content {
    margin: 60px 0 40px;
    width: 100%;
    height: 300px;
    @include flex($ai: center);

    .content-btn {
        margin-top: 20px;

        &-collect {
            background-color: transparent;
            border-color: gray;
            color: gray;

            &:hover {
                background-color: transparent;
                border-color: whitesmoke;
                color: whitesmoke;
            }
        }

        &-watch {
            background-color: $color-purple;
            border-color: $color-purple;

            &:hover {
                background-color: lighten($color: $color-purple, $amount: 10%);
                border-color: lighten($color: $color-purple, $amount: 10%);
            }
        }


    }

    .content-message {
        height: 273px;
        margin-left: 20px;
        @include flex($fd: column, $jc: space-between);

        h3 {
            letter-spacing: 1px;
            font-size: 26px;
            margin-bottom: 4px;
        }

        p {
            font-size: 16px;
            color: $color-white-light;
            margin-top: 14px;

            &:where(.active) {
                color: white;

                .el-icon {
                    margin-right: 2px;
                    color: #FFC107;
                }
            }
        }
    }

    .content-desc {
        margin-top: 20px;
        @include flex($ai: center, $jc: space-between);
        width: 410px;

        li {
            @include flex($ai: center, $fd: column, $jc: space-between);

            height: 60px;

            &:where(.normal) {
                height: 20px;
                border-right: 2px solid darken($color: $color-white-light, $amount: 50);
            }

            h4 {
                font-size: 24px;
            }

            span {
                font-size: 14px;
                color: $color-white-light;
            }
        }
    }

    img {
        height: 300px;
        width: 210px;
        border-radius: 4px;
        object-fit: cover;
    }
}
</style>
