<script setup lang="ts" name="403">
const router = useRouter()
</script>

<template>
  <div class="not-container">
    <img src="@/assets/images/403.png" class="not-img" alt="403" />
    <div class="not-detail">
      <h2>403</h2>
      <h4>抱歉，您无权访问该页面~🙅‍♂️🙅‍♀️</h4>
      <ElButton type="primary" @click="router.back">
        返回上一页
      </ElButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
