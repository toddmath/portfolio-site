import React from 'react'

import { useProgressBar } from '@hooks'
import { ProgressContainer, Progress } from './progress-bar.styles'

const ProgressBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = useProgressBar()

  return (
    <ProgressContainer>
      <Progress style={{ '--scroll': progress, '--opacity': `${Number(progress) + 0.3}` }} />
    </ProgressContainer>
  )
}

export default ProgressBar
