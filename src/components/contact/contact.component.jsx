import React from 'react'

import { email } from '@config'
import { useContactQuery } from '@hooks'
import { Section, Button } from '@components'
import { Heading } from '@styles'

import { StyledButtonContainer } from './contact.styles'

export default function Contact() {
  const { title, html } = useContactQuery()
  /* const revealContainer = useRef(null) */
  // useReveal(revealContainer)

  return (
    <Section
      ariaLabel='Contact me section'
      textAlign='center'
      maxWidth='845px'
      minHeight='unset'
      margin='10ch auto 30px'
      desktopStyles={`max-width: 696px;`}
      tabletStyles={`margin-bottom: 20px; padding-bottom: 50px;`}
    >
      <Heading id='contact' mb='2ch'>
        {title}
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <StyledButtonContainer>
        <Button
          as='a'
          href={`mailto:${email}`}
          target='_blank'
          rel='nofollow noopener noreferrer'
          size='large'
          outline
          responsive
        >
          Say Hi
        </Button>
      </StyledButtonContainer>
    </Section>
  )
}
