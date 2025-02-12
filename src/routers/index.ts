import { LOGIN_URL } from '@/config'
import { useAuthStore, useUserStore } from '@/stores'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { initDynamicRouter } from './modules/dynamicRouter'
import { errorRouter, staticRouter } from './modules/staticRouter'

const mode = import.meta.env.VITE_ROUTER_MODE

const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory(),
}

const router = createRouter({
  history: routerMode[mode](),
  routes: [...staticRouter, ...errorRouter],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const authStore = useAuthStore()
  const { flattenMenuList } = storeToRefs(authStore)
  const { token } = storeToRefs(userStore)

  if (to.path.toLocaleLowerCase() === LOGIN_URL) {
    if (token.value) {
      return next(from.fullPath)
    }
    resetRouter()
    return next()
  }
  // 判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
  // if (ROUTER_WHITE_LIST.includes(to.path)) return next();

  // 判断是否有 Token，没有重定向到 login 页面
  if (!token.value) {
    return next({ path: LOGIN_URL, replace: true })
  }

  // 如果没有菜单列表，就重新请求菜单列表并添加动态路由
  if (!flattenMenuList.value.length) {
    await initDynamicRouter()
    return next({ ...to, replace: true })
  }

  next()
})

/**
 * @description 重置路由
 */
export const resetRouter = () => {
  const authStore = useAuthStore()
  const { flattenMenuList } = storeToRefs(authStore)
  flattenMenuList.value.forEach((route) => {
    const { name } = route
    if (name && router.hasRoute(name))
      router.removeRoute(name)
  })
}

export default router
