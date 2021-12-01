import { motion } from 'framer-motion'
import styled from 'styled-components'

import { styledTheme, theme } from '@styles'

const backgroundColor = styledTheme([
  theme.flat.dark.headline,
  theme.flat.dark.background,
])

export const sidebar = {
  open: (height = 1080) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const Background = styled(motion.div).attrs(() => ({
  initial: 'closed',
  sidebar,
}))`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background-color: ${backgroundColor};
`

export const Toggler = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: auto;
  z-index: 100;
`

export const Head = styled.header`
  padding: 1rem 3%;
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
    line-height: 1;
    @media screen and (max-width: 375px) {
      font-size: 1.25rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
  @media print {
    display: none;
  }
`
