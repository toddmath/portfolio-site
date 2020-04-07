import { useState, useEffect } from 'react'

/**
 * Custom react hook that wraps value inside setTimeout.
 * @param {*} value Value or function to debounce.
 * @param {number} [delay=100] Amount of time to timeout.
 * @returns {*} Debounced value.
 */
export default function useDebounce(value, delay = 100) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
