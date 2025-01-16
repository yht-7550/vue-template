<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <div>
    <div>首页</div>
    <div>{{ count }}</div>
    <div @click="count++">增加</div>
  </div>
</template>

<style lang="scss" scoped></style>
