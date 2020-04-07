import { useState, useCallback } from 'react'

import useEventListener from './useEventListener'
import useObserver from './useObserver'

const useIntersectingMouseMove = ref => {
  const [coords, setCoords] = useState([0, 0])
  const intersection = useObserver(ref)
  const { isIntersecting } = intersection || true

  const mouseHandler = useCallback(
    ({ clientX, clientY }) => {
      if (isIntersecting) setCoords([clientX, clientY])
    },
    [isIntersecting, setCoords]
  )

  useEventListener('mousemove', mouseHandler)

  return coords
}

export default useIntersectingMouseMove
