import React from 'react'
import { useViewportScroll, useSpring } from 'framer-motion'

import { ProgressContainer, Progress } from './progress-bar.styles'

const ProgressBar = () => {
  const { scrollYProgress } = useViewportScroll()
  const x = useSpring(scrollYProgress, { duration: 0.05 })

  return (
    <ProgressContainer>
      <Progress style={{ scaleX: x }} />
    </ProgressContainer>
  )
}

export default ProgressBar
