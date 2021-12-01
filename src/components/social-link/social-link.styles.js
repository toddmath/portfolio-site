import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MotionLink = styled(motion.a)`
  padding: 10px;
  transform: unset;
  transition: unset;
  color: var(--interactive-normal);

  &:hover {
    color: var(--interactive-hover);
  }
`
