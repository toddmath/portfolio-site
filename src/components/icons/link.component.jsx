import React from 'react'
import { animated, useTransition } from 'react-spring'
// import { motion } from 'framer-motion'
import { Link as ExternalLink } from '@styled-icons/feather'

const LinkIcon = ({ size = '18', isHovered, children, ...rest }) => {
  // const props = title ? { title, size, ...rest } : { size, ...rest }

  // const animateProps = useSpring({
  //   opacity: isHovered ? 1 : 0,
  // })

  const transitions = useTransition(isHovered, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.span key={key} style={props}>
          {children}
          <ExternalLink size={size} {...rest} />
        </animated.span>
      )
  )

  // return (
  //   <animated.span style={animateProps}>
  //     {children}
  //     <ExternalLink size={size} {...rest} />
  //   </animated.span>
  // )
}

export default LinkIcon
