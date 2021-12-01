import { useState, useEffect, useRef, useCallback } from 'react'

import useEventListener from './useEventListener'

const isFunction = v => v instanceof Function || typeof v === 'function'

/**
 * Creates global state inside `global.localStorage`
 * @param {localStorage} provider
 */
export const createStorage = provider => ({
  /** get value from storage provider
   * @param {string} key
   * @param {Function|string} defaultValue
   */
  get(key, defaultValue) {
    const json = provider.getItem(key)
    const defaultV = isFunction(defaultValue) ? defaultValue() : defaultValue
    return json === null ? defaultV : JSON.parse(json)
  },

  /** set value in storage provider
   * @param {string} key
   * @param {{}|string|number} value
   */
  set(key, value) {
    provider.setItem(key, JSON.stringify(value))
  },
})

const isNot = toCheck => arg => toCheck !== arg
const globalState = {}

export function createGlobalState(key, thisCallback, initialValue) {
  if (!globalState[key]) {
    globalState[key] = { callbacks: [], value: initialValue }
  }
  globalState[key].callbacks.push(thisCallback)

  const isntThisCb = isNot(thisCallback)
  const isntEmpty = ar => ar.length > 0

  return {
    deregister() {
      const arr = globalState[key].callbacks
      const index = arr.indexOf(thisCallback)
      if (index > -1) arr.splice(index, 1)
    },

    emit(value) {
      if (globalState[key].value !== value) {
        globalState[key].value = value
        const { callbacks } = globalState[key]
        if (isntEmpty(callbacks)) {
          callbacks.filter(isntThisCb).forEach(cb => cb(value))
        }
      }
    },
  }
}

export function usePersistedState(initialState, key, { get, set }) {
  const globalState = useRef(null)
  const [state, setState] = useState(() => get(key, initialState))

  const handleStorage = useCallback(
    ({ key: k, newValue }) => {
      if (k === key) {
        const newState = JSON.parse(newValue)
        if (state !== newState) setState(newState)
      }
    },
    [key, state]
  )

  useEventListener('storage', handleStorage)

  useEffect(() => {
    globalState.current = createGlobalState(key, setState, initialState)
    return () => {
      globalState.current.deregister()
    }
  }, [initialState, key])

  useEffect(() => {
    set(key, state)
    globalState.current.emit(state)
  }, [state, key, set])

  return [state, setState]
}

export const createPersistedState = (key, provider = global.localStorage) =>
  provider
    ? initState => usePersistedState(initState, key, createStorage(provider))
    : useState

export default createPersistedState
