// import { useRef, useEffect } from 'react'

// // const getScrollPosition = () => ({ x: window.scrollX, y: window.scrollY })

// const PASSIVE = { passive: true }

// /**
//  * Custom React hook that listens to scroll events and reports they're positions.
//  * @param {Function} effect Side effect to run.
//  * @param {*} deps Dependencies passed to effect that control when it re-runs.
//  * @param {number} [wait=0] Amount of time to pass to `setTimeout`, if `0` bypasses it.
//  */
// export default function useScrollPosition(effect, deps = [], wait = 100) {
//   const getScrollPosition = () => ({ x: window.scrollX, y: window.scrollY })
//   const position = useRef(getScrollPosition())
//   let throttleTimeout = null

//   useEffect(() => {
//     const callBack = () => {
//       const currPos = getScrollPosition()
//       effect({ prevPos: position.current, currPos })
//       position.current = currPos
//       throttleTimeout = null
//     }

//     const notThrottled = () => !throttleTimeout

//     const handleScroll = () => {
//       if (wait > 0) {
//         if (notThrottled()) {
//           throttleTimeout = setTimeout(callBack, wait)
//         }
//         // throttleTimeout = notThrottled() ? setTimeout(callback, wait) : null
//       } else callBack()
//     }
//     window.addEventListener('scroll', handleScroll, PASSIVE)

//     return () => {
//       window.removeEventListener('scroll', handleScroll, PASSIVE)
//     }
//   }, deps)
// }
