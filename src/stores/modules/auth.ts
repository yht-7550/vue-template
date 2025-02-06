import { piniaPersistPrefix } from '@/config'
import { piniaPersistConfig } from '../helper/persist'

export const useAuthStore = defineStore('auth', () => {
  /** 页面权限列表 */
  const menuList = ref<Menu.MenuOptions[]>([])
  /** 扁平化后的页面权限列表 */
  const flattenMenuList = computed(() => getFlattenMenus())

  const getFlattenMenus = () => {
    const flattenMenus: Menu.MenuOptions[] = []
    const loop = (menuList: Menu.MenuOptions[]) => {
      menuList.forEach((item) => {
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

  return { menuList, flattenMenuList }
}, {
  persist: piniaPersistConfig(`${piniaPersistPrefix}-auth`),
})
