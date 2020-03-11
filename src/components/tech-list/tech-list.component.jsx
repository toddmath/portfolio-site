import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { StyledTechList, StyledTechItem } from './tech-list.styles'

const TechList = ({ tech }) => (
  <StyledTechList role='list'>
    {tech.length &&
      tech.map(t => (
        <StyledTechItem key={t} role='listitem'>
          {t}
        </StyledTechItem>
      ))}
  </StyledTechList>
)

TechList.propTypes = {
  tech: PropTypes.arrayOf(PropTypes.string),
}

export default memo(TechList)
