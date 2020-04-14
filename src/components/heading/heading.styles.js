import styled, { css } from 'styled-components'

import { theme, media, styledTheme } from '@styles'

const {
  flat,
  fontSizes,
  fonts: { SFMono },
} = theme

const handleFontSize = ({ fontSize }) => {
  switch (fontSize.toLowerCase()) {
    case 'sm':
      return css`
        font-size: ${fontSizes.lg};
      `
    case 'md':
      return css`
        font-size: ${fontSizes.xl};
      `
    case 'lg':
      return css`
        font-size: ${fontSizes.xxl};
      `
    case 'xl':
    default:
      return css`
        font-size: ${fontSizes.h3};
      `
  }
}

const textShadow = `0 0 0 var(--textFG), 0 0 0 var(--highlite),
0.0025em 0.0025em 0 var(--highlite), 0.005em 0.005em 0 var(--highlite),
0.0075em 0.0075em 0 var(--highlite), 0.01em 0.01em 0 var(--highlite),
0.0125em 0.0125em 0 var(--highlite), 0.015em 0.015em 0 var(--highlite),
0.0175em 0.0175em 0 var(--highlite), 0.02em 0.02em 0 var(--highlite),
0.0225em 0.0225em 0 var(--highlite), 0.025em 0.025em 0 var(--highlite),
0.0275em 0.0275em 0 var(--highlite), 0.03em 0.03em 0 var(--highlite),
0.0325em 0.0325em 0 var(--highlite), 0.035em 0.035em 0 var(--highlite),
0.0375em 0.0375em 0 var(--highlite), 0.04em 0.04em 0 var(--highlite),
0.0425em 0.0425em 0 var(--highlite), 0.045em 0.045em 0 var(--highlite),
0.0475em 0.0475em 0 var(--highlite), 0.05em 0.05em 0 var(--highlite),
0.0525em 0.0525em 0 var(--highlite), 0.055em 0.055em 0 var(--highlite),
0.0575em 0.0575em 0 var(--highlite), 0.06em 0.06em 0 var(--highlite),
0.0625em 0.0625em 0 var(--highlite), 0.065em 0.065em 0 var(--highlite),
0.0675em 0.0675em 0 var(--highlite), 0.07em 0.07em 0 var(--highlite),
0.0725em 0.0725em 0 var(--highlite), 0.075em 0.075em 0 var(--highlite),
0.0775em 0.0775em 0 var(--highlite), 0.08em 0.08em 0 var(--highlite),
0.0825em 0.0825em 0 var(--highlite), 0.085em 0.085em 0 var(--highlite),
0.0875em 0.0875em 0 var(--highlite), 0.09em 0.09em 0 var(--highlite),
0.0925em 0.0925em 0 var(--highlite), 0.095em 0.095em 0 var(--highlite),
0.0975em 0.0975em 0 var(--highlite), 0.1em 0.1em 0 var(--highlite)`

const headingColor = styledTheme([flat.dark.headline, flat.dark.background])
const headingShadow = styledTheme(['none', textShadow])
const headingCounterColor = styledTheme([flat.dark.tertiary, flat.dark.background])

export const StyledHeading = styled.h2`
  --margin: 10px;
  --highlite: ${flat.dark.highlight};
  --textFG: ${flat.dark.paragraph};
  position: relative;
  display: ${props => props.display || 'flex'};
  align-items: ${props => props.center || 'center'};
  margin: ${props => props.margin || '10px 0 40px'};
  width: ${props => (props.width ? props.width : '100%')};
  white-space: nowrap;
  ${props => handleFontSize(props)}
  ${media.tablet`font-size: 24px;`};
  color: ${props => props.color || headingColor};
  text-shadow: ${headingShadow};
  line-height: 1.2;
  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: var(--margin);
    font-family: ${SFMono};
    font-weight: normal;
    color: ${headingCounterColor};
    text-shadow: none;
    font-size: ${fontSizes.xl};
    position: relative;
    bottom: 4px;
    ${media.tablet`font-size: ${fontSizes.lg};`};
  }
  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${flat.dark.tertiary};
    position: relative;
    top: -5px;
    margin-left: calc(var(--margin) * 2);
    ${media.desktop`width: 200px`};
    ${media.tablet`width: 100%;`};
    ${media.thone`margin-left: var(--margin);`};
  }
`
