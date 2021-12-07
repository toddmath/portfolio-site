import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const linkStyles = css`
  padding: 0;
  /* padding: 1ch; */
  color: var(--text-link);
  svg {
    width: 2ch;
    height: 2ch;
  }
`

export const MotionLink = styled(motion.a)`
  ${linkStyles};
  transition-timing-function: unset;
  transition: unset;
`
