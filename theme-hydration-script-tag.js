/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React from 'react'
import Terser from 'terser'

/**
 * Helper template tag function that creates script tag for darkmode and lightmode styles.
 * @param {object} options
 * @param {string} options.classNameDark Optional className for dark mode.
 * @param {string} options.classNameLight Optional className for light mode.
 * @param {string} options.storageKey Optional name for storage key (localStorage).
 * @see {@link https://github.com/donavon/use-dark-mode/blob/develop/noflash.js.txt}
 */
const generateNoFlashScript = ({
  classNameDark = 'dark',
  classNameLight = 'light',
  storageKey = 'theme-mode',
} = {}) => `
(function(classNameDark, classNameLight, storageKey) {
  const setClassOnDocumentBody = darkMode => {
    const activeTheme = darkMode ? classNameDark : classNameLight
    const disabledTheme = darkMode ? classNameLight : classNameDark
    document.body.classList.add(activeTheme)
    document.body.classList.remove(disabledTheme)
  }
  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const mql = window.matchMedia(preferDarkQuery)
  const supportsColorSchemeQuery = mql.media === preferDarkQuery
  let localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (error) {}
  const localStorageExists = () => localStorageTheme !== null
  if (localStorageExists()) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }
  if (localStorageExists()) {
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    const isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})('${classNameDark}', '${classNameLight}', '${storageKey})');
`

/**
 * Helper function that generates script tag for `dark-mode` / `light-mode` and injects it into the document.
 * @param {Object} options
 * @param {string} [options.classNameDark='dark']
 * @param {string} [options.classNameLight='light']
 * @param {string} [options.storageKey='theme-mode']
 * @param {boolean} [options.minify=true]
 */
const ThemeHydrationScriptTag = ({
  classNameDark = 'dark',
  classNameLight = 'light',
  storageKey = 'theme-mode',
  minify = true,
}) => {
  const noFlashScript = generateNoFlashScript()

  const html = Terser.minify(noFlashScript).code || ''

  return <script type='text/javascript' async dangerouslySetInnerHTML={{ __html: html }} />
}

ThemeHydrationScriptTag.propTypes = {
  classNameDark: PropTypes.string,
  classNameLight: PropTypes.string,
  storageKey: PropTypes.string,
  minify: PropTypes.bool,
}

export default ThemeHydrationScriptTag
