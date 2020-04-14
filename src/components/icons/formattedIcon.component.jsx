import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {
  IconGitHub,
  IconLinkedin,
  IconCodepen,
  IconInstagram,
  IconTwitter,
  IconArrow,
  IconLocation,
  IconReact,
  IconSass,
  IconTs,
  IconJs,
} from '@components/icons'

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
    ) : name === 'Arrow' ? (
      <IconArrow />
    ) : name === 'Location' ? (
      <IconLocation />
    ) : name === 'React' ? (
      <IconReact />
    ) : name === 'Sass' ? (
      <IconSass />
    ) : name === 'Ts' ? (
      <IconTs />
    ) : name === 'Js' ? (
      <IconJs />
    ) : (
      <IconGitHub />
    )}
  </>
)

FormattedIcon.propTypes = {
  name: PropTypes.string,
}

export default memo(FormattedIcon)

/*
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
*/
