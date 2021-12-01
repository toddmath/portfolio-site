import React from 'react'

import { MoonIcon } from '../icons'
import { useTheme } from '@context/theme.context'
import { LogoWrapper, StyledMoon } from './theme-toggle.styles'

export default function ThemeToggle() {
  const [themeMode, toggleTheme] = useTheme()

  return (
    <LogoWrapper>
      <StyledMoon onClick={toggleTheme} themeMode={themeMode}>
        <MoonIcon />
      </StyledMoon>
    </LogoWrapper>
  )
}
