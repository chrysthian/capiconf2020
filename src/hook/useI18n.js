import ptBR from 'i18n/pt-BR'
import get from 'lodash/get'

const i18n = (...args) => {
  const { key, params } = (() => {
    if (Array.isArray(args[0])) {
      return {
        key: args[0][0],
        params: args[0][1],
      }
    }
    return {
      key: args[0],
      params: args[1],
    }
  })()

  const value = get(ptBR, key)

  if (value === undefined) {
    throw new Error(`This key ${key} doesn't exist on i18n`)
  }

  if (typeof value === 'function') {
    return value(params || {}, i18n)
  }

  return value
}

export const useI18n = () => i18n
