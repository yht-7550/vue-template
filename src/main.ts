import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './routers'

import './assets/css/main.scss'
import './assets/css/tailwind.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(router).use(pinia).mount('#app')
