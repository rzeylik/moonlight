import { isObject } from 'lodash'
const engine = window.localStorage

const localStorage = {
  setItem: (key, value) => {
    if (isObject(value)) {
      value = JSON.stringify(value)
    }
    engine.setItem(key, value)
    return true
  },

  getItem: (key) => {
    const value = engine.getItem(key)
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  },

  removeItem: (key) => {
    engine.removeItem(key)
    return true
  },
}

export default localStorage
