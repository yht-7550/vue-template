import type { AxiosError, AxiosInstance, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios'
import type { ResData, ResStatusData } from './interface'
import { ResultEnum } from '@/enums/httpEnum'
import router from '@/routers'
import { useUserStore } from '@/stores'
import axios from 'axios'
import { checkStatus } from './helper/checkStatus'

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

const createAxiosInstance = () => {
  const userStore = useUserStore()
  const { token } = storeToRefs(userStore)
  const axiosInstance: AxiosInstance = axios.create({
    ...config,
  })
  axiosInstance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
      config.loading ?? (config.loading = false)
      if (config.headers && typeof config.headers.set === 'function') {
        config.headers.set('token', token.value)
      }
      return config
    },
    (err: AxiosError) => {
      return Promise.reject(err)
    },
  )
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      const { data } = response
      const _data: ResStatusData = data

      if (_data.code === ResultEnum.OVERDUE) {
        userStore.logout()
        ElMessage.error(_data.message)
        return Promise.reject(_data)
      }

      if (_data.code && _data.code !== ResultEnum.SUCCESS) {
        ElMessage.error(_data.message)
        return Promise.reject(_data)
      }

      return data
    },
    (err: AxiosError) => {
      const { response } = err
      // 请求超时 && 网络错误单独判断，没有 response
      if (err.message.includes('timeout'))
        ElMessage.error('请求超时！请稍后重试')
      if (err.message.includes('Network Error'))
        ElMessage.error('网络错误！请稍后重试')
      // 根据服务器响应的错误状态码，做不同的处理
      if (response)
        checkStatus(response.status)
      // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
      if (!window.navigator.onLine)
        router.replace('/500')
      return Promise.reject(err)
    },
  )
  return axiosInstance
}

const createHttp = {
  get<T>(url: string, params?: any, option?: CustomAxiosRequestConfig): Promise<ResStatusData & T> {
    return createAxiosInstance().get(url, { params, ...option })
  },
  post<T>(url: string, params?: any, option?: CustomAxiosRequestConfig): Promise<ResStatusData & T> {
    return createAxiosInstance().post(url, params, option)
  },
  put<T>(url: string, params?: any, option?: CustomAxiosRequestConfig): Promise<ResStatusData & T> {
    return createAxiosInstance().put(url, params, option)
  },
  delete<T>(url: string, params?: any, option?: CustomAxiosRequestConfig): Promise<ResStatusData & T> {
    return createAxiosInstance().delete(url, { params, ...option })
  },
  download(url: string, params?: any, option?: CustomAxiosRequestConfig): Promise<BlobPart> {
    return createAxiosInstance().post(url, params, { ...option, responseType: 'blob' })
  },
}

export default createHttp
