import styled from 'styled-components'
import { motion } from 'framer-motion'

import { theme, media } from '@styles'

const { flat } = theme

export const StyledContainer = styled.aside`
  /* width: 40px; */
  position: fixed;
  bottom: 0;
  left: 40px;
  color: var(--interactive-normal);

  ${media.desktop`
    left: 25px;
  `};
  ${media.tablet`
    display: none;
  `};
`

export const StyledList = styled(motion.ul)`
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  display: grid;
  grid-template-columns: min-content;
  grid-auto-rows: min-content;
  gap: 1ch;

  color: var(--interactive-normal);
  transition-timing-function: unset;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 10ch;
    margin: 0 auto;
    /* background-color: ${flat.dark.secondary}; */
    background-color: var(--background-accent);
  }
`
