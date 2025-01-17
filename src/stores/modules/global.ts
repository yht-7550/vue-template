import type { GlobalState } from '../interface'
import { piniaPersistPrefix } from '@/config'
import { piniaPersistConfig } from '../helper/persist'

export const useGlobalStore = defineStore('global', () => {
  const globalState = ref<GlobalState>({
    /**
     * 系统默认语言
     * @default zhCn
     */
    language: 'zhCn',
  })

  return { globalState }
}, {
  persist: piniaPersistConfig(`${piniaPersistPrefix}-global`),
})
