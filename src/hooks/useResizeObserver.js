import { useRef, useEffect, useState, useMemo } from 'react'
// import ResizeObserver from 'resize-observer-polyfill'
// import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

/**
 * React hook, attach's `ResizeObserver` to given ref. When passed callback, calls it on resize.
 * @param {React.RefObject<HTMLElement>} ref
 * @param {!Function} onResize
 */
export default function useResizeObserver(opts = { ref, onResize }) {
  const defaultRef = useRef(null)
  const onResizeRef = useRef(undefined)
  onResizeRef.current = opts.onResize
  const resizeObserverRef = useRef(null)
  const ref = opts.ref || defaultRef
  const [size, setSize] = useState({ width: 0, height: 0 })
  const previous = useRef({ width: 0, height: 0 })

  useEffect(() => {
    if (resizeObserverRef.current) return

    resizeObserverRef.current = new ResizeObserver(entries => {
      if (!Array.isArray(entries) || !entries.length) return
      const entry = entries[0]
      const newWidth = Math.round(entry.contentRect.width)
      const newHeight = Math.round(entry.contentRect.height)

      if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
        const newSize = { width: newWidth, height: newHeight }

        if (onResizeRef.current) {
          onResizeRef.current(newSize)
        } else {
          previous.current.width = newWidth
          previous.current.height = newHeight
          setSize(newSize)
        }
      }
    })
  }, [])

  useEffect(() => {
    if (typeof ref !== 'object' || ref === null || ref.current === null) {
      return
    }
    const element = ref.current
    resizeObserverRef.current.observe(element)
    return () => resizeObserverRef.current.unobserve(element)
  }, [ref])

  const { width, height } = size

  return useMemo(() => ({ ref, width, height }), [ref, width, height])

  // const [width, setWidth] = useState(0)
  // const [height, setHeight] = useState(0)

  // const handleResize = useCallback(
  //   entries => {
  //     if (!Array.isArray(entries)) return
  //     const [entry] = entries
  //     setWidth(entry.contentRect.width)
  //     setHeight(entry.contentRect.height)
  //     if (onResize) {
  //       onResize(entry.contentRect)
  //     }
  //   },
  //   [onResize]
  // )

  // Changed back to useEffect as we aren't directly modifying the dom -> The change via the resizeObserver won't be
  // applied until the next render cycle
  // useEffect(() => {
  //   if (!ref.current) return
  //   let RO = new ResizeObserver(handleResize)
  //   RO.observe(ref.current)

  //   return () => {
  //     RO.disconnect()
  //     RO = null
  //   }
  // }, [ref, handleResize])
  // return { width, height }
}
