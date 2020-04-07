import { useCallback } from 'react'
import createPersistedState from './usePersistedState'

const usePersistedDebug = createPersistedState('css-debug')

export default function useCssDebug(initial) {
  const [isDebug, setIsDebug] = usePersistedDebug(initial)

  const toggle = useCallback(() => setIsDebug(state => !state), [setIsDebug])

  return [isDebug, toggle]
}
