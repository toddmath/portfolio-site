import React from 'react'

import { email } from '@config'
import { Fade } from '@components'
import {
  EmailContainer,
  EmailLink,
  LinkWrapper,
  EmailLinkContainer,
  EmailIcon,
} from './email.styles'

const linkVariant = {
  initial: {
    fontWeight: 660,
    skewY: 10,
    originY: 0,
    transformPerspective: '100rem',
  },
  hover: {
    fontWeight: 900,
    skewY: 0,
    originY: 1,
  },
}

export default function Email() {
  return (
    <Fade>
      <EmailContainer>
        <LinkWrapper>
          <EmailLink
            role='link'
            href={`mailto:${email}`}
            variants={linkVariant}
            initial='initial'
            whileHover='hover'
            transition={{ duration: 0.2 }}
          >
            {email}
          </EmailLink>

          <EmailLinkContainer>
            <EmailIcon title='email me' strokeWidth='1.5' />
          </EmailLinkContainer>
        </LinkWrapper>
      </EmailContainer>
    </Fade>
  )
}
