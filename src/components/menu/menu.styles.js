import styled from 'styled-components'
import { theme, mixins, media } from '@styles'
import { Link } from 'gatsby'

const {
  flat,
  transition,
  fonts: { SFMono },
} = theme

const { flexCenter, flexBetween, link, smallButton, largeShadow, sectionCounter } = mixins

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block;`};
`

export const Sidebar = styled.aside`
  ${flexCenter};
  ${largeShadow};
  flex-direction: column;
  background-color: ${flat.dark.cardBackground};
  padding: 50px;
  width: 45vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${SFMono};
  ${media.thone`padding: 25px; width: 50vw;`};
  ${media.phablet`width: 60vw;`};
  ${media.tiny`padding: 10px; width: 75vw;`};
`

export const NavLinks = styled.nav`
  ${flexBetween};
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: ${flat.dark.cardParagraph};
`

export const NavList = styled.ol`
  width: 100%;
`

export const NavItem = styled.li`
  ${sectionCounter};
`

export const NavLink = styled(Link)`
  ${link};
  padding: 3px 20px 20px;
  width: 100%;
`

export const Resume = styled.a`
  ${smallButton};
  padding: 18px 50px;
  margin: 10% auto 0;
  width: max-content;
`
