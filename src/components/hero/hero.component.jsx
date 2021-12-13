import React from 'react'

import { email } from '@config'
import { useHeroQuery } from '@hooks'

import { AnimatedText, Button } from '@components'
import {
  // StyledTitle,
  // StyledSubtitle,
  StyledOverline,
  StyledDescription,
  HeroContainer,
  ButtonContainer,
} from './hero.styles'

const encode = encodeURIComponent

// export default function Hero() {
//   const { title, name, subtitle, contactText, html } = useHeroQuery()
//   const emailSubject = encode(`Just trying to ${contactText.toLowerCase()}!`)
//   const emailBody = encode(`Hi Todd, my name is ...\n\nI just wanted to say ...`)
//
//   return (
//     <HeroContainer maxWidth='60ch'>
//       <h1>
//         <span className='overline'>Hi, my name is </span>Todd Matheson.
//       </h1>
//
//       <p className='subtitle'>I build websites and web apps.</p>
//
//       <StyledDescription className='hero' dangerouslySetInnerHTML={{ __html: html }} />
//
//       <ButtonContainer>
//         <Button
//           as='a'
//           href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
//           responsive={true}
//           mono={true}
//           outline={true}
//         >
//           {contactText}
//         </Button>
//       </ButtonContainer>
//     </HeroContainer>
//   )
// }

export default function Hero() {
  const { title, name, subtitle, contactText, html } = useHeroQuery()
  const emailSubject = encode(`Just trying to ${contactText.toLowerCase()}!`)
  const emailBody = encode(`Hi Todd, my name is ...\n\nI just wanted to say ...`)

  return (
    <HeroContainer maxWidth='60ch'>
      <StyledOverline className='hero'>{title}</StyledOverline>
      <AnimatedText title={name} subtitle={subtitle} />
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
    </HeroContainer>
  )
}
