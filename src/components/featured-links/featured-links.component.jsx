import T from 'prop-types'
import React, { memo } from 'react'

import { useReducedMotion } from '@hooks'
import FeaturedLink from '../featured-link/featured-link.component'
import { Icon } from '@components/icons'
import { StyledLinkWrapper } from './featured-links.styles'

const FeaturedLinks = memo(function FeaturedLinks({ isOdd, github, external }) {
  const reducedMotion = useReducedMotion()

  const Github = (
    <FeaturedLink isReduced={reducedMotion} to={github} label='github'>
      <Icon name='github' size='26' strokeWidth='1.5' title='github' />
    </FeaturedLink>
  )
  const External = (
    <FeaturedLink isReduced={reducedMotion} to={external} label='external'>
      <Icon name='linkexternal' size='26' strokeWidth='1.5' title='external' />
    </FeaturedLink>
  )

  return (
    <StyledLinkWrapper $isOdd={isOdd}>
      {github ? <Github /> : null}
      {external ? <External /> : null}
    </StyledLinkWrapper>
  )
})

FeaturedLinks.propTypes = {
  external: T.string,
  github: T.string,
  isOdd: T.bool.isRequired,
}

export default FeaturedLinks
// export default memo(FeaturedLinks)
