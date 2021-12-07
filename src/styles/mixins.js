import { css, keyframes } from 'styled-components'

import theme from './theme'
import media from './media'

const {
  flat,
  borderRadius,
  gradients,
  link,
  transition,
  lineHeights,
  fontSizes: { sm, smish, md, lg },
} = theme

const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`

const buttonStyles = css`
  --maincolor: var(--interactive-normal);
  box-sizing: border-box;
  color: var(--maincolor);
  background-color: transparent;
  border: 1px solid var(--maincolor);
  border-radius: ${borderRadius};
  font-family: var(--font-variable);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${transition};

  &:hover,
  &:focus {
    background-color: var(--background-modifier-hovver);
    color: var(--interactive-hover);
  }

  &:active {
    background-color: var(--background-modifier-active);
    color: var(--interactive-active);
  }

  &:after {
    display: none !important;
  }
`

const figStyles = css`
  overflow: hidden;
  display: block;
  /* transition: ${transition}; */
  transition: filter 200ms ease;

  &:after,
  &:before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    border-radius: ${borderRadius};
    transition: 400ms ease;
  }

  &:before {
    z-index: 2;
  }

  &:after {
    z-index: 3;
  }

  &:hover,
  &:focus {
    filter: none;

    &:after,
    &:before {
      opacity: 0;
    }
  }
`

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  gridImplicit: css`
    display: grid;
    grid-auto-rows: 200px;
    grid-auto-columns: 200px;
    gap: 10px;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${transition};
    cursor: pointer;

    &:hover {
      color: var(--text-link);
      outline: 0;
    }

    &:focus {
      outline: 3px dotted var(--text-link);
    }
  `,

  inlineLink: css`
    --mainColor: var(--text-link);
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${transition};
    cursor: pointer;
    color: var(--mainColor);
    line-height: 18.8px;

    &:hover,
    &:focus,
    &:active {
      color: var(--mainColor);
      outline: 0;

      &:after {
        width: 100%;
      }
    }

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0;
      background-color: var(--mainColor);
      transition: ${transition};
      opacity: 0.7;
    }
  `,

  linkCenterUL: css`
    --ulHeight: 1px;
    --mainColor: var(--text-link);
    /* --textColor: ${flat.dark.paragraph}; */
    position: relative;
    color: var(--mainColor);
    text-decoration: none;
    cursor: pointer;
    /* line-height: calc(${lineHeights.body} - var(--ulHeight)); */
    line-height: inherit;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: var(--ulHeight);
      bottom: var(--ulHeight);
      left: 0;
      background: linear-gradient(
        to right,
        var(--mainColor) 0%,
        var(--mainColor) 5px,
        transparent
      );
      visibility: hidden;
      transform: scaleX(0) scaleY(3.5);
      transition: all 300ms ease-out 0s;
    }

    &:hover,
    &:focus {
      color: var(--interactive-hover);

      &:before {
        visibility: visible;
        transform: scaleX(1.05) scaleY(1);
      }
    }
  `,

  smallButton: css`
    padding: 0.75rem 1rem;
    font-size: ${smish};
    ${buttonStyles};
  `,

  bigButton: css`
    padding: 1.25rem 1.75rem;
    font-size: ${sm};
    ${buttonStyles};
  `,

  btnSm: css`
    padding: 0.75em 1em;
    font-size: ${smish};
    ${buttonStyles};
  `,

  btnMd: css`
    padding: 1em 1.25em;
    font-size: ${sm};
    ${buttonStyles};
  `,

  btnLg: css`
    padding: 1.25em 1.75em;
    font-size: ${md};
    ${buttonStyles};
  `,

  ripple: css`
    --size: 20px;
    width: var(--size);
    height: var(--size);
    position: absolute;
    ${gradients.blueTeal};
    display: block;
    content: '';
    border-radius: 9999px;
    opacity: 1;
    animation: 1.2s ease 1 forwards ${rippleEffect};
  `,

  rippleButton: css`
    ${buttonStyles};
    font-size: ${sm};
    padding: 1em 1rem;
    line-height: 1.2;
    overflow: hidden;
    position: relative;

    > .content {
      position: relative;
      z-index: 2;
    }
  `,

  sidePadding: css`
    padding: 0;
  `,

  sectionPadding: css`
    padding: 164.485px 76.244px;
    ${media.bigDesktop`padding: 124.485px 29.124px;`};
    ${media.desktop`padding: 100px 29.124px;`};
    ${media.tablet`padding: 100px 29.124px;`};
    ${media.thone`padding: 62.83px 29.124px;`};
    ${media.phablet`padding: 38.832px 18px;`};
  `,

  articlePadding: css`
    padding: 165px 76.25px;
    ${media.bigDesktop`padding: 124.5px 29px;`};
    ${media.desktop`padding: 100px 29px;`};
    ${media.tablet`padding: 100px 29px;`};
    ${media.thone`padding: 63px 29px;`};
    ${media.phablet`padding: 39px 18px;`};
  `,

  boxShadow: css`
    --shadowColor: ${flat.dark.shadow};
    --shadowBlur: -15px;
    --shadowSpread: 30px;
    /* box-shadow: 0 10px var(--shadowSpread) var(--shadowBlur) var(--shadowColor); */
    box-shadow: var(--elevation-medium);
    transition: ${transition};

    &:hover,
    &:focus {
      box-shadow: var(--elevation-high);
      /* box-shadow: 0 20px var(--shadowSpread) var(--shadowBlur) var(--shadowColor); */
    }
  `,

  sectionCounter: css`
    margin: 0 auto 20px;
    position: relative;
    font-size: ${lg};
    counter-increment: item 1;
    ${media.thone`
      margin: 0 auto 10px;
      font-size: ${md};
    `};
    ${media.tiny`
      font-size: ${smish};
    `};

    &:before {
      display: block;
      content: '0' counter(item) '.';
      color: var(--header-secondary);
      font-size: ${md};
      margin-bottom: 5px;
    }
  `,

  img: css`
    --dimension: 100%;
    width: var(--dimension);
    z-index: 1;
    display: block;
    margin: auto;
    height: auto;
    max-height: var(--dimension);
    max-width: var(--dimension);
    image-rendering: auto;
  `,

  nashville: css`
    filter: sepia(0.2) contrast(1.2) brightness(1.05) saturate(1.2);
    ${figStyles};
    &:before {
      background: ${link('0.6')};
      mix-blend-mode: darken;
    }
    &:after {
      background: rgba(247, 176, 153, 0.161);
      mix-blend-mode: lighten;
    }
  `,

  inkwell: css`
    filter: sepia(0.3) contrast(1.1) brightness(1.05) grayscale(1);
    ${figStyles};
  `,

  willow: css`
    filter: grayscale(0.5) contrast(0.95) brightness(0.9);
    ${figStyles};
    &:before {
      mix-blend-mode: overlay;
    }
    &:after {
      background-color: ${flat.dark.transLink};
      mix-blend-mode: color;
    }
  `,

  largeShadow: css`
    box-shadow: -16px 0px 30px -18px ${flat.dark.headerShadow};
  `,

  textSelectShadow: css`
    --highlite: var(--text-link);
    --textFG: var(--text-normal);
    position: relative;
    color: inherit;
    background: none repeat scroll 0% 0% transparent;
    text-shadow: 0 0 0 var(--textFG), 0 0 0 var(--highlite),
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
      0.0975em 0.0975em 0 var(--highlite), 0.1em 0.1em 0 var(--highlite);
  `,
}

export default mixins
