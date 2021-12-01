import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

import { styledTheme, theme } from '@styles'

const getBackground = styledTheme([theme.flat.dark.headline, theme.flat.dark.background])

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

export const StyledLink = styled(Link)`
  color: ${getBackground};
`

export const Item = styled(motion.li).attrs(() => ({
  initial: 'closed',
  variants,
}))`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
`
