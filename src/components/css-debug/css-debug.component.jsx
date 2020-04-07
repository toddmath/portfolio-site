import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { useCssDebug } from '@hooks'
import { ToggleDebugButton, gridStyles, getDebugStyles } from './css-debug.styles'

const GlobalStyle = createGlobalStyle`
  html {
    ${props => props.debug && props.showGrid && gridStyles};
    * {
      ${props => getDebugStyles(props)};
    }
  }
`

export default function CSSDebugger({
  debug = false,
  showToggle = true,
  showGrid = true,
  buttonStyle,
  color = 'rgba(255, 0, 0, .75)',
}) {
  const [isDebug, toggle] = useCssDebug(debug)

  const styleProps = { debug: isDebug, showGrid, color }
  const toggleProps = { style: buttonStyle, debug: isDebug, onTap: toggle }

  return (
    <>
      <GlobalStyle {...styleProps} />
      {showToggle && <ToggleDebugButton {...toggleProps}>Debug CSS</ToggleDebugButton>}
    </>
  )
}
