import presetIcons from '@unocss/preset-icons'
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
  ],
  rules: [
    // // 暂时未知原因 Android 7 bg-[] text- 颜色样式未生效
    // [/^s-(\d+)$/, ([, d]) => ({ width: `${d}rpx`, height: `${d}rpx` })],
    // [/^text-\[#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\]$/, ([, d]) => ({ color: `#${d}` })],
    // [/^text-(white|black)$/, ([, d]) => ({ color: d })],
    // [/^bg-\[#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\]$/, ([, d]) => ({ 'background-color': `#${d}` })],
    // [/^bg-(white|black)$/, ([, d]) => ({ 'background-color': d })],
  ],
  shortcuts: [
    { 'flex-center': 'flex justify-center items-center' },
  ],
  theme: {
    fontFamily: {
      youshe: ['YouSheBiaoTiHei'],
    },
    breakpoints: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  transformers: [],
})
