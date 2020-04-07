import { useState, useCallback, useEffect } from 'react'

import { useEventListener } from '@hooks'
import { throttle } from '@utils'

/**
 * React custom hook. Subscribes to 'mousemove' on window.
 * @author Todd Matheson / https://github.com/toddmath
 */
export function useMousePosition() {
  const initialMousePos = { x: 0, y: 0 }
  const [mousePos, setMousePos] = useState(initialMousePos)

  /**
   * clientX / clientY are relative to top left of current window.
   * pageX / pageY are relative to top left of entire document.
   */
  const handler = useCallback(
    ({ clientX, clientY }) => {
      setMousePos({ x: clientX, y: clientY })
    },
    [setMousePos]
  )

  // useEffect(() => {
  //   let scheduled

  //   const onMouseMove = evt => {
  //     if (!scheduled) {
  //       setTimeout(() => {
  //         handler(scheduled)
  //         scheduled = null
  //       }, 20)
  //       scheduled = evt
  //     }
  //   }

  //   window.addEventListener('mousemove', onMouseMove)

  //   return () => window.removeEventListener('mousemove', onMouseMove)
  // }, [handler])

  const eventListener = throttle(handler, 30)

  useEventListener('mousemove', eventListener)

  return mousePos
}

export function useMouseMovement(elem) {
  const [lastX, setLastX] = useState()
  const ref = useRef(elem)

  useEffect(() => (ref.current = ref))

  useEffect(() => {
    const moved = ({ buttons, clientX }) => {
      if (buttons === 0) {
        window.removeEventListener('mousemove', moved)
      } else {
        // const dist = evt.clientX - lastX
        const newWidth = Math.max(10, ref.current.offsetWidth + (clientX - lastX))
        ref.current.style.width = `${newWidth}px`
        setLastX(clientX)
      }
    }

    ref.current.addEventListener('mousedown', evt => {
      if (evt.button === 0) {
        setLastX(evt.clientX)
        window.addEventListener('mousemove', moved)
        evt.preventDefault()
      }
    })
  }, [])
}

export default useMousePosition
