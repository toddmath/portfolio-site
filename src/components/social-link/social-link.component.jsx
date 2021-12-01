import React, { memo } from 'react'
import T from 'prop-types'

import { Icon } from '@components/icons'
import { MotionLink } from './social-link.styles'

const variants = {
  initial: {
    scale: 1,
  },
  linkHover: {
    scale: 1.1,
    transition: {
      type: 'spring',
    },
  },
  hover: {
    scale: 1.5,
    transition: {
      type: 'spring',
    },
  },
}

const SocialLink = memo(function SocialLink({ url, name, listHovered }) {
  return (
    <MotionLink
      href={url}
      aria-label={name}
      target='_blank'
      rel='nofollow noopener noreferrer'
      variants={variants}
      initial='initial'
      whileHover='linkHover'
      layout
      animate={listHovered ? 'hover' : 'initial'}
      // custom={listHovered}
    >
      <Icon name={name} size='24' />
    </MotionLink>
  )
})

// const SocialLink = memo(function ({ url, name, isHovered }) {
//   const [linkHovered, setLinkHovered] = useState(false)
//   const handleOnOver = useCallback(() => setLinkHovered(true), [])
//   const handleOnOut = useCallback(() => setLinkHovered(false), [])

//   const props = useSpring({
//     scale: isHovered ? (linkHovered ? '1.1' : '1.5') : '1',
//     // opacity: isHovered ? 1 : 0.9,
//     strokeWidth: isHovered ? (linkHovered ? '1.5' : '1.0') : '1.5',
//     config: mixins.getSpringConfig(linkHovered),
//   })

//   return (
//     <StyledLink
//       href={url}
//       aria-label={name}
//       target='_blank'
//       rel='nofollow noopener noreferrer'
//       onMouseOver={handleOnOver}
//       onFocus={handleOnOver}
//       onMouseLeave={handleOnOut}
//       onBlur={handleOnOut}
//       style={props}
//     >
//       <Icon name={name} size='24' />
//     </StyledLink>
//   )
// })

SocialLink.propTypes = {
  name: T.string,
  url: T.string.isRequired,
}

export default SocialLink

/*
<StyledLink
  href={url}
  aria-label={name}
  target='_blank'
  rel='nofollow noopener noreferrer'
  onMouseOver={handleOnOver}
  onFocus={handleOnOver}
  onMouseLeave={handleOnOut}
  onBlur={handleOnOut}
  style={props}
>
  <Icon name={name} size='24' />
</StyledLink>
*/
