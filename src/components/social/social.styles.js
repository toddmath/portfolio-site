import styled from 'styled-components'

import { theme, media } from '@styles'

const { flat } = theme

export const StyledContainer = styled.aside`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  color: ${flat.dark.headline};
  ${media.desktop`left: 25px;`};
  ${media.tablet`display: none;`};
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${flat.dark.secondary};
  }
`
