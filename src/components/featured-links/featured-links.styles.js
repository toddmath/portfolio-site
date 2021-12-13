import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const LinkWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2ch;
  /* color: var(--interactive-normal); */
  margin-inline: 0;
  margin-block: 0;
  justify-content: ${p => (p.$isodd === 'true' ? 'flex-start' : 'flex-end')};

  a {
    padding: 1px;
    color: var(--interactive-normal);
    transition: color 400ms ease;
    /* transition: color 400ms ease; */
  }

  a:hover {
    color: var(--text-link);
    transition: color 100ms ease;
  }
`
