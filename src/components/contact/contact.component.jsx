import React, { useRef } from 'react'

// import { email } from '@config'
import { useContactQuery } from '@hooks'
import { Article } from '@styles'
import { CTA } from '@components'

import { StyledHeading, StyledButtonContainer } from './contact.styles'

export default function Contact() {
  const { title, html } = useContactQuery()
  const revealContainer = useRef(null)

  return (
    <Article
      ariaLabel='Contact me section'
      textAlign='center'
      maxWidth='845px'
      margin='0 auto 30px'
      desktopStyles={`max-width: 696px;`}
      tabletStyles={`margin-bottom: 20px; padding-bottom: 50px;`}
    >
      <StyledHeading id='contact' ref={revealContainer}>
        {title}
      </StyledHeading>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <StyledButtonContainer>
        <CTA />
      </StyledButtonContainer>
    </Article>
  )
}

/*
<Button
  as='a'
  href={`mailto:${email}`}
  target='_blank'
  rel='nofollow noopener noreferrer'
  size='large'
  responsive
  mono={false}
>
  Say&nbsp;
  <span role='img' aria-label='hi'>
    👋
  </span>
</Button>
*/
