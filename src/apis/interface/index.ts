/** 响应请求返回参数 */
export interface ResStatusData {
  code: string
  message: string
}

/** 普通(详情类)返回参数 */
export interface ResData<T> extends ResStatusData {
  data: T
}

/** 列表类返回参数 */
export interface ResListData<T> extends ResStatusData {
  body: T[]
  count: number
}

/** 登录 */
export namespace Login {
  export interface ReqLoginParams {
    username: string
    password: string
  }
  export interface ResLoginData {
    token: string
    realanme: string
  }
}
