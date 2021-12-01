import { useContext } from 'react'

import { DebugContext } from '@context'

// const useDebug = () => useContext(DebugContext)

function useDebug() {
  const context = useContext(DebugContext)
  if (!context) {
    throw new Error('useDebug must be called inside of DebugProvider')
  }
  return context
}

export default useDebug
