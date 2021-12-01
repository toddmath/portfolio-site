/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { Button } from '@components'
import { theme, mixins, media, styledTheme } from '@styles'

const {
  flat,
  fonts: { SFMono },
  transition,
  navHeight,
  navScrollHeight,
  hamburgerWidth,
  easeInCirc,
  easeOutCirc,
  borderRadius,
} = theme

const { flexBetween, flexCenter } = mixins

const backgroundColor = styledTheme([flat.dark.background, flat.dark.cardBackground])

const isUp = dir => dir === 'up'
const isNone = dir => dir === 'none'
const isDown = dir => dir === 'down'

export const ResumeButton = styled(Button).attrs({
  size: 'medium',
  href: '/resume.pdf',
})`
  height: 100%;
  margin: 0;
`

export const StyledContainer = styled.header`
  --navCubicBenz: ${theme.easing};
  ${flexBetween};
  /* background-color: ${backgroundColor}; */
  background-color: var(--background-secondary);
  position: fixed;
  top: 0;
  padding: 0px 50px;
  transition: border-bottom 0.35s var(--navCubicBenz), box-shadow 0.35s var(--navCubicBenz), height 0.35s var(--navCubicBenz), transform 0.35s var(--navCubicBenz), background 0s var(--navCubicBenz) !important;
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  ${({ scrollDirection }) =>
    isUp(scrollDirection)
      ? css`
          box-shadow: var(--elevation-medium);
          /* box-shadow: 0 8px 8px -8px ${flat.dark.headerShadow}; */
          /* border-bottom: 1px solid ${flat.dark.headerBorder}; */
          border-bottom: none;
        `
      : css`
          box-shadow: none;
          border-bottom: none;
        `}
  height: ${({ scrollDirection }) =>
    isNone(scrollDirection) ? navHeight : navScrollHeight};
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
  /* background-color: ${backgroundColor}; */
  background-color: var(--background-secondary);
  /* color: ${flat.dark.paragraph}; */
  color: var(--text-normal);
  font-family: ${SFMono};
  counter-reset: item 0;
  box-sizing: border-box;
  justify-content: flex-end;
`

export const StyledLogo = styled.div`
  --length: 24px;
  ${flexCenter};
  a {
    display: block;
    /* color: ${flat.dark.link} !important; */
    color: var(--text-link);
    width: calc(var(--length) * 3);
    height: calc(var(--length) * 1.75);
    &:hover,
    &:focus {
      svg {
        /* fill: ${flat.dark.transLink}; */
        fill: currentColor;
      }
    }
    svg {
      /* color: ${flat.dark.link}; */
      color: var(--text-link);
      transition: ${transition};
      user-select: none;
      stroke: currentColor;
      /* stroke: ${flat.dark.link}; */
    }
  }
`

export const StyledHamburger = styled.div`
  ${flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition: opacity 150ms linear, filter 150ms linear;
  text-transform: none;
  /* color: inherit; */
  /* color: var(--text-link); */
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
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: auto;
    right: 0;
    height: 2px;
    /* background-color: ${flat.dark.link}; */
    background-color: var(--text-link);
    border-radius: 4px;
  }

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
            transition: ${hamBeforeActive2};
          }
          &:after {
            width: 100%;
            bottom: 0;
            transform: rotate(-90deg);
            transition: ${hamBeforeActive2};
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
            transition: ${hamBefore2};
          }
          &:after {
            width: 80%;
            bottom: -10px;
            transform: rotate(0);
            transition: ${hamAfter2};
          }
        `}
`

export const StyledLink = styled.div`
  display: flex;
  align-items: stretch;
  ${media.tablet`display: none;`};
`

// export const StyledList = styled.ol`
//   ${flexBetween};
// `

// export const StyledListItem = styled.li`
//   margin: 0 10px;
//   position: relative;
//   font-size: ${smish};
//   counter-increment: item 1;
//   &:before {
//     content: '0' counter(item) '.';
//     text-align: right;
//     color: ${flat.dark.link};
//     font-size: ${xs};
//   }
// `

// export const StyledListLink = styled(Link)`
//   padding: 12px 10px 12px 4px;
// `

export const StyledButtonContainer = styled.div`
  display: inline-flex;
  align-items: stretch;
  transition-delay: ${props => `${props.$delay}ms` || '100ms'};
  height: 100%;
`
