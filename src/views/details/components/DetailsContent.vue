<template>
    <div class="details-content">
        <img src="@/assets/images/test.png" alt="">
        <div class="content-message">
            <h3>蚁人与黄蜂女：量子狂潮</h3>
            <p>英语·2021年·133分</p>
            <p class="active">
                <el-icon>
                    <StarFilled />
                </el-icon>(4.8/5.0)
            </p>
            <p>类型: 动作 / 科幻 / 恐怖 / 奇幻 </p>
            <div class="content-btn">
                <el-button @click="playFlag = true" class="content-btn-watch" type="primary">立即观看</el-button>
                <el-button class="content-btn-collect">点击收藏</el-button>
            </div>
            <ul class="content-desc">
                <li>
                    <h4>4.8+</h4>
                    <span>73619人评分</span>
                </li>
                <li class="normal"></li>
                <li>
                    <h4>英语</h4>
                    <span>电影语言</span>
                </li>
                <li class="normal"></li>
                <li>
                    <h4>2017</h4>
                    <span>上映日期</span>
                </li>
                <li class="normal"></li>
                <li>
                    <h4>133分</h4>
                    <span>电影片长</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { StarFilled } from "@element-plus/icons-vue"
import { defineModel } from "vue";
const playFlag = defineModel()
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
