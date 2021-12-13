import React from 'react'
import T from 'prop-types'
import { motion } from 'framer-motion'

const variant = {
  initial: {
    scale: 1.0,
    // color: 'var(--interactive-normal)',
    strokeWidth: '1.5px',
    transition: { type: 'spring', duration: 0.2 },
  },
  linkHover: {
    // scale: 1.3,
    scale: 1.0,
    // color: 'var(--text-link)',
    strokeWidth: '2px',
    transition: { duration: 0.2 },
  },
  hover: {
    scale: 1.2,
    // color: 'var(--text-link)',
    strokeWidth: '1.75px',
    transition: { type: 'spring', duration: 0.3 },
  },
  stroke: {
    // color: 'var(--interactive-hover)',
    strokeWidth: '2px',
  },
}

function FeaturedLink({ to, label, isReduced = false, children }) {
  return (
    <motion.a
      key={to}
      layout
      href={to}
      target='_blank'
      rel='nofollow noopener noreferrer'
      aria-label={label + ' profile'}
      variants={variant}
      initial='initial'
      whileHover={isReduced ? 'stroke' : 'hover'}
      // animate={isHovered ? 'linkHover' : 'hover'}
      // style={{ transition: 'color 400 ease, background-color 400ms ease' }}
      // animate={isReduced ? 'stroke' : 'hover'}
      // style={{ strokeWidth: '1.5' }}
    >
      {children}
    </motion.a>
  )
}

FeaturedLink.propTypes = {
  to: T.string.isRequired,
  label: T.string.isRequired,
  isReduced: T.bool,
  children: T.node,
}

export default FeaturedLink
