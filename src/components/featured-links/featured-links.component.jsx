import React, { memo } from 'react'
import T from 'prop-types'
import { useReducedMotion } from 'framer-motion'

import { FeaturedLink } from '@components'
import { FormattedIcon } from '@components/icons'
import { LinkWrapper } from './featured-links.styles'

// const variant = {
//   initial: {
//     scale: 1.0,
//     color: 'var(--interactive-normal)',
//     strokeWidth: '1.5px',
//     transition: { type: 'spring', duration: 0.2 },
//   },
//   hover: {
//     scale: 1.3,
//     color: 'var(--text-link)',
//     strokeWidth: '1.75px',
//     transition: { type: 'spring', duration: 0.4 },
//   },
// }

function FeaturedLinks({ isodd = 'true', github, external }) {
  const reducedMotion = useReducedMotion()
  /* const [isHovered, setIsHovered] = useState(false)
  const onHover = () => {
    setIsHovered(true)
  }
  const onLeave = () => {
    setIsHovered(false)
  } */

  return (
    <LinkWrapper
      // layout
      $isodd={isodd}
      // variants={variant}
      // initial={fase}
      // onFocus={onHover}
      // onBlur={onLeave}
      // onMouseOver={onHover}
      // onMouseLeave={onLeave}
    >
      {github ? (
        <FeaturedLink
          isReduced={reducedMotion}
          // isHovered={isHovered}
          to={github}
          label='Github'
          // variants={variant}
          // intial='initial'
          // animate={isHovered ? 'hover' : 'initial'}
        >
          <FormattedIcon name='github' title='Github Repo' size='24' />
        </FeaturedLink>
      ) : null}

      {external ? (
        <FeaturedLink
          isReduced={reducedMotion}
          // isHovered={isHovered}
          to={external}
          label='External'
          // variants={variant}
        >
          <FormattedIcon name='external' title='Project Page' size='24' />
        </FeaturedLink>
      ) : null}
    </LinkWrapper>
  )
}

FeaturedLinks.propTypes = {
  isodd: T.oneOf(['false', 'true']),
  github: T.string,
  external: T.string,
}

export default memo(FeaturedLinks)
