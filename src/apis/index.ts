import type { AxiosInstance, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios'
import { ResultEnum } from '@/enums/httpEnum'
import axios from 'axios'

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  loading?: boolean
}

const config: CreateAxiosDefaults = {
  // 默认请求地址，在.env.** 文件中修改
  baseURL: import.meta.env.VITE_API_URL as string,
  // 请求超时时间
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时是否携带凭证
  withCredentials: true,
}

const createHttp = () => {
  const axiossInstance: AxiosInstance = axios.create({
    ...config,
  })
  axiossInstance.interceptors.request.use((config: CustomAxiosRequestConfig) => {
    config.loading ?? (config.loading = false)
    // config.loading && console.log('loading')
    return config
  })
  return axiossInstance
}

export default createHttp
