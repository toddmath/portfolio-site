/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components'
// import { Link } from 'gatsby'

import { theme, mixins, media } from '@styles'

const {
  flat,
  navHeight,
  navScrollHeight,
  hamburgerWidth,
  hamBefore,
  hamAfter,
  hamBeforeActive,
  hamAfterActive,
  hamBefore2,
  hamAfter2,
  hamBeforeActive2,
  hamAfterActive2,
  easeInCirc,
  easeOutCirc,
  borderRadius,
} = theme

const { flexBetween, flexCenter } = mixins

const isUp = dir => dir === 'up'
const isNone = dir => dir === 'none'
const isDown = dir => dir === 'down'

export const Header = styled.header`
  --navCubicBenz: ${theme.easing};
  ${flexBetween};
  background-color: var(--background-secondary);
  position: fixed;
  top: 0;
  padding: 0px 50px;
  transition: border-bottom 0.35s var(--navCubicBenz), box-shadow 0.35s var(--navCubicBenz),
    height 0.35s var(--navCubicBenz), transform 0.35s var(--navCubicBenz),
    background-color 400ms ease !important;
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;

  border-bottom: none;
  box-shadow: ${({ scrollDirection }) =>
    isUp(scrollDirection) ? 'var(--elevation-medium)' : 'none'};

  height: ${({ scrollDirection }) => (isNone(scrollDirection) ? navHeight : navScrollHeight)};
  transform: ${({ scrollDirection }) =>
    isDown(scrollDirection) ? 'translateY(-100%)' : 'translateY(0px)'};

  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`

export const StyledNav = styled.nav`
  ${flexBetween};
  align-items: stretch;
  position: relative;
  width: 100%;
  background-color: var(--background-secondary);
  color: var(--interactive-normal);
  transition: color 400ms ease, background-color 400ms ease;
  counter-reset: item 0;
  box-sizing: border-box;
  justify-content: flex-end;
`

// export const StyledLogo = styled.div`
//   --length: 24px;
//   ${flexCenter};
//
//   a {
//     display: block;
//     /* color: ${flat.dark.link} !important; */
//     width: calc(var(--length) * 3);
//     height: calc(var(--length) * 1.75);
//
//     &:hover,
//     &:focus {
//       svg {
//         fill: ${flat.dark.transLink};
//       }
//     }
//
//     svg {
//       color: ${flat.dark.link};
//       transition: ${transition};
//       user-select: none;
//       stroke: ${flat.dark.link};
//     }
//   }
// `

export const StyledHamburger = styled.div`
  ${flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition: opacity 150ms linear, filter 150ms linear;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  z-index: 500;
  ${media.tablet`display: flex;`};
`

export const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${hamburgerWidth}px;
  height: 24px;
`

export const StyledHamburgerInner = styled.div`
  /* background-color: ${flat.dark.link}; */
  background-color: var(--text-link);
  position: absolute;
  width: ${hamburgerWidth}px;
  height: 2px;
  border-radius: ${borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;

  ${({ menuOpen }) =>
    menuOpen
      ? css`
          transition-delay: 0.12s;
          transform: rotate(225deg);
          transition-timing-function: ${easeOutCirc};

          &:before {
            width: 100%;
            top: 0;
            opacity: 0;
            transition: ${hamBeforeActive};
          }
          &:after {
            width: 100%;
            bottom: 0;
            transform: rotate(-90deg);
            transition: ${hamAfterActive};
          }
        `
      : css`
          transition-delay: 0s;
          transform: rotate(0deg);
          transition-timing-function: ${easeInCirc};

          &:before {
            width: 120%;
            top: -10px;
            opacity: 1;
            transition: ${hamBefore};
          }
          &:after {
            width: 80%;
            bottom: -10px;
            transform: rotate(0deg);
            transition: ${hamAfter};
          }
        `}

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: auto;
    right: 0;
    height: 2px;
    background-color: var(--text-link);
    border-radius: 4px;
  }
`

export const StyledLink = styled.div`
  display: grid;
  grid-template-columns: auto min-content min-content;
  gap: 2ch;

  ${media.tablet`display: none;`};
`

export const StyledButtonContainer = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: stretch;
  transition-delay: 100ms;
`
