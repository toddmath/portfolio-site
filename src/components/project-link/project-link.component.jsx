import React, { memo } from 'react'
import PropTypes from 'prop-types'

const ProjectLink = ({ to, label, children }) => (
  <a href={to} target='_blank' rel='nofollow noopener noreferrer' aria-label={`${label} Link`}>
    {children}
  </a>
)

ProjectLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export default memo(ProjectLink)
