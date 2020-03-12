import styled from 'styled-components'
import { Link } from 'gatsby'
import { theme, mixins, media } from '@styles'

const {
  flat,
  fontSizes: { smish, xs },
  fonts: { SFMono },
  transition,
  navHeight,
  navScrollHeight,
  hamburgerWidth,
  hamBefore2,
  hamAfter2,
  hamBeforeActive2,
  hamAfterActive2,
  easeInCirc,
  easeOutCirc,
  borderRadius,
} = theme

const { flexBetween, flexCenter } = mixins

export const StyledContainer = styled.header`
  ${flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${flat.dark.background};
  transition: ${transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${({ scrollDirection }) => (scrollDirection === 'none' ? navHeight : navScrollHeight)};
  box-shadow: ${({ scrollDirection }) =>
    scrollDirection === 'up' ? `0 8px 8px -8px ${flat.dark.headerShadow}` : 'none'};
  transform: translateY(${({ scrollDirection }) => (scrollDirection === 'down' ? `-100%` : '0px')});
  border-bottom: ${({ scrollDirection }) =>
    scrollDirection === 'up' ? `1px solid ${flat.dark.headerBorder}` : 'none'};
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`

export const StyledNav = styled.nav`
  ${flexBetween};
  align-items: stretch;
  position: relative;
  width: 100%;
  background-color: ${flat.dark.background};
  color: ${flat.dark.paragraph};
  font-family: ${SFMono};
  counter-reset: item 0;
  z-index: 12;
  box-sizing: border-box;
  justify-content: flex-end;
`

export const StyledLogo = styled.div`
  ${flexCenter};
  a {
    display: block;
    color: ${flat.dark.link} !important;
    width: 72px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: ${flat.dark.transLink};
      }
    }
    svg {
      color: ${flat.dark.link};
      transition: ${transition};
      user-select: none;
      stroke: ${flat.dark.link};
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
  background-color: ${flat.dark.link};
  position: absolute;
  width: ${hamburgerWidth}px;
  height: 2px;
  border-radius: ${borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: ${props => (props.menuOpen ? easeOutCirc : easeInCirc)};
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: auto;
    right: 0;
    width: ${hamburgerWidth}px;
    height: 2px;
    background-color: ${flat.dark.link};
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? hamBeforeActive2 : hamBefore2)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? hamAfterActive2 : hamAfter2)};
  }
`

export const StyledLink = styled.div`
  display: flex;
  align-items: stretch;
  ${media.tablet`display: none;`};
`

export const StyledList = styled.ol`
  ${flexBetween};
`

export const StyledListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${smish};
  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${flat.dark.link};
    font-size: ${xs};
  }
`

export const StyledListLink = styled(Link)`
  padding: 12px 10px 12px 4px;
`

export const StyledButtonContainer = styled.div`
  display: inline-flex;
  align-items: stretch;
  transition-delay: ${props => `${props.delay}ms` || '100ms'};
`
