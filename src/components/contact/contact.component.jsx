import React, { useRef } from 'react'

import { email } from '@config'
import { useContactQuery, useReveal } from '@hooks'
import { Article, Button } from '@components'

import { StyledHeading, StyledButtonContainer } from './contact.styles'

export default function Contact() {
  const { title, html } = useContactQuery()
  const revealContainer = useRef(null)
  useReveal(revealContainer)

  return (
    <Article
      ariaLabel='Contact me section'
      textAlign='center'
      maxWidth='820px'
      margin='0 auto 30px'
      tabletStyles={`margin-bottom: 20px; padding-bottom: 50px;`}
    >
      <StyledHeading id='contact' ref={revealContainer}>
        {title}
      </StyledHeading>
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
    </Article>
  )
}
