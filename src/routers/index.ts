import menuList from '@/assets/json/menuList.json'
import { HOME_URL } from '@/config'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const mode = import.meta.env.VITE_ROUTER_MODE

const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory(),
}

// const routes = computed(() => {
//   menuList.forEach((item) => {

//   })
// })

const router = createRouter({
  history: routerMode[mode](),
  routes: [
    {
      path: '/',
      redirect: HOME_URL,
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/layout/default.vue'),
      redirect: HOME_URL,
      children: [],
    },
  ],
})

export default router
