import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// import T from 'prop-types'

import { useBoolean, useTimeout } from '@hooks'

const variants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { type: 'tween', duration: 1.5 },
  },
  exit: {
    opacity: 0,
    transition: { type: 'tween', duration: 1 },
  },
}

const Fade = ({
  wait = 1000,
  springConfig = { type: 'spring', damping: 10, stiffness: 50 },
  children,
}) => {
  const { isToggled: isMounted, setTrue } = useBoolean(false)
  useTimeout(setTrue, +wait)

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          variants={variants}
          initial='initial'
          animate='show'
          exit='exit'
          transition={springConfig}
          // layout
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Fade.propTypes = {
//   wait: T.number,
//   springConfig: T.shape({
//     type: T.string,
//     damping: T.number,
//     stiffness: T.number,
//     duration: T.oneOfType([T.string, T.number]),
//   }),
//   children: T.node,
// }

export default Fade
