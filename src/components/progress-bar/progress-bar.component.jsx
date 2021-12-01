import React from 'react'
import { useViewportScroll, useTransform, useSpring } from 'framer-motion'

import { ProgressContainer, Progress } from './progress-bar.styles'

function ProgressBar() {
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 25, mass: 1 })

  return (
    <ProgressContainer>
      <Progress style={{ scaleX, opacity }} />
    </ProgressContainer>
  )
}

export default ProgressBar
