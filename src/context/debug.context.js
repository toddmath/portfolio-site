import React, { createContext, useState, useMemo } from 'react'

export const DebugContext = createContext()

export default function DebugProvider({ children }) {
  const [isDebug, setIsDebug] = useState(false)

  const value = useMemo(() => [isDebug, setIsDebug], [isDebug])

  return <DebugContext.Provider value={value}>{children}</DebugContext.Provider>
}
