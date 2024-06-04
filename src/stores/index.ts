import { createApp } from 'vue'
import App from '@/App.vue'
const app = createApp(App)
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { useHotSearchListStore } from "./modules/hotSearchListStore"
import { useUserInfoStore } from "./modules/userInfoStore"
const pinia = createPinia()
pinia.use(
    createPersistedState({
        storage: localStorage
    })
)
app.use(pinia)
export { useHotSearchListStore, useUserInfoStore }
export default app