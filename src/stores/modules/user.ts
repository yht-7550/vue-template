import type { UserState } from '../interface'
import { HOME_URL, LOGIN_URL, piniaPersistPrefix } from '@/config'
import router from '@/routers'
import { piniaPersistConfig } from '../helper/persist'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>()
  const userInfo = ref<UserState.UserInfo | null>()

  /** 设置 token */
  const setToken = (value: string) => {
    token.value = value
    router.push(value ? HOME_URL : LOGIN_URL)
  }

  /** 退出登录 */
  const logout = () => {
    userInfo.value = null
    setToken('')
  }

  return { token, userInfo, logout, setToken }
}, {
  persist: piniaPersistConfig(`${piniaPersistPrefix}-user`),
})
