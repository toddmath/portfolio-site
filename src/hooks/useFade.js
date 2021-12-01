import { useBoolean } from './useBoolean'
import useTimeout from './useTimeout'

export function useFade(wait = 1000) {
  const { isToggled, setTrue } = useBoolean(false)
  useTimeout(setTrue, +wait)
  return isToggled
}
