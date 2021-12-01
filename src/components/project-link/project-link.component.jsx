import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'

import { LinkIcon } from '../icons'

const ProjectLink = ({ to, label, children }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleOnOver = () => setIsHovered(true)
  const handleOnLeave = () => setIsHovered(false)

  return (
    <a
      href={to}
      target='_blank'
      rel='nofollow noopener noreferrer'
      aria-label={`${label} Link`}
      onFocus={handleOnOver}
      onBlur={handleOnLeave}
      onMouseOver={handleOnOver}
      onMouseLeave={handleOnLeave}
    >
      {children}
      <LinkIcon strokeWidth='2.5' isHovered={isHovered} />
    </a>
  )
}

ProjectLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node]),
}

export default memo(ProjectLink)
