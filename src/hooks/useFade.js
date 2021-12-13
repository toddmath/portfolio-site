import { useTransition } from 'react-transition-state'

export default function useFade() {
  const [state, toggle] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
  })
  return [state, toggle]
}
