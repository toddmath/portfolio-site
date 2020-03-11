import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { useReducedMotion } from '@hooks'
import { FeaturedLink } from '@components'
import { IconGitHub, IconExternal } from '@components/icons'
import { StyledLinkWrapper } from './featured-links.styles'

const FeaturedLinks = ({ isOdd, github, external }) => {
  const reducedMotion = useReducedMotion()

  return (
    <StyledLinkWrapper isOdd={isOdd}>
      {github && (
        <FeaturedLink isReduced={reducedMotion} to={github} label='Github'>
          <IconGitHub />
        </FeaturedLink>
      )}

      {external && (
        <FeaturedLink isReduced={reducedMotion} to={external} label='External'>
          <IconExternal />
        </FeaturedLink>
      )}
    </StyledLinkWrapper>
  )
}

FeaturedLinks.propTypes = {
  external: PropTypes.string,
  github: PropTypes.string,
  isOdd: PropTypes.bool.isRequired,
}

export default memo(FeaturedLinks)
