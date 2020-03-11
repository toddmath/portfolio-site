import { createGlobalStyle } from 'styled-components'

import theme from './theme'
import media from './media'
import * as fontFamilies from './fonts'
import mixins from './mixins'

const { fontSizes, fonts, flat, lineHeights, transition, easing } = theme

const { textSelectShadow } = mixins

const GlobalStyle = createGlobalStyle`
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
  html {
    box-sizing: border-box;
    width: 100%;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    visibility: hidden;
    &.sr {
      visibility: visible;
    }
  }
  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
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
    font-family: ${fonts.Montserrat};
    font-size: ${fontSizes.lg};
    ${media.phablet`font-size: ${fontSizes.md};`}
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(3px) brightness(0.5);
        transition: ${transition};
        pointer-events: none;
        user-select: none;
      }
    }
    &::-webkit-scrollbar  {
      width: 0.25rem;
    }
    &::-webkit-scrollbar-track {
      background: ${flat.dark.background};
    }
    &::-webkit-scrollbar-thumb {
      background: ${flat.dark.link};
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${flat.dark.headline};
    margin: 0 0 10px 0;
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
  input, textarea {
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
  ul, ol {
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
