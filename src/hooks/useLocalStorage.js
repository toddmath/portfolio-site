import { useState, useCallback } from 'react'

export default function useLocalStorage(key, initialValue) {
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // let item = initialValue
      // if (typeof window !== 'undefined') {
      //   item = JSON.parse(window.localStorage.getItem(key))
      // }
      // return item

      if (typeof window !== 'undefined') {
        return JSON.parse(window.localStorage.getItem(key)) || initialValue
      }

      return initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  const isFunction = v => v instanceof Function || typeof v === 'function'

  /** Return a wrapped version of useState's setter function that persists the new value to localStorage. */
  // const setValue = value => {
  //   try {
  //     // Allow value to be a function so we have same API as useState
  //     const valueToStore = isFunction(value) ? value(storedValue) : value
  //     setStoredValue(valueToStore)
  //     if (typeof window !== 'undefined') {
  //       window.localStorage.setItem(key, JSON.stringify(valueToStore))
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  /** Return a wrapped version of useState's setter function that persists the new value to localStorage. */
  const setValue = useCallback(
    value => {
      // Allow value to be a function so we have same API as useState
      const valueToStore = isFunction(value) ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    },
    [key, storedValue]
  )

  return [storedValue, setValue]
}
