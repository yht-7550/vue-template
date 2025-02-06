import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './routers'

import 'element-plus/dist/index.css'
import './assets/css/tailwindcss.scss'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(router).use(pinia).mount('#app')
