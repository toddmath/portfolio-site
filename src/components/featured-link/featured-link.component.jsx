import React, { memo } from 'react'
import T from 'prop-types'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
  hover: {
    scale: 1.3,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
}

const FeaturedLink = memo(function FeaturedLink({
  to,
  label,
  isReduced = false,
  children,
}) {
  return (
    <motion.a
      href={to}
      target='_blank'
      rel='nofollow noopener noreferrer'
      aria-label={`Go to ${label}`}
      variants={variants}
      initial='initial'
      whileHover={!isReduced ? 'hover' : 'initial'}
    >
      {children}
    </motion.a>
  )
})

FeaturedLink.propTypes = {
  children: T.node,
  label: T.string,
  isReduced: T.bool.isRequired,
  to: T.string.isRequired,
}

export default FeaturedLink
