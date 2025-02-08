import type { Login, ResData, ResListData } from '../interface'
import createHttp from '..'

export const getUserInfo = () => {
  return createHttp.get('/getUserInfo', { })
}

export const userLogin = (data: Login.ReqLoginParams) => {
  return createHttp.post<ResData<Login.ResLoginData>>('/user/login', data)
}
