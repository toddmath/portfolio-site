import React, { memo, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

import { useMousePosition } from '@hooks'

import {
  StyledTextContainer,
  StyledTextTitleContent,
  StyledTextTitleContentClone,
  StyledTextSubtitleContent,
  StyledTextSubtitleContentClone,
} from './animated-text.styles'

const AnimatedText = ({ title, subtitle, ...props }) => {
  const { x, y } = useMousePosition()
  const toFixed = num => num.toFixed(5)
  const fixedX = useMemo(() => toFixed(x), [x])
  const fixedY = useMemo(() => toFixed(y), [y])

  const handleMouseX = useCallback(fixedX => toFixed(fixedX / 14), [fixedX])
  const handleMouseY = useCallback(fixedY => toFixed(fixedY / 14), [fixedY])

  return (
    <>
      <StyledTextContainer
        style={{ '--maskX': handleMouseX(fixedX), '--maskY': handleMouseY(fixedY) }}
        {...props}
      >
        <StyledTextTitleContent>{title}</StyledTextTitleContent>
        <StyledTextTitleContentClone>{title}</StyledTextTitleContentClone>
      </StyledTextContainer>
      <StyledTextContainer
        style={{ '--maskX': handleMouseX(fixedX), '--maskY': handleMouseY(fixedY) }}
        {...props}
      >
        <StyledTextSubtitleContent>{subtitle}</StyledTextSubtitleContent>
        <StyledTextSubtitleContentClone>{subtitle}</StyledTextSubtitleContentClone>
      </StyledTextContainer>
    </>
  )
}

AnimatedText.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default memo(AnimatedText)
