import React from 'react'

import { email } from '@config'
import { Fade } from '@components'
import {
  StyledContainer,
  StyledEmailLink,
  StyledLinkWrapper,
  StyledEmailLinkContainer,
  StyledEmailIcon,
} from './email.styles'

export default function Email() {
  return (
    <Fade>
      <StyledContainer>
        <StyledLinkWrapper>
          <StyledEmailLink
            role='link'
            initial={{
              '--text-wght': 400,
            }}
            whileHover={{
              '--text-wght': 800,
            }}
            transition={{ duration: 0.2 }}
            href={`mailto:${email}`}
          >
            {email}
          </StyledEmailLink>

          <StyledEmailLinkContainer>
            <StyledEmailIcon size='24' title='email me' strokeWidth='1.5' />
          </StyledEmailLinkContainer>
        </StyledLinkWrapper>
      </StyledContainer>
    </Fade>
  )
}

/*
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
*/
