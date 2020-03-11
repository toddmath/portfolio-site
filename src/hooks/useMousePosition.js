import { useState, useCallback } from 'react'

import { useEventListener } from '@hooks'

/**
 * React custom hook. Subscribes to 'mousemove' on window.
 * @author Todd Matheson / https://github.com/toddmath
 */
export function useMousePosition() {
  const initialMousePos = { x: 0, y: 0 }
  const [mousePos, setMousePos] = useState(initialMousePos)

  const handler = useCallback(
    ({ clientX, clientY }) => {
      setMousePos({ x: clientX, y: clientY })
    },
    [setMousePos]
  )

  useEventListener('mousemove', handler)

  return mousePos
}

export default useMousePosition
