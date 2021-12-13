import React, { useState } from 'react'
import { LayoutGroup, AnimatePresence } from 'framer-motion'

import { socialMedia } from '@config'

import { SocialLink, Fade } from '@components'
import { StyledContainer, StyledList } from './social.styles'

const ghost = {
  initial: {
    opacity: 1.0,
    /* scale: 1.0, */
    // color: 'var(--interactive-normal)',
    strokeWidth: '1.5px',
    transition: { type: 'spring' },
  },
  linkHover: {
    /* scale: 1.2, */
    // color: 'var(--interactive-hover)',
    strokeWidth: '1.75px',
    transition: { type: 'spring', staggerChildren: 0.3 },
  },
  hover: {
    /* scale: 0.95, */
    // color: 'var(--interactive-hover)',
    strokeWidth: '2.0px',
    transition: { type: 'spring' },
  },
  exit: {
    opacity: 0.0,
  },
}

function Social() {
  const [isHovered, setIsHovered] = useState(false)
  const onHover = () => {
    setIsHovered(true)
  }
  const onLeave = () => {
    setIsHovered(false)
  }

  return (
    <StyledContainer>
      <Fade>
        <StyledList
          onFocus={onHover}
          onBlur={onLeave}
          onMouseOver={onHover}
          onMouseLeave={onLeave}
          variants={ghost}
          initial='initial'
          exit='exit'
          transition={{ type: 'spring', staggerChildren: 0.4 }}
          // initial={false}
          // layout
        >
          <AnimatePresence>
            {socialMedia?.map(({ url, name }) => (
              <SocialLink key={name} url={url} name={name} isHovered={isHovered} />
            ))}
          </AnimatePresence>
        </StyledList>
      </Fade>
    </StyledContainer>
  )
}

export default Social
