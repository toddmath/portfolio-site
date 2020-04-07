import React, { memo } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { navLinks } from '@config'
import { NavList, NavListItem, NavLink } from './nav-links.styles'

const NavLinks = ({ isMounted }) => (
  <NavList role='list'>
    <TransitionGroup component={null}>
      {isMounted &&
        navLinks &&
        navLinks.map(({ url, name }, i) => (
          <CSSTransition in={true} key={i} classNames='fade' timeout={3000}>
            <NavListItem
              key={i}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              role='listitem'
              aria-posinset={i + 1}
            >
              <NavLink role='link' to={url}>
                {name}
              </NavLink>
            </NavListItem>
          </CSSTransition>
        ))}
    </TransitionGroup>
  </NavList>
)

export default memo(NavLinks)
