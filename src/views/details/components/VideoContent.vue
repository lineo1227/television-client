<template>
    <div class="video-content">
        <vue3VideoPlay width="100%" title="冰河世纪" :src="options.src" :type="options.type" :autoPlay="false" />
    </div>
</template>

<script setup>
import "vue3-video-play/dist/style.css";
import vue3VideoPlay from "vue3-video-play";
import { reactive } from 'vue'
const options = reactive({
    src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", //视频源
    type: "m3u8", //视频类型
});

</script>

<style scoped lang="scss">
.video-content {
    margin: 40px 0;
}
</style>
