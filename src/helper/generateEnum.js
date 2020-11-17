const IS_PRODUCTION = process.env.REACT_APP_ENV === 'production'

const handlerEnum = {
  get: (obj, prop) => {
    const value = obj[prop]

    if (value === undefined) {
      const message = `The ${prop} doesn't exists`
      if (IS_PRODUCTION) console.error(message)
      else throw new Error(message)
    }

    return value
  },
}

const validateFieldExists = (obj, prop) => {
  if (obj[prop] !== undefined) {
    const message = `The ${prop} already exists on this enums`
    if (IS_PRODUCTION) console.error(message)
    else throw new Error(message)
  }

  return true
}

const generateEnum = enums => {
  const value = {}

  if (Array.isArray(enums)) {
    enums.forEach(e => {
      if (validateFieldExists(value, e)) value[e] = e
    })
  } else {
    Object.entries(enums).forEach(([k, v]) => {
      if (validateFieldExists(value, k)) value[k] = v
    })
  }

  return new Proxy(value, handlerEnum)
}

export default generateEnum
