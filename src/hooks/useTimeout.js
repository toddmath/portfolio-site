import { useEffect } from 'react'

import useSavedRef from './useSavedRef'

/**
 * React custom hook. Implements setTimeout on mount & clearTimeout it on unmount
 * @author Todd Matheson / https://github.com/toddmath
 * @param {Function} callback - callback function
 * @param {number} [delay=200] - length of time supplied to setTimeout
 */
export default function useTimeout(callback, delay = 200) {
  const savedCallback = useSavedRef(callback)

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    const id = setTimeout(tick, delay)

    return () => clearTimeout(id)
  }, [savedCallback, delay])
}
