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

// const toFixed = num => num.toFixed(2)
// eslint-disable-next-line no-bitwise
// const toInt = num => ~~num

const AnimatedText = ({ title, subtitle }) => {
  const titleRef = useRef(null)

  // // const { x, y } = useMousePosition()
  // const [x, y] = useMouseMove()
  // const fixedX = toInt(x)
  // const fixedY = toInt(y)

  // const mouseX = useMemo(() => toFixed(fixedX / 14), [fixedX])
  // const mouseY = useMemo(() => toFixed(fixedY / 14), [fixedY])
  // const intersection = useObserver(titleRef)
  // const { isIntersecting } = intersection || true
  const [mouseX, mouseY] = useAnimatedText(titleRef)

  // useEffect(() => {
  // })

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
