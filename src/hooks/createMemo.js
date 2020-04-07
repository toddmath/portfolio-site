import { useMemo } from 'react'

/**
 * Helper factory function that wraps function inside `useMemo`.
 * @param {Function} fn Function to memoize with `useMemo` hook.
 */
const createMemo = fn => (...args) => useMemo(() => fn(...args), args)

export default createMemo
