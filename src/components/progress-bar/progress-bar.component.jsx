import React from 'react'

import { useProgressBar } from '@hooks'
import { ProgressContainer, Progress } from './progress-bar.styles'

const handleOpacity = n => `${Number(n) + 0.3}`

const ProgressBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = useProgressBar()

  return (
    <ProgressContainer>
      <Progress style={{ '--scroll': progress, '--opacity': handleOpacity(progress) }} />
    </ProgressContainer>
  )
}

export default ProgressBar
