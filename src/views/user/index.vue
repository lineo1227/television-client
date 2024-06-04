<template>
    <div class="user">
        <div class="user__container">
            <div class="user__container-content">
                <div class="content-title">
                    <FlurBox>
                        <ul class="content-title-list">
                            <li>
                                <p>10</p>
                                <p>我的积分</p>
                            </li>
                            <li>
                                <p>默认会员</p>
                                <p>我的等级</p>
                            </li>
                            <li>
                                <p>1</p>
                                <p>登录次数</p>
                            </li>
                        </ul>
                    </FlurBox>
                </div>
                <div class="content-control">
                    <FlurBox>
                        <ul class="content-control-list">
                            <li v-for="item in 8">
                                <span>
                                    我的资料
                                </span><el-icon>
                                    <ArrowRight />
                                </el-icon>
                            </li>
                        </ul>
                        <el-button @click="exit">退出登录</el-button>
                    </FlurBox>
                </div>
            </div>
            <div class="user__container-desc">
                <FlurBox>
                    <div class="desc-content">
                        <h3>我的资料</h3>
                        <el-divider />
                        <ul class="desc-list">
                            <li v-for="item in 8">
                                <span>
                                    用户组
                                </span>
                                <span>
                                    xxxxxxxxxxxxxxxxx
                                </span>
                            </li>
                        </ul>
                    </div>

                </FlurBox>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import FlurBox from "./components/FlurBox.vue"
import { ArrowRight } from "@element-plus/icons-vue"
import { useRouter } from "vue-router"
import { useUserInfoStore } from "@/stores";
const router = useRouter();
const exit = () => {
    useUserInfoStore().user = null;
    router.push("/")
}
</script>

<style lang="scss">
.user {
    @include RouterCss(calc(100vh - 296px));

    &__container {
        margin: 20px 0;
        @include flex($jc: space-between, $ai: center);
        height: calc(100vh - 336px);
        font-size: 16px;

        &-content {
            @include flex($fd: column, $jc: center, $ai: center);
            width: 310px;
            height: 100%;

            .content-title {
                height: 110px;
                width: 100%;

                &-list {
                    @include flex($ai: center, $jc: space-between);
                    height: 100%;

                    p {
                        text-align: center;

                        &:first-child {
                            margin-bottom: 16px;
                        }
                    }
                }
            }

            .content-control {
                margin-top: 20px;
                flex: 1;
                width: 100%;

                li {
                    @include flex($jc: space-between, $ai: center);
                    margin-bottom: 20px;
                }

                button {
                    width: 100%;
                    height: 36px;
                    margin-top: 20px;
                    font-size: 13px;
                }
            }
        }

        &-desc {
            flex: 1;
            height: 100%;
            margin-left: 20px;

            .desc-content {
                @include boxPadding(10px);
            }

            h3 {
                font-size: 20px;
            }

            li {
                font-size: 16px;
                @include boxPadding(16px 0);
                border-bottom: 1px solid rgb(85, 85, 85);

                &:first-child {
                    padding-top: 0;
                }
            }

            .el-divider--horizontal {
                margin: 16px 0;
                border-color: rgb(85, 85, 85);
            }
        }
    }
}
</style>
