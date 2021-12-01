import React, { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'

// import { useReducedMotion } from '@hooks'
import { socialMedia } from '@config'
import Fade from '../fade/fade.component'
import SocialLink from '../social-link/social-link.component'
import { StyledContainer, StyledList } from './social.styles'

// const childrenVar = {
//   initial: {
//     scale: 1,
//   },
//   hover: {
//     scale: 0.9,
//     transition: {
//       type: 'spring',
//       staggerChildren: 0.2,
//     },
//   },
// }

export default function Social() {
  // const reducedMotion = useReducedMotion()
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
        <AnimateSharedLayout>
          <StyledList
            onBlur={onLeave}
            onFocus={onHover}
            onMouseOver={onHover}
            onMouseLeave={onLeave}
          >
            {socialMedia?.map(({ url, name }) => (
              <SocialLink key={name} url={url} name={name} listHovered={isHovered} />
            ))}
          </StyledList>
        </AnimateSharedLayout>
      </Fade>
    </StyledContainer>
  )
}
