import type { PluginOption } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'
import vueDevTools from 'vite-plugin-vue-devtools'

/**
 * 创建 vite 插件
 */
export const createVitePlugins = (): (PluginOption | PluginOption[])[] => {
  return [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
    Inspect({
      outputDir: '.vite-inspect',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
  ]
}
