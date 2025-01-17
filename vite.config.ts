import type { ConfigEnv, UserConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import dayjs from 'dayjs'
import { loadEnv } from 'vite'
import { wrapperEnv } from './build/getEnv'
import { createVitePlugins } from './build/plugins'
import pkg from './package.json'

// https://vite.dev/config/
const viteConfig = ({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)

  console.log('Vite is running in', env.VITE_USER_NODE_ENV)

  const { name, version } = pkg
  const __APP_INFO__ = {
    pkg: { name, version },
    lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  }

  return {
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
    },
    build: {
      outDir: 'dist',
      minify: 'esbuild',
      sourcemap: false,
      // 禁用 gzip 压缩大小报告，可略微减少打包时间
      reportCompressedSize: false,
      // 规定触发警告的 chunk 大小
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          // Static resource classification and packaging
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  }
}

export default viteConfig
