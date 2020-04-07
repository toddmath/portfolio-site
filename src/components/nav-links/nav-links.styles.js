import styled from 'styled-components'
import { Link } from 'gatsby'

import { theme, mixins, media, styledTheme } from '@styles'

const { flat, fontSizes } = theme
const { link } = mixins

const counterColors = styledTheme([flat.dark.paragraph, flat.dark.cardParagraph])

export const NavList = styled.ol`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  margin-right: 1.8rem !important;
  width: 100%;
  background-color: inherit;
`

export const NavListItem = styled.li`
  --altColor: ${flat.dark.cardBackground};
  --mainColor: ${flat.dark.paragraph};
  --textColor: ${flat.dark.background};
  display: block;
  position: relative;
  font-size: ${fontSizes.sm};
  counter-increment: item 1;
  /* width: 100%; */
  ${media.tiny`font-size: ${fontSizes.smish};`}
  margin-left: 1.8em;
  vertical-align: center;
  border-radius: ${theme.borderRadius};
  &:before {
    display: inline-block;
    content: '0' counter(item) '.';
    color: ${counterColors};
    font-size: ${fontSizes.smish};
    /* margin-left: 1em; */
    /* margin-right: -1.6em; */
    /* margin-left: 0.6em; */
    margin-right: -1em;
    background: transparent;
  }
  &:hover a {
    border-radius: ${theme.borderRadius};
    color: var(--altColor);
    background-position: 100%;
    transform: translateX(1.6rem);
  }
`

export const NavLink = styled(Link)`
  --mainColor: ${flat.dark.cardBackground};
  --textColor: ${flat.dark.button};
  --fontSize: ${fontSizes.sm};
  --linkBenz: cubic-bezier(0.23, 1, 0.32, 1);
  ${link};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  line-height: calc(var(--fontSize) + 0.5em);
  text-transform: uppercase;
  /* padding: 0.4rem 1em; */
  padding: 10px 1em;
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
