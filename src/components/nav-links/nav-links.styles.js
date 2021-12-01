import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

import { theme, mixins, media } from '@styles'

const { fontSizes } = theme

export const MotionNavList = styled(motion.ol)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  margin-right: 1.8rem !important;
  background-color: inherit;
`

export const MotionNavListItem = styled(motion.li)`
  --altColor: var(--text-muted);
  --mainColor: var(--text-link);
  --textColor: var(--text-normal);
  display: block;
  position: relative;
  counter-increment: item 1;
  margin-left: 1.4em;
  border-radius: ${theme.borderRadius};
  font-family: var(--font-sys);
  font-size: ${fontSizes.md};
  color: var(--text-link);
  ${media.tiny`font-size: ${fontSizes.smish};`}

  &::before {
    display: inline-block;
    content: '0' counter(item) '.';
    color: var(--header-secondary);
    font-size: inherit;
    background: transparent;
    font-family: var(--font-code);
  }
`

export const NavWrapper = styled(motion.span)`
  will-change: transform;
  display: inline-block;
  perspective: 600px;
`

export const NavLink = styled(Link)`
  --mainColor: var(--text-link);
  --textColor: var(--text-normal);
  --fontSize: ${fontSizes.sm};
  --linkBenz: cubic-bezier(0.23, 1, 0.32, 1);
  ${mixins.link};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  line-height: calc(var(--fontSize) + 0.5em);
  padding: 10px 10px 10px 5px;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--textColor) 50%
  );
  background-size: 240%;
  color: var(--interactive-normal);
  border-radius: ${theme.borderRadius};

  &:hover {
    color: var(--interactive-hover);
  }
`
