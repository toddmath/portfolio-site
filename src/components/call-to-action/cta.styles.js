import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

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

export const CTAButton = styled(motion.button).attrs(() => ({
  mono: false,
  outline: false,
  as: 'a',
}))`
  ${waveHand};
  grid-row: 4 / span 1;
  grid-column: 2 / span 2;
  font-size: 1.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.15rem 1.75rem;
  background: var(--interactive-normal);
  color: var(--background-primary);
  border-radius: 0.25em;
  position: relative;
  perspective: 50em;
  box-shadow: var(--elevation-medium);
  transition: background 220ms ease-out, color 220ms ease-out, box-shadow 220ms ease-out;

  & > span {
    font-size: 1.3rem;
    display: block;
    user-select: none;
    transition: transform 220ms ease-out;
    /* transform-origin: center;
    transform: rotate(0deg); */
  }

  animation-name: waveHand;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-play-state: paused;

  &:hover,
  &:focus {
    background: var(--interactive-hover);
    color: var(--background-primary);
    box-shadow: var(--elevation-high);
  }

  &:hover > span,
  &:focus > span {
    /* transform: rotate(45deg); */
    transform-origin: center;
    animation-timing-function: linear;
    animation-name: waveHi;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: running;
  }
`
