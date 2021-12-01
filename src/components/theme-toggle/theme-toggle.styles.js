import styled, { keyframes, css } from 'styled-components'

import { theme, styledTheme } from '@styles'

const sunStroke = styledTheme(['rgba(245, 124, 0, 1)', 'var(--interactive-normal)'])

const AniStrokeDashOffset = keyframes`
  to: {
    stroke-dashoffset: 0;
  }
`

const drawIn = keyframes`
  to: {
    stroke-dashoffset: 100%;
  }
`

export const LogoWrapper = styled.div`
  --logoLength: calc(${theme.navHeight} / 2.5);
  --darkColor: var(--interactive-normal);
  --sunColor: rgba(245, 124, 0, 1);

  height: var(--logoLength);
  width: var(--logoLength);
  margin: 0 1em;

  svg {
    fill: var(--darkColor);
    width: var(--logoLength);
    height: var(--logoLength);
    cursor: pointer;
  }
`

export const StyledMoon = styled.div`
  path {
    stroke-width: 20px;
    transition: ${theme.transition};
    stroke-dasharray: 1000;
    animation-name: ${AniStrokeDashOffset};
    animation-duration: 1s;
    animation-direction: ${({ themeMode }) =>
      themeMode === 'dark' ? 'normal' : 'reverse'};

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
      stroke: var(--interactive-normal);
    }

    &.shine {
      stroke-width: 15px;
      transition-duration: 600ms;
      transition-property: opacity;
      opacity: ${({ themeMode }) => (themeMode === 'light' ? 1 : 0)};
    }
  }
`
