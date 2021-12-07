import React, { memo } from 'react'
import T from 'prop-types'

import { motion } from 'framer-motion'

const transition = {
  type: 'spring',
  stiffness: 300,
}

const variant = {
  initial: {
    scale: 1.0,
    transition,
  },
  hover: {
    scale: 1.3,
    transition: {
      ...transition,
      damping: 15,
    },
  },
}

const FeaturedLink = ({ to, label, isReduced = false, children }) => (
  <motion.a
    href={to}
    target='_blank'
    rel='nofollow noopener noreferrer'
    aria-label={`Go to ${label}`}
    variants={variant}
    initial='initial'
    whileHover={!isReduced ? 'hover' : 'initial'}
  >
    {children}
  </motion.a>
)

FeaturedLink.propTypes = {
  children: T.node,
  label: T.string,
  isReduced: T.bool.isRequired,
  to: T.string.isRequired,
}

export default memo(FeaturedLink)
