import { useEffect, useState, useCallback } from 'react'

/** Custom hook for using the IntersectionObserver API, returns an IntersectionObserverEntry object
 * Options object takes 3 args: root - element, rootMargin - string, threshold - number or number[].
 */
const useObserver = (
  node,
  options = { root: null, rootMargin: '0px 0px 0px 0px', threshold: 0 }
) => {
  const [entry, setEntry] = useState(null)

  const handleObserver = useCallback(([entry]) => setEntry(entry), [setEntry])

  useEffect(() => {
    if (!node || !node.current) {
      return
    }

    const element = node.current
    let observer = new IntersectionObserver(handleObserver, options)
    observer.observe(element)

    return () => {
      observer.disconnect()
      observer = null
    }
  }, [node, options.root, options.rootMargin, options.threshold])

  return entry
}

export default useObserver
