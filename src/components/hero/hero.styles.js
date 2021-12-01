import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { theme, mixins, media, Article } from '@styles'

const { transition } = theme
const { inlineLink, bigButton } = mixins

export const StyledContainer = styled(Article)`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  ${media.tablet`padding-top: 150px;`};
  margin: 0 auto;
`

export const HeroGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, 1fr [col-start]);
  grid-template-rows: 0.5fr auto auto 1fr;

  grid-template-areas:
    'overline overline overline overline overline overline overline overline overline overline overline overline'
    'title    title    title    title    title    title    title    title    title    title    .        .'
    'desc     desc     desc     desc     desc     desc     desc     desc     desc     desc     .        .'
    'cta      cta      .        .        .        .        .        .        .        .        .        .';

  /* row-gap: 1rem; */
  grid-row-gap: 1rem;
  grid-auto-flow: row;
  align-items: start;
  place-content: center;
  height: 100%;
  position: relative;

  /* DESCRIPTION, TITLE, SUBTITLE, BUTTON-CONTAINER */
  > div {
    justify-self: center;
    width: 100%;

    p {
      margin: 0;
    }
  }

  > div:nth-child(3) {
    width: 100%;
    max-width: 100%;
    padding-bottom: 3rem;
    line-height: 1.5;
  }

  > h1 {
    margin-bottom: 0;
    margin-top: 0;
    margin: 0;
    align-self: end;
  }

  div {
    width: 100%;
  }

  ${media.desktop`
    grid-template-areas:
      'overline overline overline overline overline overline overline overline overline overline overline overline'
      'title    title    title    title    title    title    title    title    title    title    title    .'
      'desc     desc     desc     desc     desc     desc     desc     desc     desc     desc     desc     .'
      'cta      cta      .        .        .        .        .        .        .        .        .        .';
  `}

  ${media.tablet`
    padding: 1rem;

    grid-template-areas:
      'overline overline overline overline overline overline overline overline overline overline overline overline'
      'title    title    title    title    title    title    title    title    title    title    title    title'
      'desc     desc     desc     desc     desc     desc     desc     desc     desc     desc     desc     .'
      'cta      cta      cta      .        .        .        .        .        .        .        .        .';
  `}

  ${media.thone`
    grid-template-areas:
        'overline overline overline overline overline overline overline overline overline overline overline overline'
        'title    title    title    title    title    title    title    title    title    title    title    title'
        'desc     desc     desc     desc     desc     desc     desc     desc     desc     desc     desc     desc'
        'cta      cta      cta      .        .        .        .        .        .        .        .        .';
  `}
`

export const StyledOverline = styled(motion.h1)`
  grid-area: overline;
  color: var(--header-secondary);
  margin: 15vh 0 1rem 0.3rem;
  /* font-size: calc(var(--p-font-size-max) * 1rem); */
  font-size: clamp(
    calc(var(--p-font-size-max) * 1rem),
    2.5vw,
    calc(var(--p-font-size-max) * 1.1rem)
  );
  text-transform: none;
  transition: ${transition};
  ${media.tablet`margin: 0 auto 0.8rem 0.8rem;`}
`

export const StyledDescription = styled(motion.div)`
  grid-area: desc;

  & > p {
    --wght: 'wght' 380;
    --opsz: 'opsz' 19;
    font-variation-settings: var(--wght), var(--opsz), var(--grad), var(--yaxs);
    font-size: clamp(1.2rem, 2.5vw, 1.4rem);
    letter-spacing: -0.03em;
  }

  a {
    ${inlineLink};
  }

  p {
    line-height: 1.6;
    margin-left: 0.3rem;
    ${media.tablet`margin-left: 0.5rem;`}
  }
`

export const StyledEmailLink = styled.a`
  ${bigButton};
  transition: ${transition};
`

const nameAnimation = css`
  @keyframes nameAnimation {
    0%,
    100% {
      --wght: 'wght' 400;
      --grad: 'GRAD' 400;
      --yaxs: 'YAXS' 400;
      font-variation-settings: var(--wght), var(--grad), var(--yaxs);
    }
    50% {
      --wght: 'wght' 400;
      --grad: 'GRAD' 850;
      --yaxs: 'YAXS' 800;
      font-variation-settings: var(--wght), var(--grad), var(--yaxs);
    }
  }
