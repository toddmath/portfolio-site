// import { useEffect } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

import sr from '@utils/sr'
import { srConfig } from '@config'

export default function useProjectsReveal(revealTitle, revealArchiveLink, revealProjects) {
  useIsomorphicLayoutEffect(() => {
    // if (sr) {
    sr.reveal(revealTitle.current, srConfig())
    sr.reveal(revealArchiveLink.current, srConfig())
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)))
    sr.sync()
    // }

    return () => {
      sr.clean(revealTitle.current, srConfig())
      sr.clean(revealArchiveLink.current, srConfig())
      revealProjects.current.forEach(ref => sr.clean(ref))
    }
  }, [])
}
