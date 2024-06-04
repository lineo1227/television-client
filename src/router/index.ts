import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/home/index.vue"
import All from "@/views/all/index.vue"
import Movie from "@/views/movie/index.vue"
import Anime from "@/views/anime/index.vue"
import Vip from "@/views/vip/index.vue"
import Brower from "@/views/brower/index.vue"
import Search from "@/views/search/index.vue"
import Details from "@/views/details/index.vue"
import User from "@/views/user/index.vue"
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/all',
      name: 'all',
      component: All
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/anime',
      name: 'anime',
      component: Anime
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/brower',
      name: 'brower',
      component: Brower
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }, {
      path: '/details/:id',
      name: 'details',
      component: Details
    }, {
      path: '/user',
      name: 'user',
      component: User
    }

  ]
})
router.beforeEach((to, from, next) => {
  // ...
  next()
})
export default router
