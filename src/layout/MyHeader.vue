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
            <FlurBox v-model="flurBoxFlag" v-show="searchSlotFlag">
                <ul class="kind-list">
                    <li @click="kind = item" v-for="item in kindList" :key="item" :class="item === kind && 'active'">{{
                item }}</li>
                </ul>
                <ul class="kind-hot">
                    <li v-for="item in 4" :key="item"> <span :class='"hot-" + item'>{{ item }}</span> {{ kind }}</li>
                </ul>
            </FlurBox>
            <el-input v-model="input2" @focus="changeHotSearchFlag(true)" @blur="changeHotSearchFlag(false)"
                @keyup.enter="pathTo('/search?key=' + input2)" placeholder="猫和老鼠" :suffix-icon="Search" />
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
            <div @click="open = true" class="television__user-avatar">

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
    <el-dialog class="login-dialog" v-model="open">
        <LoginCom v-model="open" />
    </el-dialog>
</template>

<script setup lang="ts">
import LoginCom from '@/components/LoginCom.vue';
import FlurBox from "@/components/FlurBox.vue"
import { ref, watch } from 'vue';
import { useRouter, useRoute } from "vue-router"
import { Search, ChatDotSquare, PieChart } from '@element-plus/icons-vue'
const open = ref(false)
const kind = ref("热门搜素")
const kindList = ref([
    "热门搜素",
    "电影",
    "动漫",
])
const active = ref(0)
const router = useRouter()
const route = useRoute()
interface RouterType {
    id: number,
    name: string,
    path: string
}
const flurBoxFlag = ref(false)
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

const searchSlotFlag = ref(false)
const searchInputFlag = ref(false)
const changeHotSearchFlag = (bool: boolean) => {
    searchInputFlag.value = bool
    if (!searchInputFlag.value && !flurBoxFlag.value) {
        searchSlotFlag.value = bool

    }
}
watch([searchInputFlag, flurBoxFlag], ([n], [n2]) => {
    if (!n) {
        if (n2) {
            return
        }
    }
    searchSlotFlag.value = n
})
</script>

<style lang="scss">
.kind {
    &-list {
        @include flex($ai: center);
        margin-bottom: 16px;

        li {
            cursor: pointer;
            font-size: 18px;
            color: $color-white-light;
            margin-right: 20px;

            &.active {
                color: white;
            }
        }
    }

    &-hot {
        font-size: 16px;

        li {
            @include flex($ai: center);
            cursor: pointer;

            span {
                height: 18px;
                width: 18px;
                background: linear-gradient(134.43deg, rgba(125, 18, 255, 0.2) 0%, rgba(255, 141, 26, 0.2) 100%);
                margin-right: 8px;
                font-size: 12px;
                text-align: center;
                line-height: 18px;
                border-radius: 2px;
                color: whitesmoke;

                &.hot-1 {
                    background: linear-gradient(134.43deg, rgba(125, 18, 255, 1) 0%, rgba(255, 141, 26, 0.72) 100%);
                }

                &.hot-2 {
                    background: linear-gradient(134.43deg, rgba(125, 18, 255, .8) 0%, rgba(255, 141, 26, 0.6) 100%);
                }

                &.hot-3 {
                    background: linear-gradient(134.43deg, rgba(125, 18, 255, .5) 0%, rgba(255, 141, 26, 0.4) 100%);
                }
            }

            padding: 10px 0;
        }
    }
}

.login-dialog {
    padding: 0;

    .el-dialog__header {
        display: none;
    }
}

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
            font-size: 20px;
        }

        .message {
            font-size: 16px;
            text-align: center;
            color: $color-white-light;
            margin: 20px 0;
        }

        .el-button {
            background-color: $color-purple;
            border-color: $color-purple;
            height: 26px;
            padding: 0 10px;
            font-size: 12px;

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
            position: relative;

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
