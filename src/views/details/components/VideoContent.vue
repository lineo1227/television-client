<template>
    <div class="video-content">

        <vue3VideoPlay @error="handleError" :header="`{token:${store.user?.token}}`" width="100%" height="100%"
            title="冰河世纪" :src="url" :type="options.type" :autoPlay="false" />
    </div>
</template>

<script setup lang="ts">
import "vue3-video-play/dist/style.css";
import vue3VideoPlay from "vue3-video-play";
import { reactive } from 'vue'
import { useUserInfoStore } from "@/stores";
const { url } = withDefaults(defineProps<{
    url: string
}>(), {
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
})
const store = useUserInfoStore()

const options = reactive({
    src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", //视频源
    type: "video/mp4", //视频类型
});
function handleError(e: unknown) {
    console.log(e)
}
</script>

<style scoped lang="scss">
.video-content {
    margin: 40px 0;
}
</style>
