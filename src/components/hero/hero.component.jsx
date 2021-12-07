import React from 'react'

import { email } from '@config'
import { useHeroQuery, useReducedMotion } from '@hooks'

import { AnimatedText, Button } from '@components'
import {
  StyledTitle,
  StyledSubtitle,
  StyledOverline,
  StyledDescription,
  HeroContainer,
  ButtonContainer,
} from './hero.styles'

export default function Hero() {
  const { title, name, subtitle, contactText, html } = useHeroQuery()
  const reducedMotion = useReducedMotion()

  const encode = encodeURIComponent
  const emailSubject = encode(`Just trying to ${contactText.toLowerCase()}!`)
  const emailBody = encode(`Hi Todd, my name is ...\n\nI just wanted to say ...`)

  return (
    <HeroContainer
      maxWidth='1045px'
      bigDesktopStyles={`max-width: 820px;`}
      desktopStyles={`max-width: 696px;`}
    >
      <>
        <StyledOverline className='hero'>{title}</StyledOverline>
        {reducedMotion ? (
          <>
            <StyledTitle>{name}</StyledTitle>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
          </>
        ) : (
          <AnimatedText title={name} subtitle={subtitle} />
        )}
        <StyledDescription className='hero' dangerouslySetInnerHTML={{ __html: html }} />
        <ButtonContainer>
          <Button
            as='a'
            href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
            responsive={true}
            mono={true}
            outline={true}
          >
            {contactText}
          </Button>
        </ButtonContainer>
      </>
    </HeroContainer>
  )
}
