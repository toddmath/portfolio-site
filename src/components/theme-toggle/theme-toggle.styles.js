import styled, { keyframes, css } from 'styled-components'

import { theme, styledTheme } from '@styles'

const { flat } = theme

const sunStroke = styledTheme(['rgba(245, 124, 0, 1)', flat.dark.button])

const AniStrokeDashOffset = keyframes`
  from: {
    stroke-dashoffset: 1000;
  }
  to: {
    stroke-dashoffset: 0;
  }
`

const drawIn = keyframes`
  from: {
    stroke-dashoffset: 0%;
  }
  to: {
    stroke-dashoffset: 100%;
  }
`

const drawOut = keyframes`
  from: {
    stroke-dashoffset: 100%;
  }
  to: {
    stroke-dash-offset: 0%;
  }
`

export const LogoWrapper = styled.div`
  --logoLength: calc(${theme.navHeight} / 2.5);
  --darkColor: ${theme.flat.dark.paragraph};
  --sunColor: rgba(245, 124, 0, 1);
  --moonColor: ${theme.flat.dark.button};
  height: var(--logoLength);
  width: var(--logoLength);
  margin: 0 1em;
  svg {
    /* fill: ${backgroundColor}; */
    fill: var(--darkColor);
    width: var(--logoLength);
    height: var(--logoLength);
  }
`

export const StyledMoon = styled.div`
  cursor: pointer;

  path {
    stroke-width: 20px;
    transition: ${theme.transition};
    /* stroke-dasharray: 100%; */
    stroke-dasharray: 1000;
    /* stroke-dashoffset: ${({ themeMode }) => (themeMode === 'dark' ? 1000 : 0)}; */
    animation-name: ${AniStrokeDashOffset};
    /* animation-name: ${({ themeMode }) => (themeMode === 'light' ? drawIn : drawOut)}; */
    animation-duration: 1s;
    animation-direction: ${({ themeMode }) => (themeMode === 'dark' ? 'normal' : 'reverse')};

    &.sun {
      stroke: ${sunStroke};
      stroke-dasharray: 1000;
      animation-name: ${drawIn};
      animation-duration: 1s;
      ${({ themeMode }) =>
        themeMode === 'dark'
          ? css`
              stroke-dashoffset: 1000;
              animation-direction: normal;
            `
          : css`
              stroke-dashoffset: 0;
              animation-direction: reverse;
            `}
    }
    &.sunshine {
      stroke: ${sunStroke};
      animation-delay: 750ms;
    }
    &.moon {
      animation-delay: 750ms;
      stroke-dasharray: 1000;
      stroke-dashoffset: ${({ themeMode }) => (themeMode === 'light' ? 1000 : 0)};
      /* stroke: var(--darkColor); */
      stroke: ${({ themeMode }) =>
        themeMode === 'light' ? 'var(--darkColor)' : theme.flat.dark.button};
    }
    &.shine {
      stroke-width: 15px;
      transition-duration: 600ms;
      transition-property: opacity;
      opacity: ${({ themeMode }) => (themeMode === 'light' ? 1 : 0)};
    }
  }
  /* path.sun {
    stroke-dasharray: 1000;
    animation-name: ${drawIn};
    animation-duration: 1s;
    ${({ themeMode }) =>
    themeMode === 'dark'
      ? css`
          stroke-dashoffset: 1000;
          animation-direction: normal;
        `
      : css`
          stroke-dashoffset: 0;
          animation-direction: reverse;
        `}
  } */
`
