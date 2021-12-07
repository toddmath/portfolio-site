import React from 'react'
import T from 'prop-types'

import { FormattedIcon } from '@components/icons'
import { MotionLink } from './social-link.styles'

const variant = {
  initial: {
    scale: 1.0,
  },
  linkHover: {
    scale: 1.1,
    transition: {
      type: 'spring',
    },
  },
  hover: {
    scale: 1.3,
    transition: { type: 'spring' },
  },
}

function SocialLink({ url, name, isHovered }) {
  return (
    <MotionLink
      layout='size'
      layoutId={name}
      href={url}
      aria-label={name}
      target='_blank'
      rel='nofollow noopener noreferrer'
      variants={variant}
      initial='initial'
      whileHover='linkHover'
      animate={isHovered ? 'hover' : 'initial'}
    >
      <FormattedIcon name={name} />
    </MotionLink>
  )
}

SocialLink.propTypes = {
  isHovered: T.bool.isRequired,
  name: T.string,
  url: T.string.isRequired,
}

export default SocialLink
