import React from 'react'

import { email } from '@config'
import { useHeroQuery } from '@hooks'
import { CTAButton } from './cta.styles'

const encode = encodeURIComponent

function CTA() {
  const { contactText } = useHeroQuery()
  const emailSubject = encode(`Just trying to ${contactText.toLowerCase()}!`)
  const emailBody = encode(`Hi Todd, my name is ...\n\nI just wanted to say ...`)

  return (
    <CTAButton
      as='a'
      href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
      responsive={true}
      mono={true}
      outline={false}
      layout
    >
      Say&nbsp;
      <span role='img' alt='hi' aria-label='hi'>
        👋
      </span>
    </CTAButton>
  )
}

export default CTA
