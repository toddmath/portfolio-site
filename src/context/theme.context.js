import React, { createContext, useContext, useMemo, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

import { useLocalStorage } from '@hooks'

// const usePersistedTheme = usePersistedState('theme-mode')

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222',
})

export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
})

// const Wrapper = styled.div`
//   background-color: ${backgroundColor};
//   color: ${textColor};
// `

export const ThemeToggleContext = createContext([])

// export const useTheme = () => useContext(ThemeToggleContext)

export function useTheme() {
  const context = useContext(ThemeToggleContext)
  if (!context) {
    throw new Error(`Must be called inside of ThemeToggleProvider`)
  }
  return context
}

export const ThemeToggleProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useLocalStorage('theme-mode', 'light')
  // const [themeMode, setThemeMode] = usePersistedTheme('light')
  // const [themeState, setThemeState] = useState({ mode: 'light' })
  // const Wrapper = styled.div`
  //   background-color: ${backgroundColor};
  //   color: ${textColor};
  // `
  // const toggle = () => {
  //   const mode = themeState === 'light' ? 'dark' : 'light'
  //   setThemeState({ mode })
  // }

  // const toggleTheme = () => {
  //   setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  // }

  // const toggleTheme = useCallback(
  //   () => setThemeMode(themeMode === 'light' ? 'dark' : 'light'),
  //   [setThemeMode]
  // )

  const toggleTheme = useCallback(
    () => setThemeMode(theme => (theme === 'light' ? 'dark' : 'light')),
    [setThemeMode]
  )

  const value = useMemo(() => [themeMode, toggleTheme], [themeMode, toggleTheme])

  return (
    <ThemeToggleContext.Provider value={value}>
      <ThemeProvider theme={{ mode: themeMode }}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}

export default ThemeToggleProvider
