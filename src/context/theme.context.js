import React, { createContext, useContext, useCallback } from 'react'
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

export const useTheme = () => useContext(ThemeToggleContext)

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

  const toggleTheme = useCallback(
    () => setThemeMode(themeMode === 'light' ? 'dark' : 'light'),
    [setThemeMode]
  )

  return (
    <ThemeToggleContext.Provider value={[themeMode, toggleTheme]}>
      <ThemeProvider theme={{ mode: themeMode }}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}

export default ThemeToggleProvider
