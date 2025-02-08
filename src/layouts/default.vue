<script setup lang="ts">
import Header from './components/Header.vue'
import Main from './components/Main.vue'
</script>

<template>
  <div class="w-screen h-screen">
    <el-container class="contain-layout">
      <el-header class="bg-gray-200">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px" class="bg-gray-400">
          Aside
        </el-aside>
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.contain-layout {
  width: 100%;
  height: 100%;
}
</style>
