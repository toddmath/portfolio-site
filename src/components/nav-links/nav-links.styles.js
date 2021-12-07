import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

import { theme, mixins, media } from '@styles'

const { fontSizes } = theme
const { link } = mixins

export const MotionNavList = styled(motion.ol)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3ch;
  width: 100%;
  height: 100%;
  background-color: var(--background-secondary);
  transition: color 400ms ease, background-color 400ms ease;
`

export const MotionNavListItem = styled(motion.li)`
  --altColor: var(--text-muted);
  --mainColor: var(--text-link);
  --textColor: var(--text-normal);
  display: block;
  position: relative;
  counter-increment: item 1;
  border-radius: ${theme.borderRadius};

  font-size: ${fontSizes.sm};
  ${media.tiny`font-size: ${fontSizes.smish};`}

  a {
    color: var(--interactive-normal);
  }

  &:before {
    display: inline-block;
    content: '0' counter(item) '.';
    color: var(--header-secondary);
    /* color: ${counterColors}; */
    font-size: ${fontSizes.smish};
    font-weight: 700;
    margin-right: -1.5ch;
    /* margin-right: -1em; */
    background: transparent;
  }

  &:hover a {
    border-radius: ${theme.borderRadius};
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
  background: transparent;
  line-height: calc(var(--fontSize) + 0.5em);
  text-transform: uppercase;
  /* padding: 10px 1em; */
  padding: 1ch 2ch;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--background-tertiary) 50%
  );
  background-size: 240%;
  color: var(--interactive-normal);
  transition: all 0.8s var(--linkBenz);

  &:hover {
    color: var(--interactive-hover);
  }
`
