import { fileURLToPath, URL } from 'node:url'
import { loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
const viteConfig = ({ mode }: ConfigEnv) => {
  const { VITE_SERVICE_ENV } = loadEnv(mode, process.cwd())

  console.log('Vite is running in', VITE_SERVICE_ENV);
  
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: true
      }),
      Components()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
}

export default viteConfig
