// @ts-check
import { useEffect } from 'react'

// import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'
import sr from '@utils/sr'
import { srConfig } from '@config'

/**
 * Custom react hook that takes an array of ref's and passes it to scrollreveal.
 * @param {React.MutableRefObject} refs React ref instantiated with array.
 * @param {{ delay?: number, distance?: string, opacity?: number, duration?: number }}
 */
export default function useReveals(
  refs,
  { delay = 200, distance = '20px', opacity = 0.22, duration = 500 } = {}
) {
  useEffect(() => {
    // if (sr) {
    if (typeof window === 'undefined') return
    sr.reveal(refs.current, srConfig(delay, distance, opacity, duration))
    // sr.sync()
    // }
    // return () => sr.clean(refs.current, srConfig(delay, distance, opacity))
  }, [])

  // useIsomorphicLayoutEffect(() => {
  //   sr.sync()
  // }, [refs, sr])
}
