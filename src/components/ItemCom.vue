<template>
    <li class="item" @click="pathTo">
        <img :src="item.coverUrl" loading="lazy" alt="">
        <h5>{{ item.title }} </h5>
        <span>{{ dayjs(item.year).format('YYYY-MM-DD') }}</span>
    </li>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
import type { Item } from '@/views/home/index.vue';
import dayjs from "dayjs"
interface ItemType extends Item {
    year?: string
}
interface Props {
    item: ItemType
}
const { item } = withDefaults(defineProps<Props>(), {
    item: () => ({ id: -1, title: '暂无数据', coverUrl: '@/assets/images/test.png', year: dayjs().format('YYYY-MM-DD') })
})

import { useRouter } from 'vue-router'
const router = useRouter()
const pathTo = () => {
    router.push(`/details/${item.id}`)
}
</script>

<style lang="scss">
.item {
    height: 406px;
    width: 230px;
    border-radius: 6px;
    @include border;
    cursor: pointer;
    @include flex($ai: center, $fd: column);
    font-size: 16px;
    color: $color-white-light;
    margin-bottom: 20px;

    img {
        height: 300px;
        width: 210px;
        margin: 10px;
        margin-bottom: 20px;
        border-radius: 4px;

    }

    h5 {
        font-size: 18px;
        color: white;
    }

    h5,
    span {
        margin-top: 10px;
    }
}
</style>
