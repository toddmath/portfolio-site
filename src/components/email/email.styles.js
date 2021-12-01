import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Icon } from '@components/icons'
import { media } from '@styles'

export const StyledContainer = styled.aside`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
`

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  perspective: 100rem;
  justify-content: space-evenly;
  color: var(--interactive-normal);

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--background-accent);
  }
`

export const StyledEmailLink = styled(motion.a)`
  font-size: calc(var(--p-font-size-min) * 0.9em);
  font-variation-settings: 'wght' var(--text-wght), 'ital' var(--text-ital);
  writing-mode: vertical-rl;
  margin: 20px auto 5px auto;
  padding: 10px;
  padding-top: 30px;
  perspective: 50rem;
  color: var(--interactive-normal);

  &:hover {
    color: var(--interactive-hover);
  }
`

export const StyledEmailLinkContainer = styled.div`
  color: var(--interactive-normal);
  padding-bottom: 10px;
`

export const StyledEmailIcon = styled(Icon).attrs(({ size, title }) => ({
  name: 'mail',
  size: size || '24',
  title,
}))`
  color: var(--interactive-normal);
  stroke: currentColor;
`
