<template>
    <li class="hot-item">
        <img src="@/assets/images/hot-item.png" alt="">
        <h5>好像也没那么热血沸腾</h5>
        <span>类型: 动作 / 科幻 / 动画 / 冒险</span>
        <div class="hot-item-digest">
            <p>
                <span><el-icon>
                        <StarFilled />
                    </el-icon>(4.8/5.0)</span> <span>漫威英雄系列</span>
            </p>
            <p>
                <span>230万人看过</span> <span>分享给朋友观看</span>
            </p>
        </div>
    </li>
</template>

<script setup lang="ts">
import { StarFilled } from "@element-plus/icons-vue"
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
