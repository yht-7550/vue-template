import JSEncrypt from 'jsencrypt'
import { encryptPrivateKey } from '@/config'

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

/**
 * 数字格式化
 * @param number 要进行格式化的数字
 * @returns 格式化后的数字
 * @example 123456  =>  123,456
 */
export const formatNumber = (number: string) => {
  if (
    typeof number !== 'number' && (typeof number !== 'string' || !/^-?\d+(?:\.\d+)?$/.test(number))
    // typeof number !== 'number' && (typeof number !== 'string' || !/^-?\d+(\.\d+)?$/.test(number))
  ) {
    return ''
  }
  // 转换为字符串
  number = String(number)

  let [integer, decimall] = number.split('.')

  integer = integer.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
  return integer + (decimall ? `.${decimall}` : '')
}
