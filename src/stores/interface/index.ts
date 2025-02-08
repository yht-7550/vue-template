/** global */
export interface GlobalState {
  language: 'zhCn' | 'en'
}

/** user */
export namespace UserState {
  export interface UserInfo {
    username: string
    password: string
    realname: string
  }
}
