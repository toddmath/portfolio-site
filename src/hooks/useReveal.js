import { useEffect } from 'react'

import sr from '@utils/sr'
import { srConfig } from '@config'

export default function useReveal(ref) {
  useEffect(() => {
    sr.reveal(ref.current, srConfig())
    sr.sync()

    return () => sr.clean(ref.current, srConfig())
  }, [])

  useEffect(() => {
    sr.sync()
  }, [ref, sr])
}
