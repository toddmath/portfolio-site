import { useEffect, useRef } from 'react'

const getScrollPosition = () => ({ x: window.scrollX, y: window.scrollY })

/**
 * Custom React hook that listens to scroll events and reports they're positions.
 * @param {Function} effect Side effect to run.
 * @param {*} deps Dependencies passed to effect that control when it re-runs.
 * @param {number} [wait=0] Amount of time to pass to `setTimeout`, if `0` bypasses it.
 */
export default function useScrollPosition(effect, deps = [], wait = 100) {
  const position = useRef(getScrollPosition())
  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition()
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useEffect(() => {
    const handleScroll = () => {
      if (wait > 0) {
        if (!throttleTimeout) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, deps)
}
