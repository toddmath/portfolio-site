import styled from 'styled-components'

import { media, theme } from '@styles'

export const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  position: absolute;
`

export const StyledColumn = styled('div').attrs({
  dataSal: 'fade',
  dataSalDuration: '500',
})`
  --svgFill: ${theme.flat.dark.button};
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 50%;
  flex: 0 0 50%;
  &:first-of-type {
    padding-right: 144px;
  }
  &:last-of-type {
    padding-left: 144px;
  }
  ${media.tablet`
    flex: 0 0 100%;
    max-width: 100%;
    &:first-of-type {
      padding-right: 0;
    }
    &:last-of-type {
      padding-left: 0;
    }
  `}
  svg {
    width: var(--svgSize);
    height: var(--svgSize);
    fill: var(--svgFill);
    stroke: var(--svgFill) !important;
    color: var(--svgFill) !important;
  }
`

export const StyledRow = styled.div`
  height: var(--rowHeight);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 32px;
  ${StyledColumn} + ${StyledColumn} {
    margin-top: 0;
    ${media.tablet`
      margin-top: 16px;
    `}
  }
`
