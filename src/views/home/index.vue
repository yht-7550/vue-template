<script setup lang="ts">
import { useUserStore } from '@/stores'
import { ElForm } from 'element-plus'
import JSEncrypt from 'jsencrypt'

const form = ref({
  username: '',
  _username: '',
  passwod: '',
  _passwod: '',
})

const handleEncrypt = () => {
  const encrypt = new JSEncrypt()
  encrypt.setPrivateKey('MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJgoNietyz9fNI1Yz2UK1U2H/neyNsMTLW5T/rISzuO5fRjUApThVuG71zr4IOQWnBR/hHpSmhwfGGf8KJSHEiQttn+Li4TqNJ86K+sPSb4YsWvC5ijwc8UmFeyUJlfJ4MXRbmsGnWDyGReq3k4JXov1CsduNQ7BMCFZbB7dOhslAgMBAAECgYBSpAx90pQAkGoPlzvVimO9324jfsTlgOX89VvxRevenaFHOedJC3bP1eEZYykiGPGe5H+EnJadTXpJCBjWSuJbr1xrUez3zrvl9RGoWDJAmS7avK+/pMX7SjYrGpRkkTZNKgHeMjNvOfqceVdRaLvbdn6Iog9e0NT592DPGIF9RQJBAPDbRFI1Fw9e9bD5iYOiCoR+zQeKAZNpyMFjZNbWHdvIH6vmal91+gEPbMKSAHLTL/VcoeTpAID7nE2c2ENQMv8CQQChuUXdnZ4fZB3pBqwR/2yN91gPJpXQkweIS2p78t9vigr71OmdzLyGDOhvfOxFv05RJsjgkn7GlRajjG4C4IXbAkAZHLNt4s0ptBvnvMzCpbV1BQd5fsEVTpU43JUZ9S8dyCrNMHPsyg8r5yDO1IwpbK12ZpcWl9iOmi08xlqiAg2fAkEAmh0JhDAwv+9TRX4TOa9zzjHYG9AEUlfahLqBhg6jeBJPdz6lRbgWK5RfZ+be7XRp+JGCOefAohLvGPm42EsHowJAGdthOXLT/hsjCHt2X4bjFuR53xkrJFwHXcm7UAL0e23pfHrHbVZdiA3s0QWE/TfOz3fYM4PEeVo0Jl+o2LUANA==')
  form.value._username = encrypt.encrypt(form.value.username) || ''
  form.value._passwod = encrypt.encrypt(form.value.passwod) || ''
  const userStore = useUserStore()
  userStore.setToken('yht-7550')
}
</script>

<template>
  <div class="flex-center w-full h-full">
    <div class="w-96">
      <el-form label-position="left">
        <el-form-item label="账号">
          <el-input v-model="form.username" placeholder="请输入账号" />
          <div v-if="form._username" class="w-full break-all">
            {{ form._username }}
          </div>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.passwod" placeholder="请输入密码" />
          <div v-if="form._passwod" class="w-full break-all">
            {{ form._passwod }}
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleEncrypt">
            加密
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
