import React, { memo } from 'react'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { AnimatePresence } from 'framer-motion'

// import { Fade } from '@components'
import { navLinks } from '@config'
// import { theme } from '@styles'
import { MotionNavList, MotionNavListItem, NavWrapper, NavLink } from './nav-links.styles'

// const { flat } = theme

// const spring = {
//   type: 'spring',
//   damping: 10,
//   stiffness: 40,
// }

const variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const parent = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const NavLinks = memo(function NavLinks({ isMounted }) {
  // const isMountedHasLinks = isMounted && !!navLinks

  return (
    <AnimatePresence>
      {isMounted ? (
        <MotionNavList variants={parent} initial='initial' animate='visible'>
          {navLinks.map(({ url, name }, i) => (
            <MotionNavListItem
              key={`NavLink-${name}`}
              initial='initial'
              variants={variants}
              layout={true}
              aria-posinset={i + 1}
            >
              <NavWrapper
                style={{ originX: 0.1 }}
                whileHover={{ x: 4, scale: 1.1 }}
                layout={true}
              >
                <NavLink to={url}>{name}</NavLink>
              </NavWrapper>
            </MotionNavListItem>
          ))}
        </MotionNavList>
      ) : null}
    </AnimatePresence>
  )
})

export default NavLinks
