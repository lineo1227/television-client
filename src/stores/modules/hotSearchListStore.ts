import { defineStore } from "pinia";
import type { Item } from "@/views/home/index.vue";

export const useHotSearchListStore = defineStore("hotSearchList", {
    state: (): { list: { anime: Item[], movie: Item[], default: Item[] } } => ({
        list: {
            anime: [], movie: [], default: []
        }
    }),
    actions: {

    },
    persist: true,
});