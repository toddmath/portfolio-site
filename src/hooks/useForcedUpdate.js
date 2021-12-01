import { useCallback, useState } from 'react'

export default function useForceUpdate() {
  const [, f] = useState(false)
  const forceUpdate = useCallback(() => f(v => !v), [])

  return forceUpdate
}
