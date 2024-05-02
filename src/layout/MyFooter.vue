<template>
    <div class="television-footer">
        <ul class="television__instructions">
            <li>
                <h4>友情链接</h4>
                <div>
                    <span>百度</span>
                    <span>谷歌</span>
                    <span>必应</span>
                    <span>搜狗</span>
                    <span>360</span>
                </div>
            </li>
            <li>
                <h4>合作联系</h4>
                <div>
                    <span>QQ: 1445154800</span>
                    <span>邮箱: 1445154800@qq.com</span>
                </div>
            </li>
        </ul>
        <div class="television__reference">
            © 2023 SHOUTU - All Rights Reserved
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.television-footer {
    color: white;
    width: 1028px;


    .television {
        &__instructions {
            padding: 40px 0;
            border-bottom: 1px solid rgba(72, 72, 72, 1);
            border-top: 1px solid rgba(72, 72, 72, 1);

            li {
                width: 50%;
                font-size: 16px;
                color: rgba(253, 253, 253, .7);

                h4 {
                    color: white;
                    font-size: 20px;
                    margin-bottom: 20px;
                }

                span {
                    margin-right: 40px;
                }
            }

            @include flex($ai: center, $jc: space-between)
        }

        &__reference {
            text-align: center;
            padding: 20px 0;
            font-size: 16px;
            color: rgba(253, 253, 253, .7);

        }
    }

}
</style>
