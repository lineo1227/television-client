<template>
    <div class="upload">
        <el-button @click="handleDownload" v-if="!download">下载</el-button>
        <el-button @click="handleDownload(false, true)" v-show="download">确认</el-button>
        <el-button @click="handleDownload(false)" v-show="download">取消</el-button>
        <el-divider />
        <el-button @click="toggleChecked" :class="(checked && download) && 'active'" class="upload-btn">第一集
            <el-icon class="upload-icon">
                <Check />
            </el-icon></el-button>

    </div>
</template>

<script setup lang="ts">
import { ref, withDefaults } from 'vue';
import { Check } from '@element-plus/icons-vue';
const download = ref(false)
const checked = ref(false)
const { url } = withDefaults(defineProps<{
    url: string
}>(), {
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
})
function handleDownload(bool = true, d: boolean = false) {
    download.value = bool
    if (d) {
        const a = document.createElement("a")
        a.setAttribute("download", "")
        a.setAttribute("href", url)
        a.target = "_blank";
        a.click()
        // a.remove()
        download.value = false
        checked.value = false
    }
}
function toggleChecked() {
    if (!download.value) return
    checked.value = !checked.value
}
</script>

<style scoped lang="scss">
.upload {
    margin-top: 40px;
    border-radius: 10px;
    @include border;
    @include boxPadding(20px);
    background-image: linear-gradient(to right, #1c1b25, #1c1b25),
        $border-color;

    button {
        padding: 0 16px;
        height: 36px;
        font-size: 12px;

        .upload-icon {
            display: none;
        }

        &:where(.active) {
            position: relative;
            background-color: rgba(255, 255, 255, 0.8);

            .upload-icon {
                display: block;
                position: absolute;
                right: 10px;
                top: 10px;
                font-size: 20px;
                color: $color-purple-light;
            }

        }
    }

    &-btn {
        line-height: 16px;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.5);
        color: rgba(255, 255, 255, 0.8);

        // &:where(.cancel) {}
    }

    .el-divider--horizontal {
        margin-top: 16px;
    }
}
</style>
