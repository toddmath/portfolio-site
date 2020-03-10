import { useRef, useEffect } from 'react'

/**
 * Custom hook to save a callback between renders using a React ref object.
 * @author Todd Matheson / https://github.com/toddmath
 * @param {*} callback Any value to save across renders, and update on re-render.
 * @returns {React.MutableRefObject} Saved Ref object.
 */
export default function useSavedRef(callback) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  return savedCallback
}
