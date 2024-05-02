import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home/index.vue"
import Classification from "@/views/classification/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/classification',
      name: 'classification',
      component: Classification
    }
  ]
})

export default router
