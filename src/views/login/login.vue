<script setup lang="ts">
import type { FormRules } from 'element-plus'
import { userLogin } from '@/apis/modules/user'
import { useUserStore } from '@/stores'
import { Lock, User } from '@element-plus/icons-vue'

interface RuleForm {
  username: string
  password: string
}
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const formRef = useTemplateRef('formRef')
const loginData = ref({
  username: '',
  password: '',
})

const loginRules = ref<FormRules<RuleForm>>({
  username: {
    required: true,
    message: '用户名不能为空',
  },
  password: {
    required: true,
    message: '密码不能为空',
  },
})

const login = () => {
  formRef.value.validate(async (valid) => {
    if (!valid)
      return
    const res = await userLogin(loginData.value)
    if (res.code === '000000') {
      userInfo.value = {
        ...loginData.value,
        realname: res.data.realanme,
      }
      userStore.setToken(res.data.token)
    }
  })
}
</script>

<template>
  <div class="w-full h-full flex-center">
    <ElCard shadow="always" class="w-96">
      <div class="w-12 h-12 rounded-full flex-center mb-4 bg-gray-200 mx-auto">
        <span class="icon-[material-symbols--filter-drama] w-8 h-8 text-[#409EFF]"></span>
      </div>
      <ElForm ref="formRef" :model="loginData" :rules="loginRules" hide-required-asterisk>
        <ElFormItem label="账号" prop="username">
          <ElInput v-model="loginData.username" :prefix-icon="User" clearable placeholder="请输入账号" />
        </ElFormItem>
        <ElFormItem label="密码" prop="password">
          <ElInput
            v-model="loginData.password"
            :prefix-icon="Lock"
            clearable
            type="password"
            show-password
            placeholder="请输入密码"
          />
        </ElFormItem>
      </ElForm>
      <ElButton class="w-full" type="primary" round @click="login">
        登录
      </ElButton>
    </ElCard>
  </div>
</template>

<style lang="scss" scoped></style>
