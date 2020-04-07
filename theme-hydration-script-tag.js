import React from 'react'
import PropTypes from 'prop-types'
import Terser from 'terser'

/**
 * Helper template tag function that creates script tag for darkmode and lightmode styles.
 * @param {object} options
 * @param {string} options.classNameDark Optional className for dark mode.
 * @param {string} options.classNameLight Optional className for light mode.
 * @param {string} options.storageKey Optional name for storage key (localStorage).
 * @see {@link https://github.com/donavon/use-dark-mode/blob/develop/noflash.js.txt}
 */
const generateNoFlashScript = ({ classNameDark, classNameLight, storageKey }) => `
  (function(classNameDark, classNameLight, storageKey) {
    function setClassOnDocumentBody(darkMode) {
      document.body.classList.add(darkMode ? classNameDark : classNameLight);
      document.body.classList.remove(darkMode ? classNameLight : classNameDark);
    }
    var preferDarkQuery = '(prefers-color-scheme: dark)';
    var mql = window.matchMedia(preferDarkQuery);
    var supportsColorSchemeQuery = mql.media === preferDarkQuery;
    var localStorageTheme = null;
    try {
      localStorageTheme = localStorage.getItem(storageKey);
    } catch (err) {}
    var localStorageExists = localStorageTheme !== null;
    if (localStorageExists) {
      localStorageTheme = JSON.parse(localStorageTheme);
    }
    // Determine the source of truth
    if (localStorageExists) {
      // source of truth from localStorage
      setClassOnDocumentBody(localStorageTheme);
    } else if (supportsColorSchemeQuery) {
      // source of truth from system
      setClassOnDocumentBody(mql.matches);
      localStorage.setItem(storageKey, mql.matches);
    } else {
      // source of truth from document.body
      var isDarkMode = document.body.classList.contains(classNameDark);
      localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
    }
  })('${classNameDark}', '${classNameLight}', '${storageKey}');
`

/**
 * Helper function that generates script tag for `dark-mode` / `light-mode` and injects it into the document.
 * @param {Object} options
 * @param {string} [options.classNameDark='dark-mode']
 * @param {string} [options.classNameLight='light-mode']
 * @param {string} [options.storageKey='darkMode']
 * @param {boolean} [options.minify=true]
 */
const ThemeHydrationScriptTag = ({
  classNameDark = 'dark-mode',
  classNameLight = 'light-mode',
  storageKey = 'darkMode',
  minify = true,
}) => {
  const noFlashScript = generateNoFlashScript({
    classNameDark,
    classNameLight,
    storageKey,
  })

  const finalNoFlashScript = minify
    ? Terser.minify(noFlashScript, { ecma: 2017 }).code || ''
    : noFlashScript

  return <script dangerouslySetInnerHTML={{ __html: finalNoFlashScript }} />
}

ThemeHydrationScriptTag.propTypes = {
  classNameDark: PropTypes.string,
  classNameLight: PropTypes.string,
  storageKey: PropTypes.string,
  minify: PropTypes.bool,
}

export default ThemeHydrationScriptTag
