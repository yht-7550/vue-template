import { piniaPersistPrefix } from '@/config'
import { piniaPersistConfig } from '../helper/persist'

export const useAuthStore = defineStore('auth', () => {
  /** 页面权限列表 */
  const menuList = ref<Menu.MenuOptions[]>([])
  /** 扁平化后的页面权限列表 */
  const flattenMenuList = computed(() => getFlattenMenus())
  /** 保持页面缓存的列表 */
  const keepAliveNames = ref<string[]>([])

  /** 处理嵌套路由 */
  const getFlattenMenus = () => {
    const flattenMenus: Menu.MenuOptions[] = []
    const loop = (_menuList: Menu.MenuOptions[]) => {
      _menuList.forEach((item) => {
        if (item.children) {
          loop(item.children)
        }
        else {
          flattenMenus.push(item)
        }
      })
    }
    loop(menuList.value)
    return flattenMenus
  }

  /** 设置页面缓存 */
  const addKeepAliveName = (name: string) => !keepAliveNames.value.includes(name) && keepAliveNames.value.push(name)
  /** 移除页面缓存 */
  const removeKeepAliveName = (name: string) => keepAliveNames.value = keepAliveNames.value.filter(item => item !== name)
  /** 重置页面缓存 */
  const setKeepAliveName = (keepAliveName: string[] = []) => {
    keepAliveNames.value = keepAliveName
  }
  return {
    menuList,
    flattenMenuList,
    keepAliveNames,
    addKeepAliveName,
    removeKeepAliveName,
    setKeepAliveName,
  }
}, {
  persist: piniaPersistConfig(`${piniaPersistPrefix}-auth`),
})
