import styled from 'styled-components'
// import { motion } from 'framer-motion'

import { styledTheme, theme } from '@styles'

const backgroundColor = styledTheme([
  theme.flat.dark.headline,
  theme.flat.dark.background,
])

export const SidebarBackground = styled.div`
  clip-path: circle(30px at 40px 40px);
  background-color: var(--background-accent);
  /* background: ${backgroundColor}; */
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 10;
`

export const SideBarButton = styled.button`
  user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 50%;
  background: transparent;
`
