import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export * from './modules/global'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
