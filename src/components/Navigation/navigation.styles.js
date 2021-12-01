import styled from 'styled-components'
import { motion } from 'framer-motion'

export const variants = {
  open: {
    pointerEvents: 'auto',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    pointerEvents: 'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  margin: 0;
  li {
    margin: 0 0.5rem;
    a {
      padding: 0px 0.25rem;
      &::after {
        content: '';
        display: block;
        height: 10px;
        width: 0%;
        margin-top: -10px;
        background: #e94e1b;
        transition: all 0.5s ease 0s;
      }
      &:hover {
        border-bottom: none;
        &::after {
          width: 110%;
        }
      }
    }
    svg {
      margin-left: 1rem;
    }
  }
`

export const MotionUl = styled(motion.ul).attrs(() => ({
  initial: 'closed',
  variants,
}))`
  margin: 0;
  /* padding: 0; */
  padding: 40px;
  position: absolute;
  top: 100px;
  width: 230px;
`
