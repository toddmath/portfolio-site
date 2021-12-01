import React from 'react'

import { MoonIcon } from '../icons'
import { useTheme } from '@context/theme.context'
import { LogoWrapper, StyledMoon } from './theme-toggle.styles'

export default function ThemeToggle() {
  const [themeMode, toggleTheme] = useTheme()
  const mode = themeMode == 'dark' ? 'moon' : 'sun'
  return (
    <LogoWrapper>
      <StyledMoon
        onClick={toggleTheme}
        themeMode={themeMode}
        role='switch'
        aria-checked={themeMode === 'dark'}
        aria-label={`Enable ${themeMode === 'dark' ? 'light' : 'dark'} color theme`}
      >
        <MoonIcon mode={mode} />
      </StyledMoon>
    </LogoWrapper>
  )
}
