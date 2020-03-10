import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import { useSpring } from 'react-spring'

import { FormattedIcon } from '@components/icons'
import { StyledLink } from './social-link.styles'

function SocialLink({ url, name, isHovered }) {
  const [linkHovered, setLinkHovered] = useState(false)
  const handleOnOver = () => setLinkHovered(true)
  const handleOnOut = () => setLinkHovered(false)

  const props = useSpring({
    scale: isHovered ? (linkHovered ? '1.1' : '1.5') : '1',
    opacity: isHovered ? 1 : 0.9,
    config: {
      tension: linkHovered ? 550 : 450,
      friction: linkHovered ? 45 : 30,
      mass: linkHovered ? 5 : 3,
    },
  })

  return (
    <StyledLink
      href={url}
      aria-label={name}
      target='_blank'
      rel='nofollow noopener noreferrer'
      onMouseOver={handleOnOver}
      onFocus={handleOnOver}
      onMouseLeave={handleOnOut}
      onBlur={handleOnOut}
      style={props}
    >
      <FormattedIcon name={name} />
    </StyledLink>
  )
}

SocialLink.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  name: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default memo(SocialLink)
