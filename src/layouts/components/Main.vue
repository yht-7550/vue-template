<script setup lang="ts">
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()
const { keepAliveNames } = storeToRefs(authStore)

/**
 * 联想小新Pad Pro 2025
 * 天玑8300
 * 12.7英寸 2.9K 144Hz 16:10
 * 10200mAh  45W
 * 12+256 1800元
 * 4扬声器
 */

/**
 * 荣耀平板V9
 * 天玑8350
 * 11.5英寸 2.8K 144Hz 3:2
 * 10100mAh
 * 12+256 2100元
 * 8扬声器
 */

/**
 * IQOO Pad Air
 * 骁龙870
 * 11.5英寸 2.8K 144Hz 3:2
 * 8500mAh  44W
 * 12+256 1800元
 * 8扬声器
 */
</script>

<template>
  <div>
    <RouterView v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <KeepAlive :include="keepAliveNames">
          <component :is="Component" :key="route.fullPath" />
        </KeepAlive>
      </transition>
    </RouterView>
  </div>
</template>

<style lang="scss" scoped></style>
