import React, { memo } from 'react'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { AnimatePresence } from 'framer-motion'

// import { Fade } from '@components'

import { navLinks } from '@config'
import { MotionNavList, MotionNavListItem, NavLink } from './nav-links.styles'

const variants = {
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
}

const NavLinks = ({ isMounted }) => {
  return (
    <MotionNavList role='list'>
      <AnimatePresence>
        {isMounted &&
          navLinks.map(({ url, name }, i) => (
            <MotionNavListItem
              key={`NavLink-${name}`}
              // layout
              // layoutId={`NavLink-${name}`}
              initial='initial'
              exit='exit'
              custom={i}
              animate='visible'
              variants={variants}
              role='listitem'
              aria-posinset={i + 1}
            >
              <NavLink role='link' to={url}>
                {name}
              </NavLink>
            </MotionNavListItem>
          ))}
      </AnimatePresence>
    </MotionNavList>
  )
}

export default memo(NavLinks)
