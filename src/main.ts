import app from '@/stores'
import router from './router'
import '@/assets/style/style.css'
import '@/utils/rem.ts'
localStorage.removeItem('menus')
app.use(router)
app.mount('#app')