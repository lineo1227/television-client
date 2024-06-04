import { defineStore } from "pinia";
import type { Item } from "@/views/home/index.vue";

export const useUserInfoStore = defineStore("userInfo", {
    state: (): { user: { username: string, token: string, id: string | number } | null } => ({
        user: {
            username: "",
            token: "",
            id: ""
        }
    }),
    actions: {

    },
    persist: true,
});