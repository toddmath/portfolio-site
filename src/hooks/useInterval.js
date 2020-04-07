import { useEffect, useRef } from 'react'

/**
 * Custom hook around `setInterval`.
 * @param {Function} callback Callback effect to run inside `setInterval`.
 * @param {number} delay Time to delay callback.
 * @see {@link https://overreacted.io/making-setinterval-declarative-with-react-hooks}
 */
export default function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
