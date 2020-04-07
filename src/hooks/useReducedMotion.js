import { useEffect, useState } from 'react'

// import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

export default function useReducedMotion() {
  const element = typeof window === 'undefined' ? null : window
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = element.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setMatches(mq.matches)
    handleChange()
    if (window && typeof window !== 'undefined') {
      mq.addEventListener('change', handleChange)
    }
    console.count(`Added useReducedMotion eventListener onto ${mq}`)

    return () => {
      mq.removeEventListener('change', handleChange)
      console.count(`Removed useReducedMotion eventListener from ${mq}`)
    }
  }, [])

  return matches
}
