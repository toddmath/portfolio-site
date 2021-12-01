import { useEffect, useState, useCallback } from 'react'

/** Custom hook for using the IntersectionObserver API, returns an IntersectionObserverEntry object
 * @param {React.MutableRefObject} node Ref object to attach to.
 * @param {object} options
 * @param {*} [options.root=null]
 * @param {string} [options.rootMargin='0px 0px 0px 0px']
 * @param {number|number[]} [options.threshold=0]
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node, options.root, options.rootMargin, options.threshold, handleObserver])

  return entry
}

export default useObserver
