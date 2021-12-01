/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components'

import theme from './theme'
import media, { toBreakpoint } from './media'
import * as fontFamilies from './fonts'
import mixins from './mixins'
// import printStyles from './Print'
import { lightVariables, darkVariables } from './variables'
import styledTheme from './StyledTheme'
// import sal from './sal'

const { fontSizes, flat, lineHeights, easing } = theme
const { textSelectShadow } = mixins
const thumbBackground = styledTheme([flat.dark.background, flat.dark.cardBackground])
const themeVariables = styledTheme([lightVariables, darkVariables])

const GlobalStyle = createGlobalStyle`
  /* ----------------------------------------------------------------------
  ---- FF Meta Variable Font
  ---------------------------------------------------------------------- */
  @font-face {
    font-family: 'FF Meta VF';
    src: url(${fontFamilies.MetaVariableWOFF2}) format('woff2');
    font-display: swap;
    font-style: normal italic;
    font-weight: 100 900;
  }
  /* ----------------------------------------------------------------------
  ---- Operator Mono
  ---------------------------------------------------------------------- */
  @font-face {
    font-family: 'Operator Mono';
    src: url(${fontFamilies.OperatorMonoBookWOFF2}) format('woff2'),
      url(${fontFamilies.OperatorMonoBookWOFF}) format('woff'),
      url(${fontFamilies.OperatorMonoBookOTF}) format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${fontFamilies.OperatorMonoBookItalicWOFF2}) format('woff2'),
      url(${fontFamilies.OperatorMonoBookItalicWOFF}) format('woff'),
      url(${fontFamilies.OperatorMonoBookItalicOTF}) format('opentype');
    font-weight: 400;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${fontFamilies.OperatorMonoMediumWOFF2}) format('woff2'),
      url(${fontFamilies.OperatorMonoMediumWOFF}) format('woff'),
      url(${fontFamilies.OperatorMonoMediumOTF}) format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${fontFamilies.OperatorMonoMediumItalicWOFF2}) format('woff2'),
      url(${fontFamilies.OperatorMonoMediumItalicWOFF}) format('woff'),
      url(${fontFamilies.OperatorMonoMediumItalicOTF}) format('opentype');
    font-weight: 500;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${fontFamilies.OperatorMonoBoldWOFF2}) format('woff2'),
      url(${fontFamilies.OperatorMonoBoldWOFF}) format('woff'),
      url(${fontFamilies.OperatorMonoBoldOTF}) format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${fontFamilies.OperatorMonoBoldItalicWOFF2}) format('woff2'),
      url(${fontFamilies.OperatorMonoBoldItalicWOFF}) format('woff'),
      url(${fontFamilies.OperatorMonoBoldItalicOTF}) format('opentype');
    font-weight: 700;
    font-style: italic;
    font-display: auto;
  }
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

  /* .dark-theme {
    ${darkVariables}
  }

  .light-theme {
    ${lightVariables}
  } */

  b,
  strong {
    --text-wght: 475;
    --wght: 'wght' 520;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    scroll-padding: 8rem;
    ${mixins.reducedMotion};

    font-family: var(--font-sys);
    font-variation-settings: var(--wght), var(--opsz), var(--grad), var(--yaxs);

    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thin-track);
    /* scrollbar-color: auto; */
  }

  /* ----------------------------------------------------------------------
    ---- Scrollbar Styles
    ---------------------------------------------------------------------- */
  /* the entire scrollbar */
  /* ::-webkit-scrollbar  {
    width: 0.35rem;
  } */

  /* the buttons on the scrollbar (arrows pointing upwards and downwards) */
  /* ::-webkit-scrollbar-button {
    background: var(--scrollbar-thin-thumb);
  } */

  /* the draggable scrolling handle */
  /* ::-webkit-scrollbar-thumb {
    width: 0.35rem;
    height: 3rem;
    background:var(--scrollbar-thin-thumb);
  } */

  /* ::-webkit-scrollbar-thumb:hover {
    border-radius: 0.4em;
    background:var(--interactive-hover);
  } */

  /* ::-webkit-scrollbar-thumb:active {
    border-radius: 0.4em;
    background:var(--interactive-active);
  } */

  /* the track (progress bar) of the scrollbar */
  /* ::-webkit-scrollbar-track {
    background: var(--scrollbar-auto-scrollbar-color-track);

    &:hover ::-webkit-scrollbar-thumb {
      background: var(--interactive-normal);
    }
  } */

  /* ?? the part of the track (progress bar) not covered by the handle */
  /* ::-webkit-scrollbar-track-piece {
    background: var(--scrollbar-thin-track);
  } */

  /* the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet */
  /* ::-webkit-scrollbar-corner {
    background:var(--scrollbar-thin-thumb);
  } */

  /* the draggable resizing handle that appears at the bottom corner of some elements */
  /* ::-webkit-resizer {
    background:var(--scrollbar-thin-thumb);
  } */

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  p,
  ul,
  ol,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    margin: 0;
    /* width: 100%; */
    width: 100vw;
    min-height: 100%;
    overflow: overlay;
    /* overflow-x: hidden; */
    -moz-osx-font-smoothing: grayscale;
    /* text-rendering: optimizeSpeed; */
    -webkit-font-smoothing: antialiased;
    ${mixins.retina};
    color: var(--text-normal);
    background-color: var(--background-primary);
    line-height: 1.45;

    font-family: var(--font-sys);
    font-variation-settings: var(--wght), var(--opsz), var(--grad), var(--yaxs);
    font-size: ${fontSizes.lg};
    ${media.phablet`font-size: ${fontSizes.md};`}

    &.hidden,
    &.blur {
      overflow: hidden;
    }

    &.blur #root > * {
      ${mixins.blur};
    }

    /* ----------------------------------------------------------------------
    ---- Selection Styles
    ---------------------------------------------------------------------- */
    & ::selection {
      background: var(--selection-background);
      color: var(--selection-text);
      opacity: 1;
    }
  }

  button {
    --wght: 'wght' 565;
    text-transform: none;
    text-indent: 0px;
    color: inherit;
    font-style: inherit;
    font-family: var(--font-sys);
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
    --wght: 'wght' 350;
    --opsz: 'opsz' 19;
    font-style: normal;
    font-family: var(--font-sys);
  }

  ul,
  li,
  blockquote,
  button {
    /* font-family: var(--font-code); */
    /* font-variant-ligatures: normal; */
  }

  p {
    hyphens: auto;
    margin: 0 0 15px 0;
    line-height: 1.5;
    font-size: clamp(1.1rem, 2vw, 1.2rem);
  }

  /* ----------------------------------------------------------------------
  ---- Generic Header Styles
  ---------------------------------------------------------------------- */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    --wght: 'wght' 700;
    --opsz: 'opsz' 20;
    --yaxs: 'YAXS' 477;
    font-family: var(--font-sys);
    font-variation-settings: var(--wght), var(--opsz), var(--grad), var(--yaxs);
  }

  h1 {
    --wght: 'wght' 488;
    --grad: 'GRAD' 444;
    --yaxs: 'YAXS' 444;
    --opsz: 'opsz' 20;
    font-family: var(--font-sys);
    ${'' /* --text-wght: calc( var(--p-vf-wght) * var(--h1-vf-wght-multiplier-s)); */}
    ${'' /* font-size: calc(var(--h1-font-size-min) * 1em); */}
    ${'' /* line-height: var(--h1-line-height-min); */}
  }

  h2 {
    --wght: 'wght' 522;
    --opsz: 'opsz' 20;
    --yaxs: 'YAXS' 444;

    ${'' /* --text-wght: calc(var(--p-vf-wght) * var(--h2-vf-wght-multiplier-s)); */}
    font-size: clamp(calc(var(--h2-font-size-min) * 1rem), 3.5vmin, 2.8rem);
    line-height: var(--h2-line-height-min);
  }

  h3 {
    --wght: 'wght' 444;
    --opsz: 'opsz' 20;
    --yaxs: 'YAXS' 422;
    --grad: 'GRAD' 422;

    ${'' /* font-size: calc( var(--h2-font-size-min) * 1em ); */}
    font-size: clamp(calc(var(--h2-font-size-min) * 1rem), 3vmin, 2.2rem);
    line-height: var(--h2-line-height-min);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--header-primary);
    /* color: ${flat.dark.headline}; */
    margin: 0 0 10px 0;
  }

  *::selection,
  *::-webkit-selection,
  *::-moz-selection {
    ${textSelectShadow};
  }

  /* ----------------------------------------------------------------------
  ---- Main React Container Grid
  ---------------------------------------------------------------------- */
  #root {
    height: 100%;
    ${
      '' /* min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr;
    grid-auto-rows: auto;
    grid-template-columns: 100%; */
    }

    &::-moz-selection,
    &::selection {
      ${textSelectShadow};
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    display: block;
    image-rendering: auto;
    image-rendering: high-quality;
  }

  svg {
    vertical-align: middle;
    ${'' /* fill: currentColor; */}
  }

  a {
    ${mixins.link};
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    font-family: var(--font-code);
    font-variant-ligatures: normal;

    &:focus,
    &:active {
      outline-color: var(--interactive-active);
      /* outline-color: ${flat.dark.button}; */
    }
  }

  input,
  textarea {
    border-radius: 0;

    &,
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
    font-family: var(--font-code);
    font-variant-ligatures: normal;
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
    /* color: ${flat.dark.tertiary}; */
    ${'' /* font-family: ${fonts.Montserrat}; */}
    ${'' /* font-size: ${fontSizes.md}; */}
    ${'' /* font-weight: normal; */}
  }

  /* ----------------------------------------------------------------------
  ---- Print Styles
  ---------------------------------------------------------------------- */
  ${'' /* ${printStyles}; */}
`

export default GlobalStyle
