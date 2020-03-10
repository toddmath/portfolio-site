import { useState, useEffect } from 'react'

export default function useReducedMotion() {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  const [matches, setMatches] = useState(mq.matches)

  useEffect(() => {
    const handleChange = () => setMatches(mq.matches)
    handleChange()
    mq.addEventListener('change', handleChange)
    console.count(`Added useReducedMotion eventListener onto ${mq}`)

    return () => {
      mq.removeEventListener('change', handleChange)
      console.count(`Removed useReducedMotion eventListener from ${mq}`)
    }
  }, [])

  return matches
}
