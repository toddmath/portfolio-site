import React, { memo } from 'react'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { AnimatePresence } from 'framer-motion'

// import { Fade } from '@components'
import { navLinks } from '@config'
import { MotionNavList, MotionNavListItem, NavLink } from './nav-links.styles'

const NavLinks = ({ isMounted }) => {
  // const spring = { type: 'spring', damping: 8, stiffness: 65 }
  // const list = {
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       when: 'beforeChildren',
  //       staggerChildren: 0.3,
  //     },
  //   },
  // }
  const variants = {
    visible: custom => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <MotionNavList role='list'>
      <AnimatePresence>
        {isMounted &&
          navLinks &&
          navLinks.map(({ url, name }, i) => (
            <MotionNavListItem
              key={`NavLink-${name}`}
              initial={{ opacity: 0 }}
              custom={i}
              animate='visible'
              variants={variants}
              // layoutTransition={spring}
              // transition={spring}
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
