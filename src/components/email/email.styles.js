import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Mail as Icon } from '@styled-icons/feather/Mail'
import { media } from '@styles'

export const EmailContainer = styled.aside`
  /* width: 40px; */
  position: fixed;
  bottom: 0;
  right: 40px;

  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
`

export const LinkWrapper = styled.div`
  display: grid;
  gap: 1ch;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 10ch;
    margin: 0 auto;
    background-color: var(--background-accent);
  }
`

export const EmailLink = styled(motion.a)`
  font-size: calc(var(--p-font-size-min) * 0.9em);
  display: block;
  writing-mode: vertical-rl;
  color: var(--interactivee-normal);
  perspective: 10rem;

  &:hover {
    color: var(--interactive-hover);
  }
`

export const EmailLinkContainer = styled.div`
  color: var(--interactive-normal);
`

export const EmailIcon = styled(Icon).attrs(({ size, title }) => ({
  size: size || '22',
  title,
}))`
  color: var(--interactive-normal);
  stroke: currentColor;
  fill: var(--background-floating);
  box-shadow: var(--elevation-small);
`
