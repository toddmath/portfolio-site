import { css, keyframes } from 'styled-components'

import theme from './theme'
import media, { mediaReducedMotion, mediaRetina } from './media'
// import { createEnum } from '@utils'

const {
  flat,
  borderRadius,
  gradients,
  link,
  transition,
  lineHeights,
  fontSizes,
  easing,
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
  --mainColor: var(--interactive-normal);
  /* --mainColor: ${flat.dark.button}; */
  box-sizing: border-box;
  color: var(--mainColor);
  background-color: transparent;
  border: 1px solid var(--mainColor);
  border-radius: ${borderRadius};
  font-family: var(--font-code);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${transition};
  &:hover,
  &:focus {
    background-color: var(--background-modifier-hover);
    color: var(--interactive-hover);
  }
  &:active {
    background-color: var(--background-modifier-active);
    color: var(--interactive-active);
  }
  /* &:hover, */
  /* &:focus, */
  /* &:active { */
    /* background-color: var(--background-modifier-hover); */
    /* background-color: var(--mainColor); */
    /* color: ${flat.dark.buttonText}; */
  /* } */
  &:after {
    display: none !important;
  }
`

const figStyles = css`
  overflow: hidden;
  display: block;
  transition: filter 200ms ${easing};

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
    /* transition: ${transition}; */
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

const { dark } = flat

/**
 * Creates nice looking css text shadow style prop.
 * @param {string} [hl=theme.flat.dark.highlight] Highlight color.
 * @param {string} [tx=theme.flat.dark.paragraph] Text color.
 */
function handleTextShadow(hl = dark.highlight, tx = dark.paragraph) {
  const styles = [`0 0 0 ${tx}`, `0 0 0 ${hl}`]
  for (let i = 250, em = i / 1e5; i <= 1e4; i += 250) {
    styles.push(`${em}em ${em}em`)
  }
  return `text-shadow: ${styles.join(',')};`
}

export const consoleStyles = `color: inherit;font-size: 60px;background: none repeat scroll 0% 0% transparent;${handleTextShadow()}`

export const smallConsoleStyles = `color: inherit;font-size: 20px;`

export const octacatSrc = css`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid meet' viewBox='0 0 800 665'%3E%3Cg transform='translate(0.000000,665.000000) scale(0.100000,-0.100000)'%0Afill='%23ffffff' stroke='none'%3E%3Cpath d='M2126 6498 c-19 -30 -70 -204 -87 -298 -17 -95 -17 -356 -1 -435 7%0A-33 22 -89 33 -124 l20 -64 -29 -31 c-100 -104 -218 -313 -270 -476 -47 -150%0A-62 -260 -62 -469 0 -264 29 -488 88 -678 l20 -63 -317 0 c-344 0 -541 -10%0A-811 -41 -180 -20 -447 -63 -457 -72 -20 -21 26 -19 168 4 180 30 384 54 587%0A69 208 15 616 24 734 15 l108 -7 20 -46 c42 -94 43 -92 -46 -92 -325 0 -956%0A-83 -1344 -176 -214 -51 -220 -53 -214 -67 4 -10 29 -7 112 15 343 90 878 171%0A1277 193 61 3 144 8 186 11 l76 6 68 -104 c156 -235 394 -413 706 -528 159%0A-59 439 -123 631 -146 l57 -6 -59 -55 c-75 -69 -135 -164 -176 -278 -30 -85%0A-34 -91 -75 -112 -137 -69 -373 -90 -514 -46 -142 45 -255 140 -366 309 -38%0A57 -96 127 -136 165 -129 121 -306 187 -429 160 -126 -28 -102 -98 63 -185%0A132 -69 218 -160 313 -328 131 -230 231 -338 385 -414 127 -62 186 -76 353%0A-81 127 -5 225 3 336 24 l29 6 -6 -394 -7 -394 -30 -62 c-36 -72 -68 -101%0A-161 -149 -69 -34 -89 -55 -89 -93 0 -37 37 -51 136 -51 228 0 412 100 476%0A258 22 56 23 67 28 542 6 456 7 489 27 547 21 63 57 123 74 123 6 0 9 -266 7%0A-728 l-3 -727 -23 -43 c-12 -23 -42 -56 -65 -73 -48 -35 -66 -62 -67 -101 -1%0A-89 145 -91 313 -7 71 36 126 85 165 147 63 99 62 84 62 877 0 547 3 724 12%0A733 16 16 65 15 75 -1 4 -6 10 -349 13 -762 l5 -750 24 -48 c52 -105 153 -186%0A291 -233 135 -45 220 -22 220 62 0 19 -14 39 -51 73 -58 52 -82 93 -98 169%0A-14 68 -16 1402 -1 1402 14 0 56 -77 76 -140 15 -48 18 -114 24 -530 5 -464 6%0A-476 28 -532 63 -157 248 -258 471 -258 95 0 131 15 131 53 0 36 -26 64 -92%0A99 -72 38 -127 103 -158 185 -21 56 -22 78 -30 633 -9 640 -6 618 -81 770 -32%0A64 -60 102 -118 161 l-77 76 106 12 c258 29 567 111 752 200 245 116 445 307%0A549 524 14 28 30 47 40 47 69 0 410 -24 573 -40 343 -35 712 -98 978 -168 83%0A-22 108 -25 112 -15 6 14 0 16 -214 67 -368 89 -866 157 -1267 173 -89 3 -167%0A9 -172 13 -7 4 -4 26 10 67 l20 61 147 7 c157 8 508 1 737 -15 230 -17 480%0A-48 739 -93 5 -1 10 3 13 10 5 14 -43 24 -267 57 -325 48 -462 57 -923 63%0A-375 5 -437 8 -433 20 11 29 46 221 58 323 7 59 13 219 13 365 0 212 -3 276%0A-18 349 -53 259 -159 474 -334 672 -48 55 -52 64 -44 87 6 15 18 77 27 139 27%0A182 10 369 -52 578 -38 125 -42 130 -117 130 -191 -1 -498 -118 -773 -295%0Al-87 -56 -126 25 c-256 51 -356 60 -671 61 -232 0 -324 -4 -430 -18 -134 -19%0A-323 -54 -411 -78 -45 -12 -46 -12 -105 28 -300 203 -627 333 -835 333 -50 0%0A-61 -3 -73 -22z m1390 -1694 c290 -21 615 -21 909 1 428 31 649 14 802 -63%0A175 -89 351 -316 397 -512 9 -36 16 -111 16 -170 0 -204 -33 -368 -103 -515%0A-142 -295 -423 -438 -947 -484 -334 -30 -942 -22 -1239 14 -554 69 -876 270%0A-995 621 -39 117 -51 200 -51 359 0 131 3 159 24 220 32 95 80 180 153 270%0A129 162 258 232 488 268 64 10 348 5 546 -9z m-1626 -1869 c16 -19 6 -45 -18%0A-45 -23 0 -56 35 -47 49 9 16 51 13 65 -4z m104 -77 c46 -20 46 -68 1 -68 -33%0A0 -63 44 -45 65 15 18 13 18 44 3z m149 -159 c37 -51 -8 -94 -55 -52 -18 16%0A-25 63 -11 77 14 13 46 1 66 -25z m141 -172 c16 -21 18 -32 10 -45 -28 -44%0A-94 -9 -94 49 0 28 2 30 32 27 20 -2 38 -13 52 -31z m166 -144 c22 -29 22 -41%0A-2 -56 -39 -25 -116 35 -88 68 20 24 66 18 90 -12z m626 -9 c-3 -9 -6 -27 -6%0A-40 0 -26 -27 -33 -48 -12 -27 27 -6 68 36 68 18 0 23 -4 18 -16z m-410 -55%0Ac24 -27 8 -53 -35 -57 -37 -4 -71 20 -71 49 0 34 77 40 106 8z m222 5 c26 -18%0A27 -27 6 -48 -18 -19 -75 -21 -92 -4 -44 44 32 90 86 52z'/%3E%3Cpath d='M3021 4329 c-184 -94 -201 -463 -29 -602 51 -41 127 -48 186 -18 150%0A77 197 381 83 538 -69 95 -156 125 -240 82z m24 -114 c30 -29 32 -64 5 -93%0A-26 -28 -67 -28 -97 0 -30 28 -29 63 2 93 31 32 59 32 90 0z'/%3E%3Cpath d='M4819 4327 c-169 -90 -202 -422 -56 -576 165 -174 398 40 357 329%0A-17 122 -74 215 -155 251 -54 25 -93 24 -146 -4z m51 -117 c24 -24 25 -48 4%0A-78 -32 -46 -114 -17 -114 40 0 26 36 58 65 58 14 0 34 -9 45 -20z'/%3E%3Cpath d='M3921 3643 c-12 -10 -24 -34 -27 -54 -5 -28 -1 -41 18 -63 50 -58%0A148 -22 148 55 0 65 -88 104 -139 62z'/%3E%3Cpath d='M3775 3380 c-11 -18 39 -93 83 -125 39 -27 52 -30 116 -30 63 0 78 4%0A115 28 46 31 81 80 81 115 0 36 -32 26 -58 -18 -26 -46 -84 -80 -137 -80 -53%0A0 -111 34 -137 80 -22 38 -50 51 -63 30z'/%3E%3C/g%3E%3C/svg%3E%0A");
`

export const wrapper = css`
  margin-inline: auto;
  padding-inline: 1rem;
  max-width: 60rem;
`

/** composable style mixins. */
const mixins = Object.freeze({
  getSpringConfig: isHovered => ({
    tension: isHovered ? 550 : 450,
    friction: isHovered ? 45 : 30,
    mass: isHovered ? 5 : 3,
  }),
  position: {
    absolute: css`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    `,
  },
  noPrint: css`
    @media print {
      display: none;
    }
  `,
  parallax: {
    layer: css`
      position: relative;
      min-height: 100%;
      height: 100vh;
      transform-style: preserve-3d;
    `,
  },
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
    grid-auto-flow: column;
  `,
  retina: mediaRetina`text-rendering: geometricPrecision;`,
  reducedMotion: mediaReducedMotion`scroll-behavior: auto;`,
  blur: css`
    filter: blur(3px) grayscale(60%) saturate(2);
    pointer-events: none;
    user-select: none;
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
    ${
      '' /* &:hover,
    &:active,
    &:focus {
      color: ${flat.dark.link};
      outline: 0;
    } */
    }
    &:hover {
      color: var(--text-link);
      /* color: ${flat.dark.tertiary}; */
      outline: 0;
    }
    &:focus {
      outline: 3px dotted var(--text-link);
      /* outline: 3px dotted ${flat.dark.tertiary}; */
    }
  `,

  inlineLink: css`
    /* --mainColor: ${flat.dark.link}; */
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
    --wght: 450;
    --grad: 400;
    --yaxs: 400;
    --ulHeight: 1px;
    --mainColor: var(--text-link);
    /* --mainColor: ${flat.dark.link}; */
    /* --textColor: ${flat.dark.paragraph}; */
    font-variation-settings: 'wght' var(--wght), 'GRAD' var(--grad), 'YAXS' var(--yaxs);
    position: relative;
    /* color: var(--interactive-normal); */
    color: var(--mainColor);
    text-decoration: none;
    cursor: pointer;
    line-height: inherit;
    /* font-size-adjust: inherit; */
    transition: font-variation-settings 300ms ease-out, color 300ms ease-out;
    /* line-height: calc(${lineHeights.body} - var(--ulHeight)); */

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: var(--ulHeight);
      bottom: calc(var(--ulHeight) * 4);
      /* bottom: var(--ulHeight); */
      left: 0;
      /* background: linear-gradient(to right, var(--interactive-hover) 0%, var(--interactive-hover) 5px, transparent); */
      background: linear-gradient(
        to right,
        var(--mainColor) 0%,
        var(--mainColor) 40%,
        transparent
      );
      visibility: hidden;
      transform: scaleX(0) scaleY(3.5);
      transition: all 300ms ease-out 0s;
    }

    &:hover,
    &:focus {
      /* color: var(--interactive-hover); */
      --grad: 640;
      --wght: 450;
      --yaxs: 500;
      color: var(--interactive-hover);
      /* color: var(--mainColor); */

      &:before {
        background: linear-gradient(
          to right,
          var(--interactive-hover) 0%,
          var(--interactive-hover) 40%,
          transparent
        );
        visibility: visible;
        transform: scaleX(1) scaleY(1);
      }
    }
  `,

  smallButton: css`
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smish};
    ${buttonStyles};
  `,

  bigButton: css`
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.sm};
    ${buttonStyles};
  `,

  btnSm: css`
    padding: 0.75em 1em;
    font-size: ${fontSizes.smish};
    ${buttonStyles};
  `,

  btnMd: css`
    padding: 1em 1.25em;
    font-size: ${fontSizes.sm};
    ${buttonStyles};
  `,

  btnLg: css`
    padding: 1.25em 1.75em;
    font-size: ${fontSizes.md};
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
    font-size: ${fontSizes.sm};
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
    /* TODO: mess with different elevation steps */
    box-shadow: var(--elevation-medium);
    /* box-shadow: 0 10px var(--shadowSpread) var(--shadowBlur) var(--shadowColor); */
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
    font-size: ${fontSizes.lg};
    counter-increment: item 1;
    ${media.thone`
      margin: 0 auto 10px;
      font-size: ${fontSizes.md};
    `};
    ${media.tiny`
      font-size: ${fontSizes.smish};
    `};

    &:before {
      display: block;
      content: '0' counter(item) '.';
      color: var(--header-secondary);
      /* color: ${flat.dark.tertiary}; */
      font-size: ${fontSizes.md};
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

  image: {
    layout: css`
      --dimension: 100%;
      width: var(--dimension);
      margin: auto;
      height: auto;
      min-width: var(--dimension);
      min-height: var(--dimension);
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
        background-color: var(--background-accent);
        mix-blend-mode: color;
      }
    `,

    brooklyn: css`
      filter: sepia(0.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);

      &:before {
        background: rgba(127, 187, 227, 0.2);
        content: '';
        mix-blend-mode: overlay;
      }
    `,

    hefe: css`
      filter: sepia(0.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);

      &:before {
        background: radial-gradient(
          circle closest-corner,
          transparent 0,
          rgba(0, 0, 0, 0.25) 100%
        );
        content: '';
        mix-blend-mode: multiply;
      }
    `,

    lark: css`
      filter: sepia(0.25) contrast(1.2) brightness(1.3) saturate(1.25);
    `,

    lofi: css`
      filter: saturate(1.1) contrast(1.5);
    `,

    moon: css`
      filter: brightness(1.4) contrast(0.95) saturate(0) sepia(0.35);
    `,

    sutro: css`
      filter: sepia(0.4) contrast(1.2) brightness(0.9) saturate(1.4) hue-rotate(-10deg);

      &:before {
        background: radial-gradient(
          circle closest-corner,
          transparent 50%,
          rgba(0, 0, 0, 0.5) 90%
        );
        content: '';
        mix-blend-mode: darken;
      }
    `,

    xproII: css`
      filter: sepia(0.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);

      &:before {
        background: radial-gradient(
          circle closest-corner,
          rgba(0, 91, 154, 0.35) 0,
          rgba(0, 0, 0, 0.65) 100%
        );
        content: '';
        mix-blend-mode: multiply;
      }
    `,
  },

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
    --hl: ${flat.dark.highlight};
    --tx: ${flat.dark.paragraph};
    position: relative;
    color: inherit;
    background: none repeat scroll 0% 0% transparent;
    ${handleTextShadow(`var(--hl)`, `var(--tx)`)};
  `,
})

export default mixins
