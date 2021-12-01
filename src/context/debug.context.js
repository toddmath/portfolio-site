import React, { createContext, useState, useMemo } from 'react'

export const DebugContext = createContext()

// export function useDebug() {
//   const context = useContext(DebugContext)
//   if (!context) {
//     throw new Error('useDebug must be called inside of DebugProvider')
//   }
//   return context
// }

export default function DebugProvider({ children }) {
  const [isDebug, setIsDebug] = useState(false)

  const value = useMemo(() => [isDebug, setIsDebug], [isDebug, setIsDebug])

  return <DebugContext.Provider value={value}>{children}</DebugContext.Provider>
}
