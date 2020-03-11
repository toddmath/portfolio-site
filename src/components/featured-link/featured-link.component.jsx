import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'

const FeaturedLink = ({ to, label, isReduced = false, children }) => {
  const [linkHovered, setLinkHovered] = useState(false)
  const handleOnOver = () => setLinkHovered(true)
  const handleOnOut = () => setLinkHovered(false)

  const notReducedOrHovered = linkHovered && !isReduced

  const props = useSpring({
    scale: notReducedOrHovered ? '1.3' : '1',
    opacity: notReducedOrHovered ? 1 : 0.9,
    config: {
      tension: 450,
      friction: 30,
      mass: 3,
    },
  })

  return (
    <animated.a
      href={to}
      target='_blank'
      rel='nofollow noopener noreferrer'
      aria-label={`${label} link`}
      onMouseOver={handleOnOver}
      onFocus={handleOnOver}
      onMouseLeave={handleOnOut}
      onBlur={handleOnOut}
      style={props}
    >
      {children}
    </animated.a>
  )
}

FeaturedLink.propTypes = {
  children: PropTypes.PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node]),
  label: PropTypes.string,
  isReduced: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
}

export default memo(FeaturedLink)
