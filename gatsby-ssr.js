/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import ThemeHydrationScriptTag from './theme-hydration-script-tag'

export const onRenderBody = ({ setPreBodyComponents }, pluginOptions) => {
  // eslint-disable-next-line no-param-reassign
  delete pluginOptions.plugins
  // const { classNameDark, classNameLight, storageKey, minify } = pluginOptions
  // const props = { classNameDark, classNameLight, storageKey, minify }

  setPreBodyComponents([<ThemeHydrationScriptTag key='dark-mode-noflash-hydration-script' />])
}
