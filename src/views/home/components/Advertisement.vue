<template>
    <div class="advertisement">
        <div class="advertisement-title">{{ video?.videoWithRating[0].title }}</div>
        <div class="advertisement-digest" v-if="video">
            <span><el-icon>
                    <StarFilled />
                </el-icon>({{ video?.videoWithRating[0].rating }}/10.0)</span>
            类型: {{ video.videoTypeList.join(" / ") }}
        </div>
        <div class="advertisement-desc">
            {{ video?.videoWithRating[0].description }}
        </div>
        <div class="advertisement-btn">
            <el-button class="advertisement-btn-watch" type="primary" @click="pathTo('/details/33')">立即观看</el-button>
            <el-button class="advertisement-btn-collect" @click="handleCollect">点击收藏</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { StarFilled } from "@element-plus/icons-vue"
import { getVideoDetail, setCollect } from "@/api"
import type { Video } from "@/views/details/index.vue"
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserInfoStore } from '@/stores';
const video = ref<Video | null>(null)
const router = useRouter()
const store = useUserInfoStore()
getVideoDetail('33').then(({ data }) => {
    const { data: v } = data as { data: Video }
    video.value = v
})
function pathTo(url: string) {
    router.push(url)
}
function handleCollect() {
    setCollect(33, store.user?.token as string).then(({ data }) => {
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
            store.user = null
        }
    })
}
</script>

<style lang="scss">
.advertisement {
    width: 1028px;
    margin: 0 auto;

    >:where(div) {
        width: 400px;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }

    &-title {
        white-space: nowrap;
        font-size: 64px;
        letter-spacing: 4px;
    }

    &-digest {
        font-size: 16px;
        color: $color-white-light;
        line-height: 20px;

        span {
            .el-icon {
                margin-right: 2px;
                color: #FFC107;
            }

            color: white;
            margin-right: 2px;
        }
    }

    &-desc {
        color: $color-white-light;
        font-size: 16px;
        line-height: 20px;
        height: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }

    &-btn {
        margin-top: 30px;

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
}
</style>
