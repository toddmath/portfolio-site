import { useState, useMemo, useCallback } from 'react'

export function useBoolean(initialState = false) {
  const [state, setState] = useState(initialState)

  const setToggle = useCallback(() => setState(st => !st), [])
  const setFalse = useCallback(() => setState(false), [])
  const setTrue = useCallback(() => setState(true), [])

  return useMemo(
    () => ({
      isToggled: state,
      setToggle,
      setFalse,
      setTrue,
    }),
    [state, setToggle, setFalse, setTrue]
  )
}
