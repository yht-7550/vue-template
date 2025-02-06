import { HOME_URL, piniaPersistPrefix } from '@/config'
import router from '@/routers'
import { piniaPersistConfig } from '../helper/persist'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>()
  let _token = ''

  /** 设置 token */
  const setToken = (value: string) => {
    token.value = value
    _token = value
    router.push(HOME_URL)
  }

  /** 登录 */
  const login = () => {
    setToken('yht')
  }

  return { token, _token, setToken, login }
}, {
  persist: piniaPersistConfig(`${piniaPersistPrefix}-user`, {
    pick: ['token', '_token'],
    beforeHydrate(context) {
      console.log('beforeHydrate => ', context)
      return context
    },
    afterHydrate(context) {
      console.log('afterHydrate => ', context)
      return context
    },
  }),
})
