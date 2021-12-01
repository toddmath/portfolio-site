import React from 'react'
import { motion, useReducedMotion, useViewportScroll, useTransform } from 'framer-motion'

export default function Parallax({ children, config = [0, -0.2], ...rest }) {
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useViewportScroll()

  const y = useTransform(scrollY, [0, 1], config, {
    clamp: false,
  })

  return (
    <motion.div style={{ y: shouldReduceMotion ? 0 : y }} {...rest}>
      {children}
    </motion.div>
  )
}
