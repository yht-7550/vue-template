import type { RouteRecordRaw } from 'vue-router'
import menuList from '@/assets/json/menuList.json'
import { LOGIN_URL } from '@/config'
import router from '@/routers/index'

// 引入 views 文件夹下所有 vue 文件
// const modules = import.meta.glob('@/views/**/*.vue')

/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = async () => {
  try {
    // menuList.forEach((item) => {
    //   item.children && delete item.children
    //   if (item.component && typeof item.component == 'string') {
    //     item.component = modules[`/src/views${item.component}.vue`]
    //   }
    //   if (item.meta.isFull) {
    //     router.addRoute(item as unknown as RouteRecordRaw)
    //   }
    //   else {
    //     router.addRoute('layout', item as unknown as RouteRecordRaw)
    //   }
    // })
  }
  catch (error) {
    router.replace(LOGIN_URL)
    return Promise.reject(error)
  }
}
