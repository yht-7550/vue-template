<script setup lang="ts" name="404">
const router = useRouter()
</script>

<template>
  <div class="not-container">
    <img src="@/assets/images/404.png" class="not-img" alt="404" />
    <div class="not-detail">
      <h2>404</h2>
      <h4>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</h4>
      <ElButton type="primary" @click="router.back">
        返回上一页
      </ElButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
