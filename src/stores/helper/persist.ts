import type { PersistenceOptions } from 'pinia-plugin-persistedstate'

/**
 * @description pinia 持久化参数配置
 * @param key 持久化存储的名称
 * @param {PersistenceOptions} options 额外的持久化配置参数
 * @returns persist
 */
export const piniaPersistConfig = (key: string, options?: PersistenceOptions) => {
  const persist: PersistenceOptions = {
    key,
    storage: localStorage,
    ...options,
  }
  return persist
}
