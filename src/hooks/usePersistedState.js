import { useState, useEffect, useRef } from 'react'

import useEventListener from './useEventListener'

const isFunction = v => v instanceof Function || typeof v === 'function'

export const createStorage = provider => ({
  /** get value from storage provider */
  get(key, defaultValue) {
    const json = provider.getItem(key)
    return json === null
      ? isFunction(defaultValue)
        ? defaultValue()
        : defaultValue
      : JSON.parse(json)
  },

  /** set value in storage provider */
  set(key, value) {
    provider.setItem(key, JSON.stringify(value))
  },
})

const globalState = {}

export function createGlobalState(key, thisCallback, initialValue) {
  if (!globalState[key]) {
    globalState[key] = { callbacks: [], value: initialValue }
  }

  globalState[key].callbacks.push(thisCallback)

  return {
    deregister() {
      const arr = globalState[key].callbacks
      const index = arr.indexOf(thisCallback)
      if (index > -1) {
        arr.splice(index, 1)
      }
    },

    emit(value) {
      // const isNotThisCallback = cb => thisCallback !== cb

      if (globalState[key].value !== value) {
        globalState[key].value = value

        if (globalState[key].callbacks.length > 0) {
          globalState[key].callbacks
            .filter(callback => callback !== thisCallback)
            .forEach(callBack => callBack(value))
        }

        // globalState[key].callbacks.forEach(cb => {
        //   if (thisCallback !== cb) {
        //     cb(value)
        //   }
        // })
      }
    },
  }
}

export function usePersistedState(initialState, key, { get, set }) {
  const globalState = useRef(null)
  const [state, setState] = useState(() => get(key, initialState))

  const handleStorage = ({ key: k, newValue }) => {
    if (k === key) {
      const newState = JSON.parse(newValue)
      if (state !== newState) {
        setState(newState)
      }
    }
  }

  useEventListener('storage', handleStorage)

  useEffect(() => {
    globalState.current = createGlobalState(key, setState, initialState)
    return () => {
      globalState.current.deregister()
    }
  }, [])

  // const handleStateChange = useCallback(() => {
  //   set(key, state)
  //   globalState.current.emit(state)
  // }, [state])

  useEffect(() => {
    set(key, state)
    globalState.current.emit(state)
  }, [state])

  // useEffect(() => {
  //   set(key, state)
  //   globalState.current.emit(state)
  // }, [state])

  return [state, setState]
}

export function createPersistedState(key, provider = global.localStorage) {
  if (provider) {
    const storage = createStorage(provider)
    return initialState => usePersistedState(initialState, key, storage)
  }

  return useState
}

export default createPersistedState
