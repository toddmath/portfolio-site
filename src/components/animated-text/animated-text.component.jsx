import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'

import { useAnimatedText } from '@hooks'

import {
  StyledHeroTitleContainer,
  StyledTextContainer,
  StyledTextTitleContent,
  StyledTextTitleContentClone,
  StyledTextSubtitleContent,
  StyledTextSubtitleContentClone,
} from './animated-text.styles'

const AnimatedText = ({ title, subtitle }) => {
  const titleRef = useRef(null)
  const [mouseX, mouseY] = useAnimatedText(titleRef)

  return (
    <StyledHeroTitleContainer
      ref={titleRef}
      style={{
        '--maskX': mouseX,
        '--maskY': mouseY,
      }}
    >
      <StyledTextContainer>
        <StyledTextTitleContent>{title}</StyledTextTitleContent>
        <StyledTextTitleContentClone>{title}</StyledTextTitleContentClone>
      </StyledTextContainer>

      <StyledTextContainer>
        <StyledTextSubtitleContent>{subtitle}</StyledTextSubtitleContent>
        <StyledTextSubtitleContentClone>{subtitle}</StyledTextSubtitleContentClone>
      </StyledTextContainer>
    </StyledHeroTitleContainer>
  )
}

AnimatedText.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default memo(AnimatedText)
