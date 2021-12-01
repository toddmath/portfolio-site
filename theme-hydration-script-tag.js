/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React from 'react'
// import { minify } from 'terser'
// import Terser from 'terser'

/**
 * Helper template tag function that creates script tag for darkmode and lightmode styles.
 * @param {{ classNameDark: string, classNameLight: string, storageKey: string }} options
 * @see {@link https://github.com/donavon/use-dark-mode/blob/develop/noflash.js.txt}
 */
// @ts-ignore
// const generateNoFlashScript = ({
//   classNameDark = 'dark',
//   classNameLight = 'light',
//   storageKey = 'theme-mode',
// } = {}) => `
// (function(classNameDark, classNameLight, storageKey) {
//   const setClassOnDocumentBody = darkMode => {
//     const activeTheme = darkMode ? classNameDark : classNameLight
//     const disabledTheme = darkMode ? classNameLight : classNameDark
//     document.body.classList.add(activeTheme)
//     document.body.classList.remove(disabledTheme)
//   }
//   const preferDarkQuery = '(prefers-color-scheme: dark)'
//   const mql = window.matchMedia(preferDarkQuery)
//   const supportsColorSchemeQuery = mql.media === preferDarkQuery
//   let localStorageTheme = null
//   try {
//     localStorageTheme = localStorage.getItem(storageKey)
//   } catch (error) {}
//   const localStorageExists = () => localStorageTheme !== null
//   if (localStorageExists()) {
//     localStorageTheme = JSON.parse(localStorageTheme)
//   }
//   if (localStorageExists()) {
//     setClassOnDocumentBody(localStorageTheme)
//   } else if (supportsColorSchemeQuery) {
//     setClassOnDocumentBody(mql.matches)
//     localStorage.setItem(storageKey, mql.matches)
//   } else {
//     const isDarkMode = document.body.classList.contains(classNameDark)
//     localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
//   }
// })('${classNameDark}', '${classNameLight}', '${storageKey})');
// `

// function getScript(script, shouldMin) {
//   let output
//   if (shouldMin) {
//     try {
//       output = minify(script, { toplevel: true }).then(s => s.code)
//     } catch (error) {
//       return ''
//     }
//   } else {
//     output = script
//   }
//   return output
// }

/**
 * Helper function that generates script tag for `dark-mode` / `light-mode` and injects it into the document.
 * @param {{ classNameDark: string, classNameLight: string, storageKey: string, minify: boolean }} options
 */
const ThemeHydrationScriptTag = ({
  classNameDark = 'dark',
  classNameLight = 'light',
  storageKey = 'theme-mode',
  shouldMinify = true,
}) => {
  // const noFlashScript = generateNoFlashScript({
  //   classNameDark,
  //   classNameLight,
  //   storageKey,
  // })

  // const script = getScript(noFlashScript, shouldMinify)

  // const tConf = { topLevel: true }
  // const script = shouldMinify
  //   ? Terser.minify(noFlashScript, tConf)
  //       .then(s => s.code)
  //       .catch(e => '')
  //   : noFlashScript

  // const getScript = useCallback(async () => {
  //   if (minify) {
  //     try {
  //       const script = await Terser.minify(noFlashScript, { topLevel: true })
  //       return script.code
  //     } catch (error) {
  //       return ''
  //     }
  //   } else return noFlashScript
  // }, [minify, noFlashScript])

  // const getScript = useMemo(async () => {
  //   if (minify) {
  //     try {
  //       const script = await Terser.minify(noFlashScript, { toplevel: true })
  //       return script.code
  //     } catch (error) {
  //       return ''
  //     }
  //   } else return noFlashScript
  // }, [minify, noFlashScript])

  // return (
  //   <script type='text/javascript' async dangerouslySetInnerHTML={{ __html: script }} />
  // )

  return (
    <script
      type='text/javascript'
      async
      dangerouslySetInnerHTML={{
        __html: `(function(classNameDark,classNameLight,storageKey){const setClassOnDocumentBody=darkMode=>{const activeTheme=darkMode?classNameDark:classNameLight;const disabledTheme=darkMode?classNameLight:classNameDark;document.body.classList.add(activeTheme);document.body.classList.remove(disabledTheme)};const preferDarkQuery="(prefers-color-scheme: dark)";const mql=window.matchMedia(preferDarkQuery);const supportsColorSchemeQuery=mql.media===preferDarkQuery;let localStorageTheme=null;try{localStorageTheme=localStorage.getItem(storageKey)}catch(error){}const localStorageExists=()=>localStorageTheme!==null;if(localStorageExists()){localStorageTheme=JSON.parse(localStorageTheme)}if(localStorageExists()){setClassOnDocumentBody(localStorageTheme)}else if(supportsColorSchemeQuery){setClassOnDocumentBody(mql.matches);localStorage.setItem(storageKey,mql.matches)}else{const isDarkMode=document.body.classList.contains(classNameDark);localStorage.setItem(storageKey,JSON.stringify(isDarkMode))}})("dark","light","theme-mode");`,
      }}
    />
  )
}

ThemeHydrationScriptTag.propTypes = {
  classNameDark: PropTypes.string,
  classNameLight: PropTypes.string,
  storageKey: PropTypes.string,
  shouldMinify: PropTypes.bool,
}

export default ThemeHydrationScriptTag
