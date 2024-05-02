<template>
    <div class="advertisement">
        <div class="advertisement-title">神奇蜘蛛侠</div>
        <div class="advertisement-digest">类型: 动作 / 科幻 / 恐怖 / 奇幻 / 冒险</div>
        <div class="advertisement-desc">
            奇异博士斯蒂芬·斯特兰奇正在参加他的单恋对象克里斯汀·帕尔默的婚礼，这时外面的街道上出了乱子。一只巨大的章鱼怪正在跨越维度追逐名叫阿美莉卡·查维兹少的远古魔法师穿越到现在入侵地球的时代...
        </div>
        <div class="advertisement-btn">
            <el-button class="advertisement-btn-watch" type="primary">立即观看</el-button>
            <el-button class="advertisement-btn-collect">点击收藏</el-button>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.advertisement {
    width: 1028px;
    margin: 0 auto;

    >:where(div) {
        width: 400px;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }

    &-title {
        font-size: 64px;
        letter-spacing: 4px;
    }

    &-digest {
        font-size: 16px;
    }

    &-desc {
        color: rgba(255, 255, 255, .7);
        font-size: 16px;
        line-height: 20px;
    }

    &-btn {
        margin-top: 30px;

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

        &-watch {
            background-color: $color-purple;
            border-color: $color-purple;

            &:hover {
                background-color: lighten($color: $color-purple, $amount: 10%);
                border-color: lighten($color: $color-purple, $amount: 10%);
            }
        }
    }
}
</style>
