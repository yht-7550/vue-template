import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

import router from './routers'
import './assets/css/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
