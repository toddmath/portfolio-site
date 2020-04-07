import React from 'react'

import { useProgressBar } from '@hooks'
import { ProgressContainer, Progress } from './progress-bar.styles'

const ProgressBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = useProgressBar()

  return (
    <ProgressContainer>
      <Progress scroll={progress} />
    </ProgressContainer>
  )
}

export default ProgressBar
