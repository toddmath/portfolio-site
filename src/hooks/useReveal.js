import { useEffect } from 'react'

// import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'
import sr from '@utils/sr'
import { srConfig } from '@config'

export default function useReveal(ref) {
  useEffect(() => {
    // if (sr) {
    if (typeof window === 'undefined') return
    sr.reveal(ref.current, srConfig())
    // sr.sync()
    // }
    return () => sr.clean(ref.current, srConfig())
  }, [])

  // useIsomorphicLayoutEffect(() => {
  //   if (sr) sr.sync()
  // }, [ref, sr])
}
