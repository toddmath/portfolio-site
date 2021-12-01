import React, { forwardRef } from 'react'
import { animated } from 'react-spring'
import { motion } from 'framer-motion'

import {
  Twitter,
  Instagram,
  Redux,
  ReactLogo,
  Nodejs,
  Javascript,
  Sass,
  Unsplash,
  Medium,
} from '@styled-icons/boxicons-logos'
import { Box as IconBox, GitRepoForked } from '@styled-icons/boxicons-regular'
import {
  Link as IconLink,
  Code,
  Codesandbox,
  Codepen,
  ExternalLink,
  Folder,
  Github,
  Gitlab,
  Linkedin,
  Mail,
  Send,
  Star,
} from '@styled-icons/feather'
import { Sun, Moon, Code as HCode } from '@styled-icons/heroicons-outline'
import IconGraphQL from './graphql.component'

const handleIcon = {
  sun: Sun,
  moon: Moon,
  twitter: Twitter,
  linkedin: Linkedin,
  codepen: Codepen,
  codesandbox: Codesandbox,
  instagram: Instagram,
  gitlab: Gitlab,
  redux: Redux,
  react: ReactLogo,
  node: Nodejs,
  nodejs: Nodejs,
  'node.js': Nodejs,
  javascript: Javascript,
  sass: Sass,
  unsplash: Unsplash,
  medium: Medium,
  box: IconBox,
  linkexternal: ExternalLink,
  link: IconLink,
  mail: Mail,
  email: Mail,
  send: Send,
  code: HCode,
  source: HCode,
  folder: Folder,
  github: Github,
  star: Star,
  fork: GitRepoForked,
  graphql: IconGraphQL,
}

const Icon = forwardRef(
  (
    {
      name = 'github',
      size,
      title,
      spring = false,
      springProps = {},
      animate = false,
      motionComp = false,
      animateProps = {},
      ...rest
    },
    ref
  ) => {
    const StyledIcon = handleIcon[name.toLowerCase()] ?? Code
    const props = title ? { title, size, ...rest } : { size, ...rest }

    if (spring === true) {
      return (
        <animated.span style={springProps}>
          <StyledIcon ref={ref} {...props} />
        </animated.span>
      )
    }

    if (animate === true || motionComp === true) {
      // return <motion.StyledIcon {...animateProps} ref={ref} {...props} />
      return (
        <motion.div {...animateProps}>
          <StyledIcon ref={ref} {...props} />
        </motion.div>
      )
    }

    return <StyledIcon ref={ref} {...props} />
  }
)

export default Icon
