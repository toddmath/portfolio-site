/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

import { theme, mixins, media } from '@styles'
import { Button } from '@components'

export const variants = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: 'auto',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    pointerEvents: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const { flat, transition, fontSizes, fonts } = theme

const { flexCenter, link } = mixins

export const StyledContainer = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${transition};
  ${({ menuOpen }) =>
    menuOpen
      ? css`
          transform: translateX(0);
          visibility: visible;
        `
      : css`
          transform: translateX(100vw);
          visibility: hidden;
        `}
  display: none;
  ${media.tablet`display: block;`};
`

export const Sidebar = styled.div`
  ${flexCenter};
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--background-secondary);
  /* background-color: ${flat.dark.cardBackground}; */
  padding: 2em;
  /* width: 32vw; */
  width: clamp(200px, 220px, 75vw);
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: var(--font-sys);
  box-shadow: var(--elevation-high);
  /* ${media.thone`padding: 25px;`};
  ${media.phablet`width: 45vw;`};
  ${media.tiny`
    padding: 10px;
    width: 75vw;
  `}; */
`

// * Aside Navbar
export const AsideNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--interactive-normal);
  text-align: start;
  width: 100%;
  height: 100%;
  margin-top: 3em;
`

// export const NavList = styled.ol`
//   width: 100%;
//   margin-top: 4em !important;
//   height: 12em;
//   li {
//     height: 33%;
//   }
// `

// * Nav List
export const AsideNavList = styled.ol`
  font-family: var(--font-sys);
  /* margin-top: 4em !important; */

  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 2em;

  width: 100%;
  /* height: 12em; */

  /* li {
    flex-basis: 33%;
    flex-grow: 1;
    flex-shrink: 1;
  } */
`

// * Nav Link Item
export const AsideNavItem = styled(motion.li)`
  --mainColor: ${flat.dark.cardBackground};
  --altColor: ${flat.dark.button};
  --textColor: ${flat.dark.background};
  display: list-item;
  position: relative;
  font-size: ${fontSizes.lg};
  counter-increment: item 1;
  width: 100%;
  ${media.thone`font-size: ${fontSizes.md};`}
  ${media.tiny`font-size: ${fontSizes.smish};`}
  font-family: var(--font-sys);

  &:before {
    display: inline-block;
    content: '0' counter(item) '.';
    color: var(--interactive-normal);
    /* color: var(--textColor); */
    font-size: ${fontSizes.md};
    /* margin-left: 1em; */
    margin-right: -1.4em;
    /* background: var(--background-secondary); */
    background: transparent;
  }
`

// * Nav Item Link
export const AsideNavLink = styled(motion.custom(Link))`
  --fontSize: ${fontSizes.lg};
  ${link};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  line-height: calc(var(--fontSize) + 0.5em);
  padding: 0.4rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--interactive-hover) 50%
  );
  background-size: 220%;
  color: var(--interactive-normal);
  transition: unset;
  border-radius: 0.25em;

  &:hover {
    color: var(--interactive-hover);
  }
`

// export const AsideNavLink = styled(Link)`
//   --mainColor: ${flat.dark.cardBackground};
//   --textColor: ${flat.dark.background};
//   --fontSize: ${fontSizes.lg};
//   --linkBenz: cubic-bezier(0.23, 1, 0.32, 1);
//   ${link};
//   position: relative;
//   text-decoration: none;
//   cursor: pointer;
//   background: transparent;
//   line-height: calc(var(--fontSize) + 0.5em);
//   /* text-transform: uppercase; */
//   padding: 0.4rem 2rem;
//   background-image: linear-gradient(
//     120deg,
//     transparent 0%,
//     transparent 50%,
//     var(--interactive-hover) 50%
//   );
//   background-size: 220%;
//   color: var(--interactive-normal);
//   transition: all 0.8s var(--linkBenz);
// `

export const StyledResumeButton = styled(Button).attrs(() => ({
  outline: false,
  as: 'a',
  responsive: true,
  target: '_blank',
  rel: 'nofollow noopener noreferrer',
}))`
  /* --bg: ${flat.dark.button};
  --fg: ${flat.dark.buttonText}; */
  box-sizing: border-box;
  padding: 0.5em 0;
  /* margin: 0 1em 1em 1em; */
  max-width: 100%;
  width: auto;
  text-align: center;
  border-radius: ${theme.borderRadius};

  background-color: var(--interactive-normal);
  color: var(--background-secondary);

  &:hover {
    background-color: var(--interactive-hover);
    color: var(--background-secondary);
  }

  /* background: transparent; */
  /* color: var(--bg); */
  /* border: 1px solid var(--bg); */
  /* &:hover {
    background: var(--bg);
    color: var(--fg);
  } */
`
