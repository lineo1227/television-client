<template>
    <div class="television-header">
        <div class="television__logo">
            television-client
        </div>
        <ul class="television__model">
            <li @click="handleClick(item)" :class="active === item.id && 'active'" v-for="item in routerList"
                :key="item.id">
                {{ item.name }}</li>
        </ul>
        <div class="television__search">
            <el-input v-model="input2" @keyup.enter="pathTo('/search?key=' + input2)" placeholder="猫和老鼠"
                :suffix-icon="Search" />
        </div>
        <div class="television__user">
            <div class="television__user-record" @click="pathTo('/brower')">
                <el-icon>
                    <PieChart />
                </el-icon>历史
            </div>
            <div class="television__user-control" @click="changePopupFlag(true)"><el-icon>
                    <ChatDotSquare />
                </el-icon>求片</div>
            <div class="television__user-avatar">

            </div>
        </div>
    </div>
    <el-dialog v-model="popupFlag" width="400" center class="television-header-popup" :before-close="handleClose">
        <h3>把想看的影视留言</h3>
        <div class="message">即时影视，给你最好的体验！</div>
        <el-input v-model="textarea" style="padding:0 20px;box-sizing: border-box;" :rows="4" type="textarea" />
        <template #footer>
            <el-button type="primary" @click="onSubmit">点击提交</el-button>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { Search, ChatDotSquare, PieChart } from '@element-plus/icons-vue'
const active = ref(0)
const router = useRouter()
const route = useRoute()
interface RouterType {
    id: number,
    name: string,
    path: string
}
const routerList = ref<RouterType[]>([
    { id: 0, name: '首页', path: '/' },
    { id: 1, name: '全部', path: '/all' },
    { id: 2, name: '电影', path: '/movie' },
    { id: 3, name: '动漫', path: '/anime' },
    { id: 4, name: '会员专区', path: '/vip' },
])
const handleClick = (item: RouterType) => {
    pathTo(item.path, item.id)
}
const pathTo = (path: string, id = -1) => {
    router.push(path)
    active.value = id
}
setTimeout(() => {
    active.value = routerList.value.findIndex(item => item.path === route.path)
})
const textarea = ref("")
const input2 = ref('')
const popupFlag = ref(false)
const changePopupFlag = (bool: boolean) => {
    popupFlag.value = bool
}
const handleClose = (done: () => void) => {
    ElMessageBox.confirm('确定取消提交?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
    }).then(() => {
        ElMessage({
            type: 'info',
            message: '取消提交',
        })
        done()
        textarea.value = ""
    })
        .catch(() => {
            // catch error
        })
}
const onSubmit = () => {
    ElMessageBox.confirm('确定提交?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
    }).then(() => {
        popupFlag.value = false
        ElMessage({
            type: 'success',
            message: '提交成功',
        })
        textarea.value = ""
    })

}
</script>

<style lang="scss">
.television-header {
    width: 1188px;
    color: white;
    @include flex($ai: center);
    position: relative;
    z-index: 2;
    height: 40px;

    &-popup {
        background-color: #191825;

        h3 {
            text-align: center;
            color: white;
            font-size: 24px;
        }

        .message {
            font-size: 20px;
            text-align: center;
            color: $color-white-light;
            margin: 40px 0;
        }

        .el-button {
            background-color: $color-purple;
            border-color: $color-purple;
            margin-top: 10px;

            &:hover {
                background-color: lighten($color: $color-purple, $amount: 10%);
                border-color: lighten($color: $color-purple, $amount: 10%);
            }
        }
    }

    .television {
        &__logo {
            font-size: 24px;
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

                &.active {
                    font-size: 18px;
                    font-weight: 700;
                }
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
                cursor: pointer;

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
            margin-left: 68px;
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
