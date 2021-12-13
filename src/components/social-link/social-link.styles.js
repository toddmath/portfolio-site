import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MotionLink = styled(motion.a)`
  padding: 0;
  color: var(--interactive-normal);
  transition: color 400ms ease, background-color 400ms ease;
  /* transition: unset; */

  svg {
    color: var(--interactive-normal);
  }

  &:hover {
    color: var(--interactive-hover);

    svg {
      color: var(--interactive-hover);
    }
  }
`
