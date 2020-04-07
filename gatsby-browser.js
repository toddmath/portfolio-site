/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import React from 'react'
// import ThemeHydrationScriptTag from './theme-hydration-script-tag'

// export const onRenderBody = ({ setPreBodyComponents }, pluginOptions) => {
//   // eslint-disable-next-line no-param-reassign
//   delete pluginOptions.plugins

//   const { classNameDark, classNameLight, storageKey, minify } = pluginOptions
//   const props = { classNameDark, classNameLight, storageKey, minify }

//   setPreBodyComponents([
//     <ThemeHydrationScriptTag key='gatsby-plugin-use-dark-mode' {...props} />,
//   ])
// }
import React from 'react'
import ThemeToggleProvider from './src/context/theme.context'
// import { ThemeProvider } from 'styled-components'

export const wrapRootElement = ({ element }) => {
  return <ThemeToggleProvider>{element}</ThemeToggleProvider>
}
// import useLocalStorage from './src/hooks/useLocalStorage'
// import { wrapRootElement } from './gatsby-browser'
// const defaultTheme = "light"

// export const ThemeContext = React.createContext(defaultTheme)

// export const wrapRootElement = ({ element }) => {
//   // const [themeMode, setThemeMode] = useLocalStorage('theme-mode', 'light')
//   const [themeMode, setThemeMode] = useState('light')
//   const toggleTheme = useCallback(
//     () => setThemeMode(themeMode === 'light' ? 'dark' : 'light'),
//     [setThemeMode]
//   )

//   return (
//     <ThemeToggleContext.Provider value={[themeMode, toggleTheme]}>
//       <ThemeProvider theme={{ mode: themeMode }}>{element}</ThemeProvider>
//     </ThemeToggleContext.Provider>
//   )
// }
