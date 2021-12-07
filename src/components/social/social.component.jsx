import React, { useState } from 'react'
import { LayoutGroup } from 'framer-motion'

import { socialMedia } from '@config'

import { SocialLink, Fade } from '@components'
import { StyledContainer, StyledList } from './social.styles'

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
        <LayoutGroup id='social_aside'>
          <StyledList
            onFocus={onHover}
            onBlur={onLeave}
            onMouseOver={onHover}
            onMouseLeave={onLeave}
          >
            {socialMedia?.map(({ url, name }) => (
              <SocialLink key={name} url={url} name={name} isHovered={isHovered} />
            ))}
          </StyledList>
        </LayoutGroup>
      </Fade>
    </StyledContainer>
  )
}

export default Social
