import React, { memo } from 'react'
import T from 'prop-types'

import { TechUl, TechItem } from './tech-list.styles'

const TechList = ({ tech }) => (
  <TechUl role='list'>
    {tech.length &&
      tech.map(t => (
        <TechItem key={t} role='listitem'>
          {t}
        </TechItem>
      ))}
  </TechUl>
)

TechList.propTypes = {
  tech: T.arrayOf(T.string),
}

export default memo(TechList)
