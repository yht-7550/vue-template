<script setup lang="ts">
import { useGlobalStore } from '@/stores'
import en from 'element-plus/dist/locale/en.mjs'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const { globalState } = storeToRefs(useGlobalStore())
const local = computed(() => (globalState.value.language === 'zhCn' ? zhCn : en))
</script>

<template>
  <ElConfigProvider :locale="local">
    <RouterView />
  </ElConfigProvider>
</template>

<style lang="scss" scoped>
@use './assets/css/main.scss';
</style>
