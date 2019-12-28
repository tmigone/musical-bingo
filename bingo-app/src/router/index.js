import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'song',
    component: () => import('../views/Bingo.vue')
  },
  {
    path: '/display',
    name: 'song',
    component: () => import('../views/BingoDisplay.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
