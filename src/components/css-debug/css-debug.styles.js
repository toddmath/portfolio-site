import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { theme } from '@styles'

export const ToggleDebugButton = styled(motion.button).attrs(() => ({
  drag: true,
  dragMomentum: false,
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}))`
  --distance: 20px;
  --mainColor: orange;
  position: fixed;
  top: var(--distance);
  left: var(--distance);
  border: none;
  cursor: pointer;
  padding: 0.5em;
  border-radius: ${theme.borderRadius};
  border: 2px solid var(--mainColor);
  background: var(--mainColor);
  color: ${theme.flat.dark.paragraph};
  z-index: 5000;
`

export const gridStyles = css`
  --gridLength: 10px;
  --bgColor: lightgrey;
  background-size: var(--gridLength) var(--gridLength) !important;
  background-image: linear-gradient(to right, var(--bgColor) 1px, transparent 1px),
    linear-gradient(to bottom, var(--bgColor) 1px, transparent 1px) !important;
`

export function getDebugStyles({ debug, color }) {
  if (!debug) return ''

  return `
    background: rgba(211, 211, 211, 0.2) !important;
    outline-style: solid !important;
    outline-color: ${color} !important;
    outline-width: thin !important;
  `
}
