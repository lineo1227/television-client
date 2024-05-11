<template>
    <div class="upload">
        <el-button>下载</el-button>
        <el-button>确认</el-button>
        <el-button>取消</el-button>
        <el-divider />
        <el-button class="upload-btn">第一集</el-button>

    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.upload {
    margin-top: 40px;
    border-radius: 10px;
    @include border;
    @include boxPadding(20px);
    background-image: linear-gradient(to right, #1c1b25, #1c1b25),
        $border-color;

    &-btn {
        font-size: 12px;
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
