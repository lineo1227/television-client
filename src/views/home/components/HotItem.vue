<template>
    <li class="hot-item" @click="pathTo(item.id)">
        <img :src="item.coverUrl" alt="">
        <h5>{{ item.title }}</h5>
        <span>{{ item.typeList?.join("/") }}</span>
        <div class="hot-item-digest">
            <p>
                <span><el-icon>
                        <StarFilled />
                    </el-icon>({{ item.rating }}/10.0)</span> <span>漫威英雄系列</span>
            </p>
            <p>
                <span>{{ item.playCount }}人看过</span> <span>分享给朋友观看</span>
            </p>
        </div>
    </li>
</template>

<script setup lang="ts">
import { StarFilled } from "@element-plus/icons-vue"
import { withDefaults } from 'vue';
import type { Item } from '@/views/home/index.vue';
import dayjs from "dayjs"
import { useRouter } from 'vue-router';
interface ItemType extends Item {
    year?: string,
    rating?: number,
    playCount?: number
}
interface Props {
    item: ItemType
}
withDefaults(defineProps<Props>(), {
    item: () => ({ id: -1, title: '暂无数据', coverUrl: '@/assets/images/test.png', year: dayjs().format('YYYY-MM-DD'), rating: 0, playCount: 0 })
})
const router = useRouter()
const pathTo = (id: number) => {
    router.push({
        path: `/details/${id}`
    })
}
</script>

<style lang="scss">
.hot-item {
    width: 290px;
    border: 2px solid transparent;
    border-radius: 6px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, $color-purple-light, $color-purple-light), $border-color;
    cursor: pointer;
    @include flex($fd: column);
    font-size: 16px;
    color: $color-white-light;
    @include boxPadding(15px);

    &-digest {
        @include boxPadding(15px);

        p {
            color: rgba(255, 255, 255, .5);

            font-size: 14px;
            @include flex($jc: space-between);

            &:first-child {
                margin-bottom: 20px;

                span {
                    &:first-child {
                        color: white;
                        @include flex($ai: center);

                        .el-icon {
                            margin-right: 2px;
                            color: #FFC107;
                        }
                    }
                }
            }

        }
    }

    img {
        height: 261px;
        object-fit: cover;
    }

    h5 {
        margin-top: 20px;
        font-size: 18px;
        color: white;
    }

    >span {
        margin-top: 14px;
    }

    >div {
        margin-top: 20px;
        background-color: rgba(125, 18, 255, .2);
        width: 100%;
    }
}
</style>
