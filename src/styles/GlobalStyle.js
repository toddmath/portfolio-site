import { createGlobalStyle } from 'styled-components'

import theme from './theme'
import media, { toBreakpoint, mediaMin } from './media'
import * as fontFamilies from './fonts'
import mixins from './mixins'
import styledTheme from './StyledTheme'
// import sal from './sal'

const { fontSizes, fonts, flat, lineHeights, transition, easing } = theme

const { textSelectShadow } = mixins

const thumbBackground = styledTheme([flat.dark.background, flat.dark.cardBackground])

const GlobalStyle = createGlobalStyle`
  /* FF Meta Variable Demo Font */
  @font-face {
    font-family: 'FF Meta VF';
    src: url(${fontFamilies.MetaVariableWOFF2}) format('woff2');
    font-display: swap;
    font-style: normal italic;
    font-weight: 100 900;
  }
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
  @font-face {
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
  }
  ${'' /* ${sal}; */}
  :root {
    /* Breakpoint variables */
    ${'' /* --bp-small: 24.15; */}
    ${'' /* --bp-medium: 43.75; */}
    ${'' /* --bp-large: 60.25; */}
    ${'' /* --bp-xlarge: 75; */}
    --bp-small: ${toBreakpoint('phone')};
    --bp-medium: ${toBreakpoint('tablet')};
    --bp-large: ${toBreakpoint('desktop')};
    --bp-xlarge: ${toBreakpoint('bigDesktop')};

    /* initial values ital */
    --text-wght: 350;
    --text-ital: 0;

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
    ${'' /* --h1-vf-wght-multiplier-s: .33; */}
    ${'' /* --h1-vf-wght-multiplier-m: .33; */}
    ${'' /* --h1-vf-wght-multiplier-l: .33; */}
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
    ${'' /* --h3-vf-wght-multiplier-s: .5; */}
    ${'' /* --h3-vf-wght-multiplier-m: .5; */}
    ${'' /* --h3-vf-wght-multiplier-l: .5; */}
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
  }
  .italic,
  i,
  em {
    --text-ital: 1;
  }
  b,
  strong {
    --text-wght: 475;
  }
  html {
    box-sizing: border-box;
    width: 100%;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    scroll-padding: 8rem;
    visibility: hidden;
    &.sr {
      visibility: visible;
    }
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
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-color: ${flat.light.background};
    color: ${flat.dark.paragraph};
    line-height: ${lineHeights.body};
    ${'' /* font-family: ${fonts.Montserrat}; */}
    font-family: "FF Meta VF", "Montserrat", Helvetica, Arial, sans-serif;
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
      ${'' /* background: ${flat.dark.background}; */}
      ${'' /* background: inherit; */}
      background: ${thumbBackground};
    }
    &::-webkit-scrollbar-thumb {
      background: ${flat.dark.link};
    }
  }
  body,
  div,
  p,
  th,
  td,
  ul,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  figcaption,
  cite,
  i,
  em,
  b,
  strong,
  button,
  p:first-line,
  p:first-child {
    font-family: "FF Meta VF", "Montserrat", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-variation-settings:
      'wght' var(--text-wght),
      'ital' var(--text-ital);
  }
  p {
    --text-ital: 0;
    margin-left: auto;
    margin-right: auto;
    ${'' /* max-width: 38rem; */}
    ${'' /* transition: all linear 0.2s; */}
    hyphens: auto;
  }
  /* Variations and variables */
  p {
    font-size: calc( var(--p-font-size-min) * 1rem );
    line-height: var(--p-line-height-min);
    ${mediaMin.phone`
      line-height: calc(( var(--p-line-height-min) * 1em ) + ( var(--p-line-height-max) - var(--p-line-height-min) ) * ((100vw - ( var(--bp-small) * 1em )) / ( var(--bp-large) - var(--bp-small) )));
    `}
    ${mediaMin.desktop`
      font-size: calc(( var(--p-font-size-min) * 1em ) + ( var(--p-font-size-max) - var(--p-font-size-min) ) * ((100vw - ( var(--bp-large) * 1em )) / ( var(--bp-xlarge) - var(--bp-large) )));
      line-height: var(--p-line-height-max);
    `}
    ${mediaMin.bigDesktop`
      font-size: calc( var(--p-font-size-max) * 1em );
      ${'' /* max-width: 42rem; */}
    `}
  }
  /* Generic header styles */
  h1, h2, h3, h4, h5, h6 {
    font-family: "FF Meta VF", "Montserrat", Helvetica, Arial, sans-serif;
    font-weight: normal;
    ${'' /* transition: all linear 0.2s;  */}
    --text-wght: calc( var(--p-vf-wght) * var(--h1-vf-wght-multiplier-s) );
  }
  h1 {
    /* Set --text-wght value multiplier */
    --text-wght: calc( var(--p-vf-wght) * var(--h1-vf-wght-multiplier-s) );
    --text-ital: 0;

    font-family: "FF Meta VF", "Montserrat", Helvetica, Arial, sans-serif;
    font-size: calc( var(--h1-font-size-min) * 1em );
    line-height: var(--h1-line-height-min);
    ${'' /* margin: 1rem auto; */}
    ${'' /* max-width: 50rem; */}
    ${mediaMin.phone`
      line-height: calc(( var(--h1-line-height-min) * 1em ) + ( var(--h1-line-height-max) - var(--h1-line-height-min) ) * ((100vw - ( var(--bp-small) * 1em )) / ( var(--bp-xlarge) - var(--bp-small) )));
      font-size: calc(( var(--h1-font-size-min) * 1em ) + ( var(--h1-font-size-max) - var(--h1-font-size-min) ) * ((100vw - ( var(--bp-small) * 1em )) / ( var(--bp-xlarge) - var(--bp-small) )));
    `}
    ${mediaMin.tablet`
      --text-wght: calc( var(--p-vf-wght) * var(--h1-vf-wght-multiplier-m) );
    `}
    ${mediaMin.desktop`
      --text-wght: calc( var(--p-vf-wght) * var(--h1-vf-wght-multiplier-l) );
      line-height: var(--h1-line-height-max);
    `}
    ${mediaMin.bigDesktop`
      font-size: calc( var(--h1-font-size-max) * 1em );
      line-height: var(--h1-line-height-max);
    `}
  }
  h2 {
    /* Set --text-wght value multiplier */
    --text-wght: calc( var(--p-vf-wght) * var(--h2-vf-wght-multiplier-s) );
    --text-ital: 0;

    font-family: "FF Meta VF", "Montserrat", Helvetica, Arial, sans-serif;
    font-size: calc( var(--h2-font-size-min) * 1em );
    line-height: var(--h2-line-height-min);
    ${'' /* margin: 1rem auto .5rem auto; */}
    ${'' /* max-width: 38rem; */}
    ${mediaMin.phone`
      line-height: calc(( var(--h2-line-height-min) * 1em ) + ( var(--h2-line-height-max) - var(--h2-line-height-min) ) * ((100vw - ( var(--bp-small) * 1em )) / ( var(--bp-xlarge) - var(--bp-small) )));
      font-size: calc(( var(--h2-font-size-min) * 1em ) + ( var(--h2-font-size-max) - var(--h2-font-size-min) ) * ((100vw - ( var(--bp-small) * 1em )) / ( var(--bp-xlarge) - var(--bp-small) )));
    `}
    ${mediaMin.tablet`
      --text-wght: calc( var(--p-vf-wght) * var(--h2-vf-wght-multiplier-m) );
    `}
    ${mediaMin.bigDesktop`
      --text-wght: calc( var(--p-vf-wght) * var(--h2-vf-wght-multiplier-l) );
      font-size: calc( var(--h2-font-size-max) * 1em );
      line-height: var(--h2-line-height-max);
    `}
  }
  h3 {
    /* Set --text-wght value multiplier */
    --text-wght: calc( var(--p-vf-wght) * var(--h3-vf-wght-multiplier-s) );
    --text-ital: 0;

    ${'' /* color: #444466; */}
    font-family: "FF Meta VF", "Montserrat", Helvetica, Arial, sans-serif;
    font-size: calc( var(--h2-font-size-min) * 1em );
    line-height: var(--h2-line-height-min);
    ${'' /* margin: 1rem auto .5rem auto; */}
    ${'' /* max-width: 38rem; */}
    ${'' /* text-align: center; */}
    ${mediaMin.phone`
      line-height: calc(( var(--h3-line-height-min) * 1em ) + ( var(--h3-line-height-max) - var(--h3-line-height-min) ) * ((100vw - ( var(--bp-small) * 1em )) / ( var(--bp-xlarge) - var(--bp-small) )));
      font-size: calc(( var(--h3-font-size-min) * 1em ) + ( var(--h3-font-size-max) - var(--h3-font-size-min) ) * ((100vw - ( var(--bp-small) * 1em )) / ( var(--bp-xlarge) - var(--bp-small) )));
    `}
    ${mediaMin.tablet`
      --text-wght: calc( var(--p-vf-wght) * var(--h3-vf-wght-multiplier-m) );
    `}
    ${mediaMin.bigDesktop`
      --text-wght: calc( var(--p-vf-wght) * var(--h3-vf-wght-multiplier-l) );
      font-size: calc( var(--h3-font-size-max) * 1em );
      line-height: var(--h3-line-height-max);
    `}
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    ${'' /* font-weight: 600; */}
    color: ${flat.dark.headline};
    margin: 0 0 10px 0;
  }
  ::selection {
    ${textSelectShadow};
  }
  #root {
    min-height: 100vh;
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
    vertical-align: middle;
    display: block;
    image-rendering: auto;
    image-rendering: high-quality;
  }
  svg {
    width: 100%;
    height: 100%;
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
      outline-color: ${flat.dark.button};
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
  p {
    margin: 0 0 15px 0;
  }
  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .fadeup {
    &-enter {
      opacity: 0.01;
      transform: translateY(20px);
      transition: opacity 300ms ${easing}, transform 300ms ${easing};
      &-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ${easing}, transform 300ms ${easing};
      }
    }
  }
  .fadedown {
    &-enter {
      opacity: 0.01;
      transform: translateY(-20px);
      transition: opacity 300ms ${easing}, transform 300ms ${easing};
      &-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ${easing}, transform 300ms ${easing};
      }
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
    color: ${flat.dark.tertiary};
    font-family: ${fonts.Montserrat};
    font-size: ${fontSizes.md};
    font-weight: normal;
  }
`

export default GlobalStyle
