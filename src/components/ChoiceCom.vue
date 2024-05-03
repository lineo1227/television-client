<template>
    <div class="choice-panel">
        <ul class="choice-list">
            <li v-for="item in list " :key="item.name">
                {{ item.name }}
                <ul>
                    <li class="normal" @click="changeList(item, it)" :class="item.check === it ? 'active' : ''"
                        v-for="(it, index) in item.list" :key="index">
                        {{ it }}</li>
                </ul>
            </li>

        </ul>

    </div>
    <div class="choice-btns">
        <span size="small" @click="active = index" :class="active === index ? 'active' : ''"
            v-for="(item, index) in btns" :key="item.name">{{
                item.name
            }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref(0)
interface ListType {
    name: string,
    check: string,
    list: string[]
}
const list = ref<ListType[]>([{
    name: "分类",
    check: "电影",
    list: [
        "电影", "动漫", "儿童"
    ]
}, {
    name: "资费",
    check: "全部",
    list: [
        "全部", "免费", "会员"
    ]
}, {
    name: "类型",
    check: "全部",
    list: [
        "全部", "动漫", "儿童"
    ]
}, {
    name: "年代",
    check: "全部",
    list: [
        "全部", "2023", "2022", "2021", "2020", "更早"
    ]
}, {
    name: "地区",
    check: "全部",
    list: [
        "全部", "内地", "欧美", "港台", "日本", "韩国", "其他"
    ]
},
])
const btns = ref([{ name: "本周热播" }, { name: "历史热播", }, { name: "最新上线", }, { name: "最受欢迎", }])
const changeList = (item: ListType, it: string) => {
    item.check = it
}
</script>

<style scoped lang="scss">
.choice-panel {
    margin-top: 50px;
    width: 100%;
    @include boxPadding(30px 40px);
    height: 310px;
    border: 2px solid transparent;
    border-radius: 6px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, $color-purple-light, $color-purple-light), $border-color;
}

.choice-list {
    height: 100%;
    @include flex($fd: column, $jc: space-between);

    font-size: 16px;

    >li {
        @include flex($ai: center);

        >ul {
            @include flex;

            li {
                cursor: pointer;
                font-size: 14px;
                @include boxPadding(6px 10px);
                border-radius: 4px;
                margin-left: 20px;
                transition: .3s;

                &:hover {
                    background-color: $color-purple;
                }

                &:where(.active) {
                    background-color: $color-purple;
                }
            }
        }
    }
}

.choice-btns {
    @include flex;
    margin-top: 20px;

    span {
        padding: 10px 14px;
        margin-right: 12px;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;

        &:where(.active) {
            background-color: $color-purple;
        }

    }
}
</style>
