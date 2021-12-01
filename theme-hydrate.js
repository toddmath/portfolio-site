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
})('dark', 'light', 'theme-mode')
