import styled from 'styled-components'
import { motion } from 'framer-motion'

import { theme } from '@styles'

export const ProgressContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  z-index: 12;
  /* transition: all 220ms ease; */
  /* transition: ${theme.transition}; */
`

export const Progress = styled(motion.span)`
  position: absolute;
  background-image: ${theme.gradTL};
  width: 100%;
  height: 100%;
  transform-origin: left;
  /* opacity: var(--opacity);
  transform: scaleX(var(--scroll)); */
  /* transition: transform 220ms ease, opacity 50ms ease; */
`
