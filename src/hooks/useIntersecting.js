import { useEffect, useState, useCallback } from 'react'

const useIntersecting = (
  node,
  options = { root: null, rootMargin: '0px 0px 0px 0px', threshold: 0 }
) => {
  const [entry, setEntry] = useState(null)
  const handleObserver = useCallback(([entry]) => setEntry(entry), [setEntry])

  useEffect(() => {
    if (!node || !node.current) return

    const element = node.current
    let observer = new IntersectionObserver(handleObserver, options)
    observer.observe(element)

    return () => {
      observer.disconnect()
      observer = null
    }
  }, [node, options.root, options.rootMargin, options.threshold])

  const { target, isIntersecting, intersectionRatio } = entry

  return { target, isIntersecting, intersectionRatio }
}

export default useIntersecting
