import React, { useState } from 'react'

import { useReducedMotion } from '@hooks'
import { socialMedia } from '@config'

import { SocialLink } from '@components'
import { StyledContainer, StyledList } from './social.styles'

const Social = () => {
  const [isHovered, setIsHovered] = useState(false)
  const reducedMotion = useReducedMotion()

  const handleOnOver = evt => {
    if (evt) evt.preventDefault()
    if (!reducedMotion) {
      setIsHovered(true)
    }
  }

  const handleOnLeave = evt => {
    if (evt) evt.preventDefault()
    setIsHovered(false)
  }

  return (
    <StyledContainer>
      <StyledList
        onMouseOver={handleOnOver}
        onMouseLeave={handleOnLeave}
        onFocus={handleOnOver}
        onnBlur={handleOnLeave}
      >
        {socialMedia?.map(({ url, name }, i) => (
          <SocialLink key={i} url={url} name={name} isHovered={isHovered} />
        ))}
      </StyledList>
    </StyledContainer>
  )
}

export default Social
