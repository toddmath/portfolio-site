import React from 'react'
import PropTypes from 'prop-types'

import { IconGitHub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from '@components/icons'

const FormattedIcon = ({ name }) => (
  <>
    {name === 'Github' ? (
      <IconGitHub />
    ) : name === 'Linkedin' ? (
      <IconLinkedin />
    ) : name === 'Codepen' ? (
      <IconCodepen />
    ) : name === 'Instagram' ? (
      <IconInstagram />
    ) : name === 'Twitter' ? (
      <IconTwitter />
    ) : (
      <IconGitHub />
    )}
  </>
)

FormattedIcon.propTypes = {
  name: PropTypes.string,
}

export default FormattedIcon
