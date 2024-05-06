<template>
    <li class="item" @click="pathTo">
        <img src="@/assets/images/test.png" alt="">
        <h5>死侍：危险行为 </h5>
        <span>49亿票房燃爆国漫</span>
    </li>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const pathTo = () => {
    router.push('/details/111')
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
