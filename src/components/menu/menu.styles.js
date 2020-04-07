/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import { Link } from 'gatsby'

import { theme, mixins, media } from '@styles'
import { Button } from '@components'

const {
  flat,
  transition,
  fontSizes,
  fonts: { SFMono },
} = theme

const {
  flexCenter,
  flexBetween,
  link,
  inlineLink,
  linkCenterUL,
  largeShadow,
  sectionCounter,
} = mixins

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
  transform: translateX(${({ menuOpen }) => (menuOpen ? 0 : 100)}vw);
  visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block;`};
`

export const Sidebar = styled.div`
  ${flexCenter};
  ${largeShadow};
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${flat.dark.cardBackground};
  padding: 1em;
  width: 32vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${SFMono};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 45vw;`};
  ${media.tiny`padding: 10px; width: 75vw;`};
`

export const AsideNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${flat.dark.background};
  text-align: start;
  width: 100%;
  height: 100%;
`

export const NavList = styled.ol`
  width: 100%;
  margin-top: 4em !important;
  height: 12em;
  li {
    height: 33%;
  }
`

export const AsideNavList = styled.ol`
  width: 100%;
  margin-top: 4em !important;
  height: 12em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li {
    flex-basis: 33%;
    flex-grow: 1;
    flex-shrink: 1;
  }
`

export const AsideNavItem = styled.li`
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
  &:before {
    display: inline-block;
    content: '0' counter(item) '.';
    color: var(--textColor);
    font-size: ${fontSizes.md};
    margin-left: 1em;
    margin-right: -1.6em;
    background: transparent;
  }
  &:hover {
    a {
      /* color: var(--mainColor); */
      color: var(--altColor);
      background-position: 100%;
      transform: translateX(1.6rem);
    }
    /* &:before {
      color: var(--altColor);
    } */
  }
`

export const AsideNavLink = styled(Link)`
  --mainColor: ${flat.dark.cardBackground};
  --textColor: ${flat.dark.background};
  --fontSize: ${fontSizes.lg};
  --linkBenz: cubic-bezier(0.23, 1, 0.32, 1);
  ${link};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  line-height: calc(var(--fontSize) + 0.5em);
  text-transform: uppercase;
  padding: 0.4rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--textColor) 50%
  );
  background-size: 240%;
  color: var(--textColor);
  transition: all 0.8s var(--linkBenz);
`

export const StyledResumeButton = styled(Button).attrs(() => ({
  outline: false,
  as: 'a',
  responsive: true,
  target: '_blank',
  rel: 'nofollow noopener noreferrer',
}))`
  --bg: ${flat.dark.button};
  --fg: ${flat.dark.buttonText};
  box-sizing: border-box;
  padding: 0.5em 0;
  background: transparent;
  color: var(--bg);
  border: 1px solid var(--bg);
  margin: 0 1em 1em 1em;
  max-width: 100%;
  width: auto;
  text-align: center;
  border-radius: ${theme.borderRadius};
  &:hover {
    background: var(--bg);
    color: var(--fg);
  }
`
