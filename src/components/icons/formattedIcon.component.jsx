import React, { forwardRef } from 'react'
import T from 'prop-types'

import {
  // IconGitHub,
  // IconLinkedin,
  // IconCodepen,
  // IconInstagram,
  // IconTwitter,
  // IconArrow,
  IconLocation,
  // IconReact,
  // IconSass,
  // IconTs,
  // IconJs,
} from '@components/icons'

import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Codepen,
  Instagram,
  Twitter,
  ArrowRight,
  ExternalLink,
} from '@styled-icons/feather'
import { ReactLogo, Javascript } from '@styled-icons/boxicons-logos'
import { Sass } from '@styled-icons/fa-brands'
import { Typescript } from '@styled-icons/simple-icons'

const IconMap = {
  github: motion(Github),
  linkedin: motion(Linkedin),
  codepen: motion(Codepen),
  instagram: motion(Instagram),
  twitter: motion(Twitter),
  arrow: motion(ArrowRight),
  external: motion(ExternalLink),
  location: motion(IconLocation),
  react: motion(ReactLogo),
  sass: motion(Sass),
  ts: motion(Typescript),
  js: motion(Javascript),
  default: motion(Github),
}

const isValidTitle = title => typeof title === 'string' && title.length > 0

const FormattedIcon = forwardRef(({ name, size = '24', title, ...rest }, ref) => {
  const props = isValidTitle(title) ? { size, title, ...rest } : { size, ...rest }
  const iconName = name ? name.toLowerCase() : 'default'

  /** @type {React.FC} Icon */
  const Icon = IconMap[iconName]

  return <Icon ref={ref} {...props} />
})

FormattedIcon.propTypes = {
  name: T.string.isRequired,
  size: T.string,
  title: T.string,
}

export default FormattedIcon
