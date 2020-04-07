import styled from 'styled-components'

import { animated } from 'react-spring'

import { theme, media } from '@styles'

const {
  flat,
  fontSizes: { xs },
  fonts: { SFMono },
} = theme

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
  perspective: 1000rem;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${flat.dark.secondary};
  }
`

export const StyledEmailLink = styled(animated.a)`
  transition: unset;
  font-family: ${SFMono};
  font-size: ${xs};
  letter-spacing: 0.5px;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
  color: ${flat.dark.link};
  perspective: 50rem;
`
