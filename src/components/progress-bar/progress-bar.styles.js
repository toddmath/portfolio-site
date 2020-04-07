import styled from 'styled-components'

import { theme } from '@styles'

export const ProgressContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  z-index: 12;
  transition: all 220ms ease;
  /* transition: ${theme.transition}; */
`

export const Progress = styled.span`
  position: absolute;
  /* background-image: linear-gradient(
    to right,
    ${theme.flat.dark.link} ${props => `${props.scroll}%`},
    transparent 0
  ); */
  /* background-color: ${theme.flat.dark.link}; */
  background-image: ${theme.gradTL};
  /* width: ${props => props.scroll}%; */
  width: 100%;
  height: 100%;
  transform-origin: left;
  transform: perspective(50rem) ${props => `scaleX(${props.scroll})`};
  transition: transform 220ms ease;
`
