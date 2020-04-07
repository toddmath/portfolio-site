import { useState, useCallback } from 'react'

import useEventListener from './useEventListener'

const useMouseMove = () => {
  const [coords, setCoords] = useState([0, 0])

  const mouseHandler = useCallback(({ clientX, clientY }) => setCoords([clientX, clientY]), [
    setCoords,
  ])

  // useEventListener('mousemove', ({ clientX, clientY }) => {
  //   setCoords([clientX, clientY])
  // })

  useEventListener('mousemove', mouseHandler)

  return coords
}

export default useMouseMove
