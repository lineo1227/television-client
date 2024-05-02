<template>
    <div class="television-header">
        <div class="television__logo">
            television-client
        </div>
        <ul class="television__model">
            <li>首页</li>
            <li>电影</li>
            <li>动漫</li>
            <li>会员专区</li>
        </ul>
        <div class="television__search">
            <el-input v-model="input2" placeholder="猫和老鼠" :suffix-icon="Search" />
        </div>
        <div class="television__user">
            <div class="television__user-record">
                <el-icon>
                    <PieChart />
                </el-icon>历史
            </div>
            <div class="television__user-control"><el-icon>
                    <ChatDotSquare />
                </el-icon>求片</div>
            <div class="television__user-avatar">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, ChatDotSquare, PieChart } from '@element-plus/icons-vue'
const input2 = ref('')
</script>

<style lang="scss">
.television-header {
    width: 1028px;
    color: white;
    @include flex($ai: center);
    position: relative;
    z-index: 2;
    height: 40px;

    .television {
        &__logo {
            font-size: 20px;
            font-weight: 700;
            cursor: pointer;
        }

        &__model {
            margin-left: 44px;
            font-size: 16px;
            @include flex($ai: center);

            li {
                cursor: pointer;
                margin-right: 35px;
            }
        }

        &__user {
            flex: 1;
            @include flex($ai: center, $jc: flex-end);
            font-size: 16px;

            &-record,
            &-control {
                @include flex($ai: center);
                margin-right: 20px;

                .el-icon {
                    margin-right: 5px;
                }
            }

            &-record {
                cursor: pointer;
            }

            &-avatar {
                height: 32px;
                width: 32px;
                border-radius: 50%;
                background-color: azure;
            }
        }

        &__search {
            margin-left: 88px;
            width: 200px;

            .el-input__wrapper {
                background: rgba(204, 204, 204, 0.28);
            }

            .el-input__inner {
                color: white;
            }
        }
    }

}
</style>
