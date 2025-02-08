<script setup lang="ts">
interface LoadingProps {
  /** 是否加载中 */
  loading: boolean
  /** 加载图标下的文本 */
  loadingText?: string | undefined
  /** 自定义加载图标 */
  loadingSpinner?: string | undefined
  /** 自定义svg加载图标 */
  loadingSvg?: string | undefined
  /** svg加载图标的viewBox */
  loadingSvgViewBox?: string | undefined
  /** 遮罩背景颜色 */
  loadingBackground?: string | undefined
  /** 加载层自定义类名 */
  loadingCustomClass?: string | undefined
}

withDefaults(defineProps<LoadingProps>(), {
  loading: false,
  loadingText: '加载中...',
  loadingSpinner: '<path fill="currentColor" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13t.713-3.512t1.924-2.85t2.85-1.925T12 4h.15l-.85-.85q-.275-.275-.275-.687t.275-.713q.3-.3.713-.312t.712.287L15.3 4.3q.275.275.275.7t-.275.7l-2.575 2.575q-.3.3-.712.288T11.3 8.25q-.275-.3-.275-.712t.275-.688l.85-.85H12Q9.075 6 7.038 8.038T5 13t2.038 4.963T12 20q2.65 0 4.625-1.725t2.325-4.35q.05-.4.35-.663T20 13t.7.25t.25.625q-.35 3.475-2.9 5.8T12 22"/>',
  loadingSvg: '',
  loadingSvgViewBox: '0 0 24 24',
  loadingBackground: '',
  loadingCustomClass: '',
})
</script>

<template>
  <div
    v-loading="loading"
    class="w-full h-full"
    :element-loading-text="loadingText"
    :element-loading-spinner="loadingSpinner"
    :element-loading-svg="loadingSvg"
    :element-loading-svg-view-box="loadingSvgViewBox"
    :element-loading-background="loadingBackground"
    :element-loading-custom-class="loadingCustomClass"
  >
  </div>
</template>

<style lang="scss" scoped></style>
