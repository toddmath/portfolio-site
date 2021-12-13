import React from 'react'
import T from 'prop-types'

import { FormattedIcon } from '@components/icons'
import { MotionLink } from './social-link.styles'

const variant = {
  initial: {
    opacity: 1.0,
    scale: 1.0,
    // color: 'var(--interactive-normal)',
    strokeWidth: '1.5px',
    transition: { type: 'spring', duration: 0.4 },
  },
  linkHover: {
    scale: 1.0,
    color: 'var(--interactive-hover)',
    strokeWidth: '1.75px',
    transition: { duration: 0.2 },
  },
  hover: {
    opacity: 1.0,
    scale: 1.3,
    color: 'var(--text-link)',
    strokeWidth: '2px',
    transition: { type: 'spring', duration: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.0,
  },
}

function SocialLink({ url, name, isHovered }) {
  return (
    <MotionLink
      // layout='size'
      // layoutId={name}
      key={name}
      href={url}
      aria-label={name}
      target='_blank'
      rel='nofollow noopener noreferrer'
      variants={variant}
      initial='initial'
      exit='exit'
      // whileHover={isHovered ? 'hover' : 'initial'}
      whileHover='linkHover'
      animate={isHovered ? 'hover' : 'initial'}
      // style={{ color: isHovered ? 'var(--interactive-hover)' : 'var(--interactive-normal)' }}
    >
      <FormattedIcon name={name} title={name} size='26' />
    </MotionLink>
  )
}

SocialLink.propTypes = {
  url: T.string.isRequired,
  name: T.string.isRequired,
  isHovered: T.bool.isRequired,
}

export default SocialLink
