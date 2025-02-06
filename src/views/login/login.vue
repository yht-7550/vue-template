<script setup lang="ts">
import router from '@/routers'
import { useUserStore } from '@/stores'

const useStore = useUserStore()
const { token } = storeToRefs(useStore)
const login = () => {
  token.value = 'yht-7550'
  // useStore.token = 'yht-7550'
  useStore.login()
  router.push('/home/index')
  // useStore.login()
}
</script>

<template>
  <div>
    <div>登录页</div>
    <el-button type="primary" @click="login">
      登录
    </el-button>
  </div>
</template>

<style lang="scss" scoped></style>
