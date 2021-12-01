import styled from 'styled-components'
import { motion } from 'framer-motion'

import { theme, media } from '@styles'

export const StyledContainer = styled.aside`
  transition: color 300ms ${theme.easing};
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  color: var(--interactive-normal);
  ${media.desktop`left: 25px;`};
  ${media.tablet`display: none;`};
`

export const StyledList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--background-accent);
  }
`
