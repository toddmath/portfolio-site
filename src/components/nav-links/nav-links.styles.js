import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

import { theme, mixins } from '@styles'

const { fontSizes } = theme
const { link } = mixins

export const MotionNavList = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 3ch;
  width: 100%;
  /* height: 100%; */
  /* background-color: var(--background-secondary); */
  background-color: inherit;
  transition: color 400ms ease, background-color 400ms ease;
`

export const MotionNavListItem = styled(motion.li)`
  --altColor: var(--text-muted);
  --mainColor: var(--text-link);
  --textColor: var(--text-normal);
  /* display: block; */
  /* position: relative; */
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5ch;
  place-items: center;
  height: 100%;
  counter-increment: item 1;
  /* border-radius: ${theme.borderRadius}; */
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1;
  /* background-color: var(--background-secondary); */
  background: inherit;
  color: var(--interactive-normal);
  transition: color 400ms ease, background 400ms ease;

  /* a { */
  /*   color: var(--interactive-normal); */
  /* } */

  &:before {
    display: inline-block;
    content: '0' counter(item) '.';
    color: var(--text-muted);
    font-weight: 700;
    /* font-size: 0.8rem; */
    /* padding-right: 0.5ch; */
    /* margin-right: -1.5ch; */
    /* background: inherit; */
    /* position: absolute; */
    /* top: 0; */
    /* left: 0; */
  }

  &:hover a {
    /* border-radius: ${theme.borderRadius}; */
    color: var(--interactive-hover);
    /* background-position: 100%; */
    /* transform: translateX(2ch); */
    /* font-weight: 800; */
    /* transform: translateX(1.6rem); */
  }
`

export const NavLink = styled(Link)`
  --mainColor: var(--text-link);
  --textColor: var(--text-normal);
  --fontSize: ${fontSizes.sm};
  --linkBenz: cubic-bezier(0.23, 1, 0.32, 1);
  ${link};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  /* background: inherit; */
  /* line-height: calc(var(--fontSize) + 0.5em); */
  text-transform: capitalize;
  /* padding: 10px 1em; */
  /* padding: 1ch 2ch; */
  padding: 0 0;
  /* background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--background-tertiary) 50%
  ); */
  /* background-size: 240%; */
  color: var(--interactive-normal);
  /* transition: all 0.8s var(--linkBenz); */

  /* &:hover { */
  /*   color: var(--interactive-hover); */
  /* } */
`
