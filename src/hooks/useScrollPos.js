import { useRef, useEffect, useCallback } from 'react'
// import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

const isBrowser = typeof window !== `undefined`
const PASSIVE = { passive: true }

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  const [x, y] = useWindow ? [window.scrollX, window.scrollY] : [position.left, position.top]

  return { x, y }
}

export function useScrollPos(
  effect,
  deps = [],
  element = false,
  useWindow = false,
  wait = null
) {
  const position = useRef(getScrollPosition({ useWindow }))
  const timeoutRef = useRef(null)
  // let throttleTimeout = null

  const callBack = useCallback(() => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    timeoutRef.current = null
    // throttleTimeout = null
  }, [effect, element, useWindow])

  useEffect(() => {
    if (!isBrowser) {
      return
    }

    const handleScroll = () => {
      if (wait) {
        // if (throttleTimeout === null) {
        if (!timeoutRef.current) {
          // throttleTimeout = setTimeout(callBack, wait)
          timeoutRef.current = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll, PASSIVE)

    return () => window.removeEventListener('scroll', handleScroll, PASSIVE)
  }, [callBack, wait, ...deps])
}

export default useScrollPos

// useScrollPosition.defaultProps = {
//   deps: [],
//   element: false,
//   useWindow: false,
//   wait: null,
// }
