import styled from 'styled-components'

import theme from './theme'
import media from './media'
// import styledTheme from './StyledTheme'

const {
  fontSizes: { xl, lg },
  fonts: { SFMono },
} = theme

/* const textShadow = `0 0 0 var(--textFG), 0 0 0 var(--highlite),
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
0.0975em 0.0975em 0 var(--highlite), 0.1em 0.1em 0 var(--highlite)` */

/* const headingColor = styledTheme([flat.dark.headline, flat.dark.background])
const headingShadow = styledTheme(['none', textShadow])
const headingCounterColor = styledTheme([flat.dark.tertiary, flat.dark.background]) */

const Heading = styled.h3`
  --margin: 10px;
  --highlite: var(--text-link);
  --textFG: var(--header-secondary);
  position: relative;
  display: flex;
  align-items: center;
  /* margin: 0 0 4ch; */
  margin: 0;
  margin-bottom: ${({ mb }) => mb || '4ch'};
  width: 100%;
  white-space: nowrap;

  font-size: 2.6rem;
  /* ${media.tablet`font-size: 24px;`}; */

  color: var(--textFG);
  transition: color 400ms ease;
  /* text-shadow: ${headingShadow}; */
  line-height: 1.2;
  font-weight: 560;

  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: var(--margin);
    /* font-family: ${SFMono}; */
    font-weight: 900;
    /* color: ${headingCounterColor}; */
    color: var(--text-muted);
    text-shadow: none;
    font-size: ${xl};
    position: relative;
    bottom: 4px;
    /* ${media.tablet`font-size: ${lg};`}; */
  }

  &:after {
    content: '';
    display: block;
    height: 2px;
    /* width: 300px; */
    width: 100%;
    background-color: var(--background-accent);
    position: relative;
    /* top: -5px; */
    /* margin-left: calc(var(--margin) * 2); */
    margin-left: 1ch;

    /* ${media.desktop`width: 200px;`}; */
    /* ${media.tablet`width: 100%;`};
    ${media.thone`margin-left: var(--margin);`}; */
  }
`

export default Heading
