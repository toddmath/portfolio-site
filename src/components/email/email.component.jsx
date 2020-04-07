import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useSpring } from 'react-spring'

import { useTimeout, useReducedMotion } from '@hooks'
import { email } from '@config'
import { StyledContainer, StyledLinkWrapper, StyledEmailLink } from './email.styles'

export default function Email() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const reducedMotion = useReducedMotion()

  const mountIt = () => setIsMounted(true)
  useTimeout(mountIt, 2000)

  const isReducedOrNotHovered = reducedMotion || !isHovered
  // const isReducedOrIsHovered = reducedMotion || isHovered

  const props = useSpring({
    transform: `translate3d(0px, ${isReducedOrNotHovered ? '0px' : '-4px'}, 0px) scale(${
      isReducedOrNotHovered ? 1 : 1.2
    })`,
  })

  const handleOnHover = () => {
    if (!reducedMotion) {
      setIsHovered(true)
    }
  }
  const handleOnLeave = () => setIsHovered(false)

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={3000} classNames='fade'>
            <StyledLinkWrapper>
              <StyledEmailLink
                style={props}
                role='link'
                onMouseOver={handleOnHover}
                onFocus={handleOnHover}
                onMouseLeave={handleOnLeave}
                onBlur={handleOnLeave}
                href={`mailto:${email}`}
              >
                {email}
              </StyledEmailLink>
            </StyledLinkWrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledContainer>
  )
}
