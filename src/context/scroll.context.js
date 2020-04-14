import React, { createContext, useContext, useState } from 'react'

export const ScrollContext = createContext([])

export const useScroll = () => useContext(ScrollContext)

export const ScrollProvider = ({ children }) => {
  const [scrollAmount, setScrollAmount] = useState({})

  // const value = useMemo(() => [scrollAmount, setScrollAmount], [scrollAmount])
  const value = [scrollAmount, setScrollAmount]
  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export default ScrollProvider
