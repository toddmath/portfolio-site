import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'

import { useTimeout } from '@hooks'

const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const Fade = ({ wait = 1000, children }) => {
  const [isMounted, setIsMounted] = useState(false)
  useTimeout(() => setIsMounted(true), wait)
  // const spring = { type: 'spring', damping: 10, stiffness: 50 }

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          variants={fade}
          initial='initial'
          animate='animate'
          exit='exit'
          layout
          // layout={spring}
          // transition={spring}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Fade.propTypes = {
  wait: PropTypes.number,
  children: PropTypes.node,
}

export default Fade
