<script setup lang="ts"></script>

<template>
  <div class="w-full h-full flex items-center justify-between">
    <div class="flex-1"></div>
    <div class="">
      <ElDropdown>
        <div class="w-12 h-12 rounded-full bg-gray-200">
          <span class="icon-[material-symbols--cake-rounded] w-8 h-8 text-[#409EFF]"></span>
        </div>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>退出登录</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