`

export const HeroTitles = styled.div`
  grid-area: title;
  align-self: center;
  padding-bottom: 1rem;
`

export const HeroName = styled.h2`
  ${nameAnimation};
  color: var(--header-secondary);
  align-self: center;
  --wght: 'wght' 400;
  --grad: 'GRAD' 400;
  --opsz: 'opsz' 20;
  font-variation-settings: var(--wght), var(--grad);
  margin: 0;
  transition: unset;
  letter-spacing: 0.003em;
  line-height: 1.1;
  font-size: clamp(2.8rem, 7vw, 4.2rem);
`

/*
font-size: 68px;
${media.desktop`font-size: 68px;`};
${media.tablet`font-size: 56px;`};
${media.phablet`font-size: 50px;`};
${media.phone`font-size: 46px;`};
*/

export const HeroSubTitle = styled.h3`
  color: var(--header-secondary);
  align-self: center;
  font-family: var(--font-sys);
  margin: 0 0;
  margin-left: 0.3rem;
  transition: unset;
  line-height: 1.1;

  font-size: clamp(2.3rem, 6vw, 3.4rem);

  letter-spacing: -0.048rem;
`

/*
font-size: 56px;
${media.desktop`font-size: 52px;`};
${media.tablet`
  font-size: 48px;
  margin: 0 auto 0 0.5rem;
`};
${media.phablet`font-size: 44px;`};
${media.phone`font-size: 40px;`};
${mediaMin.phone`
  line-height: calc(( var(--h3-line-height-min) * 1em ) + ( var(--h3-line-height-max) - var(--h3-line-height-min) ) * ((100vw - ( var(--bp-small) * 1em )) / ( var(--bp-xlarge) - var(--bp-small) )));
  font-size: calc(( var(--h3-font-size-min) * 1em ) + ( var(--h3-font-size-max) - var(--h3-font-size-min) ) * ((100vw - ( var(--bp-small) * 1em )) / ( var(--bp-xlarge) - var(--bp-small) )));
`}
${mediaMin.bigDesktop`
  font-size: calc( var(--h3-font-size-max) * 1em );
  line-height: calc(var(--h3-line-height-max) * 0.8);
`}
*/

const waveHand = css`
  @keyframes waveHi {
    0% {
      transform-origin: 70% 60%;
      transform: rotate(0deg) scale(1.3);
    }
    50% {
      transform-origin: 70% 60%;
      transform: rotate(90deg) scale(1.3);
    }
    100% {
      transform-origin: 70% 60%;
      transform: rotate(-15deg) scale(1.3);
    }
  }
`

export const CTA = styled(motion.button).attrs(() => ({
  mono: false,
  outline: false,
  as: 'a',
}))`
  ${waveHand};
  grid-area: cta;
  /* grid-row: 4 / span 1; */
  /* grid-column: 1 / span 2; */
  font-size: 1.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.15rem 1.5rem;
  background: var(--interactive-normal);
  color: var(--background-primary);
  border-radius: 0.25em;
  position: relative;
  perspective: 50em;
  box-shadow: var(--elevation-medium);

  & > span {
    font-size: 1.3rem;
    display: block;
    user-select: none;
  }

  animation-name: waveHand;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-play-state: paused;

  &:hover {
    background: var(--interactive-hover);
    color: var(--background-primary);
  }

  &:hover > span,
  &:focus > span,
  &:focus > span {
    transform-origin: center;
    animation-timing-function: linear;
    animation-name: waveHi;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: running;
  }

  ${media.tablet`
    grid-column: 1 / span 3;
  `}
`

export const ButtonContainer = styled.div`
  /* margin-top: 50px; */
  /* margin-left: 0.5rem; */
  ${media.tablet`
      /* margin-top: 2rem; */
      /* margin-left: 0.5rem; */
    `}
  /* ${media.thone`margin-top: 30px;`} */
  /* ${media.phone`margin-top: 20px;`} */
`
