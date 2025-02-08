import { encryptPrivateKey } from '@/config'
import JSEncrypt from 'jsencrypt'

const encrypt = new JSEncrypt()

/**
 * 数据加密
 * @param data 要加密的值
 * @param key 加密私钥
 * @returns 加密后的数据
 */
export const encryptData = (data: string, key?: string) => {
  encrypt.setPrivateKey(key || encryptPrivateKey)
  return encrypt.encrypt(data) || ''
}
