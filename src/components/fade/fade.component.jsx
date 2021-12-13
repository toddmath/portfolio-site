import React, { useState } from 'react'
import T from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'

import { useTimeout } from '@hooks'

const fade = {
  initial: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.3 },
  },
  animate: {
    opacity: 1,
    scale: 1.0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.3 },
  },
}

function Fade({ wait = 1000, children }) {
  const [isMounted, setIsMounted] = useState(false)
  useTimeout(() => setIsMounted(true), wait)

  return (
    <AnimatePresence exitBeforeEnter>
      {isMounted ? (
        <motion.div
          variants={fade}
          initial='initial'
          animate='animate'
          exit='exit'
          // layout
          // layout={spring}
          // transition={spring}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

Fade.propTypes = {
  wait: T.number,
  children: T.node.isRequired,
}

export default Fade
