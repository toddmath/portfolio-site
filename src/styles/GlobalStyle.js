import { createGlobalStyle } from 'styled-components'

import theme from './theme'
import media, { toBreakpoint, mediaMin } from './media'
import * as fontFamilies from './fonts'
import mixins from './mixins'
import { lightVariables, darkVariables } from './variables'
import styledTheme from './StyledTheme'

const { fontSizes, fonts, flat, lineHeights, transition, easing } = theme
const { textSelectShadow } = mixins

const thumbBackground = styledTheme([flat.dark.background, flat.dark.cardBackground])
const themeVariables = styledTheme([lightVariables, darkVariables])

const GlobalStyle = createGlobalStyle`
  /* ----------------------------------------------------------------------
  ---- San Francisco Mono
  ---------------------------------------------------------------------- */
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoRegularWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoRegularWOFF}) format('woff'),
    url(${fontFamilies.SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoRegularItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoRegularItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoMediumWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoMediumWOFF}) format('woff'),
    url(${fontFamilies.SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoMediumItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoMediumItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoSemiboldWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoSemiboldWOFF}) format('woff'),
    url(${fontFamilies.SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoSemiboldItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoSemiboldItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }

  /* ----------------------------------------------------------------------
  ---- Montserrat
  ---------------------------------------------------------------------- */
  /* @font-face {
    font-family: "Montserrat";
    font-weight: 100;
    font-style: normal;
    src: url(${fontFamilies.MontserratThinWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratThinWOFF}) format("woff"),
        url(${fontFamilies.MontserratThinEOT}) format('embedded-opentype');
  }
  @font-face {
      font-family: "Montserrat";
      font-weight: 300;
      font-style: normal;
      src: url(${fontFamilies.MontserratLightWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratLightWOFF}) format("woff"),
        url(${fontFamilies.MontserratLightEOT}) format('embedded-opentype');
  }
  @font-face {
      font-family: "Montserrat";
      font-weight: 400;
      font-style: normal;
      src: url(${fontFamilies.MontserratRegularWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratRegularWOFF}) format("woff"),
        url(${fontFamilies.MontserratRegularEOT}) format('embedded-opentype');
  }
  @font-face {
      font-family: "Montserrat";
      font-weight: 400;
      font-style: italic;
      src: url(${fontFamilies.MontserratRegularItalicWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratRegularItalicWOFF}) format("woff"),
        url(${fontFamilies.MontserratRegularItalicEOT}) format('embedded-opentype');
  }
  @font-face {
      font-family: "Montserrat";
      font-weight: 500;
      font-style: normal;
      src: url(${fontFamilies.MontserratMediumWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratMediumWOFF}) format("woff"),
        url(${fontFamilies.MontserratMediumEOT}) format('embedded-opentype');
  }
  @font-face {
      font-family: "Montserrat";
      font-weight: 500;
      font-style: italic;
      src: url(${fontFamilies.MontserratMediumItalicWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratMediumItalicWOFF}) format("woff"),
        url(${fontFamilies.MontserratMediumItalicEOT}) format('embedded-opentype');
  }
  @font-face {
      font-family: "Montserrat";
      font-weight: 600;
      font-style: normal;
      src: url(${fontFamilies.MontserratSemiBoldWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratSemiBoldWOFF}) format("woff"),
        url(${fontFamilies.MontserratSemiBoldEOT}) format('embedded-opentype');
  }
  @font-face {
      font-family: "Montserrat";
      font-weight: 600;
      font-style: italic;
      src: url(${fontFamilies.MontserratSemiBoldItalicWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratSemiBoldItalicWOFF}) format("woff"),
        url(${fontFamilies.MontserratSemiBoldItalicEOT}) format('embedded-opentype');
  }
  @font-face {
      font-family: "Montserrat";
      font-weight: 700;
      font-style: normal;
      src: url(${fontFamilies.MontserratBoldWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratBoldWOFF}) format("woff"),
        url(${fontFamilies.MontserratBoldEOT}) format('embedded-opentype');
  }
  @font-face {
      font-family: "Montserrat";
      font-weight: 700;
      font-style: italic;
      src: url(${fontFamilies.MontserratBoldItalicWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratBoldItalicWOFF}) format("woff"),
        url(${fontFamilies.MontserratBoldItalicEOT}) format('embedded-opentype');
  }
  @font-face {
      font-family: "Montserrat";
      font-weight: 900;
      font-style: normal;
      src: url(${fontFamilies.MontserratBlackWOFF2}) format("woff2"),
        url(${fontFamilies.MontserratBlackWOFF}) format("woff"),
        url(${fontFamilies.MontserratBlackEOT}) format('embedded-opentype');
  } */

  /* ----------------------------------------------------------------------
  ---- Global CSS Variables
  ---------------------------------------------------------------------- */
  :root {
    /* Breakpoint variables */
    --bp-small: ${toBreakpoint('phone')};
    --bp-medium: ${toBreakpoint('tablet')};
    --bp-large: ${toBreakpoint('desktop')};
    --bp-xlarge: ${toBreakpoint('bigDesktop')};

    /* initial values ital */
    --text-wght: 350;
    --text-ital: 0;
    --txt-wght: 'wght' 350;
    --txt-opsz: 'opsz' 19;
    --txt-grad: 'GRAD' 400;
    --txt-yaxs: 'YAXS' 400;
    --txt-ital: 'ital' 0;

    /* Paragraph variables */
    --p-line-height-min: 1;
    --p-line-height-max: 1.25;
    --p-font-size-min: 1.0;
    --p-font-size-max: 1.2;
    --p-vf-wght: var(--text-wght);

    /* H1 variables */
    --h1-line-height-min: 1.05;
    --h1-line-height-max: 1.1;
    --h1-font-size-min: 3;
    --h1-font-size-max: 6;
    --h1-vf-wght-multiplier-s: 1.15;
    --h1-vf-wght-multiplier-m: 1.2;
    --h1-vf-wght-multiplier-l: 1.3;

    /* H2 variables */
    --h2-line-height-min: 1.15;
    --h2-line-height-max: 1.25;
    --h2-font-size-min: 1.75;
    --h2-font-size-max: 2.5;
    --h2-vf-wght-multiplier-s: 1.25;
    --h2-vf-wght-multiplier-m: 1.5;
    --h2-vf-wght-multiplier-l: 1.75;

    /* H3 variables */
    --h3-line-height-min: 1.15;
    --h3-line-height-max: 1.25;
    --h3-font-size-min: 1.75;
    --h3-font-size-max: 2.5;
    --h3-vf-wght-multiplier-s: 1.15;
    --h3-vf-wght-multiplier-m: 1.2;
    --h3-vf-wght-multiplier-l: 1.3;

    /* Dropcap variables */
    --dc-line-height-min: .9;
    --dc-line-height-max: .95;
    --dc-font-size-min: 2.7;
    --dc-font-size-max: 5.25;

    /* Blockquote variables */
    --bq-line-height-min: 1.1;
    --bq-line-height-max: 1.1;
    --bq-font-size-min: 2.7;
    --bq-font-size-max: 5;

    /* Font Families, variable font settings */
    --font-variable: "Nunito", sans-serif;
    --font-meta: "FF Meta VF";
    --font-sys: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-code: "Operator Mono";
    --wght: var(--txt-wght);
    --opsz: var(--txt-opsz);
    --grad: var(--txt-grad);
    --yaxs: var(--txt-yaxs);
    --x-height: 0.5;

    ${themeVariables}
  }

  html {
    box-sizing: border-box;
    width: 100%;
    /* height: 100%; */
    scroll-behavior: smooth;
    scroll-padding: 8rem;
    /* visibility: hidden; */

    /* &.sr {
      visibility: visible;
    } */
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
      scroll-padding: 8rem;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }

  p,
  ul[class],
  ol[class],
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    margin: 0;
    width: 100vw;
    /* height: 100%; */
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    background-color: var(--background-primary);
    color: var(--text-normal);
    line-height: 1.45;
    font-family: var(--font-variable);
    font-size: ${fontSizes.lg};
    ${media.phablet`font-size: ${fontSizes.md};`}

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      #root > * {
        filter: blur(3px) grayscale(60%) saturate(2);
        pointer-events: none;
        user-select: none;
      }
    }

    &::-webkit-scrollbar  {
      width: 0.25rem;
    }

    &::-webkit-scrollbar-track {
      background: ${thumbBackground};
    }

    &::-webkit-scrollbar-thumb {
      background: ${flat.dark.link};
    }
  }

  p,
  div,
  th,
  td,
  figcaption,
  cite,
  i,
  em,
  b,
  strong {
    --wght: 'wght' 250;
    --opsz: 'opsz' 19;
    /* font-style: normal; */
    font-family: var(--font-variable);
  }

  p {
    hyphens: auto;
    margin: 0 0 15px 0;
    line-height: 1.5;
    font-size: clamp(1.1rem, 2vw, 1.2rem);
    font-weight: 520;
  }

  /* Generic header styles */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-variable);
  }

  h1 {
    font-family: var(--font-variable);
    font-weight: 800;
  }

  h2 {
    font-size: clamp(calc(var(--h2-font-size-min) * 1rem), 3.5vmin, 2.8rem);
    line-height: var(--h2-line-height-min);
    font-weight: 720;
  }

  h3 {
    font-size: clamp(calc(var(--h2-font-size-min) * 1rem), 3vmin, 2.2rem);
    line-height: var(--h2-line-height-min);
    font-weight: 580;
    font-style: italic;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--header-primary);
    margin: 0 0 1ch 0;
    /* color: ${flat.dark.headline}; */
    /* margin: 0 0 10px 0; */
  }

  ::selection {
    ${textSelectShadow};
  }

  #root {
    /* height: 100%; */
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;

    ::selection {
      ${textSelectShadow};
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    /* vertical-align: middle; */
    display: block;
    image-rendering: auto;
    image-rendering: high-quality;
  }

  svg {
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${flat.dark.tertiary};
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    
    &:focus,
    &:active {
      outline-color: var(--interactive-active);
      /* outline-color: ${flat.dark.button}; */
    }
  }

  input,
  textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }

    &::placeholder {
    }

    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img.gatsby-image-outer-wrapper,
  div.gatsby-image-outer-wrapper,
  picture.gatsby-image-outer-wrapper {
    height: 100%;
  }

  /* ----------------------------------------------------------------------
  ---- Scroll Reveal Transition Styles
  ---------------------------------------------------------------------- */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${easing}, transform 300ms ${easing};

    &-active {
      opacity: 1;
      transform: translateY(0px);
      transition: opacity 300ms ${easing}, transform 300ms ${easing};
    }
  }

  .fadedown-enter {
      opacity: 0.01;
      transform: translateY(-20px);
      transition: opacity 300ms ${easing}, transform 300ms ${easing};

      &-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ${easing}, transform 300ms ${easing};
      }
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${easing};

    &-active {
      opacity: 1;
      transition: opacity 1000ms ${easing};
    }
  }

  .overline {
    color: var(--text-muted);
  }
`

export default GlobalStyle
