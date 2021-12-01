import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { navLinks } from '@config'
// import { mixins } from '@styles'
// import { Button } from '@components'

import {
  Sidebar,
  StyledContainer,
  AsideNav,
  AsideNavList,
  AsideNavItem,
  AsideNavLink,
  StyledResumeButton,
} from './menu.styles'

const cleanKey = k => String(k).trim().toLowerCase()

const parentVar = {
  initial: {},
  hover: {},
}

// const childVar = {
//   initial: {
//     color: 'var(--interactive-normal)',
//     backgroundPosition: '0%',
//     x: 0,
//     transition: {
//       x: { type: 'spring', stiffness: 80, damping: 20 },
//       backgroundPosition: { type: 'spring', damping: 100, stiffness: 80, restSpeed: 0.8 },
//     },
//   },
//   hover: {
//     color: 'var(--background-secondary-alt)',
//     backgroundPosition: '100%',
//     x: 25.6,
//     transition: {
//       x: { type: 'spring', damping: 9 },
//       backgroundPosition: { type: 'spring', damping: 20, stiffness: 120 },
//     },
//   },
// }

const childVar = {
  initial: {
    originX: 0.1,
    x: 0,
    scale: 1,
    // color: 'var(--interactive-normal)',
  },
  hover: {
    originX: 0.1,
    x: 4,
    scale: 1.1,
    // color: 'var(--interactive-hover)',
  },
}

const Menu = memo(function Menu({ menuOpen, toggleMenu }) {
  const onMenuClick = evt => {
    if (evt) evt.preventDefault()
    const { target } = evt
    const isNotMenu = !!target.classList[0]?.includes('StyledContainer')

    if (target.hasAttribute('href') || isNotMenu) {
      toggleMenu()
    }
  }

  return (
    <StyledContainer
      menuOpen={menuOpen}
      onClick={onMenuClick}
      aria-hidden={!menuOpen}
      aria-expanded={menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <AsideNav>
          <AsideNavList role='list'>
            {navLinks?.map(({ url, name }) => (
              <AsideNavItem
                role='listitem'
                key={cleanKey(name)}
                variants={parentVar}
                whileHover='hover'
                initial='initial'
              >
                <AsideNavLink role='link' to={url} variants={childVar} initial='initial'>
                  {name}
                </AsideNavLink>
              </AsideNavItem>
            ))}
          </AsideNavList>
          <StyledResumeButton responsive={true} href='/resume.pdf'>
            Resume
          </StyledResumeButton>
        </AsideNav>
      </Sidebar>
    </StyledContainer>
  )
})

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default Menu

/*
const Menu = memo(function Menu({ menuOpen, toggleMenu }) {
  const onMenuClick = evt => {
    if (evt) evt.preventDefault()
    const { target } = evt
    const isNotMenu = !!target.classList[0]?.includes('StyledContainer')

    if (target.hasAttribute('href') || isNotMenu) {
      toggleMenu()
    }
  }

  return (
    <StyledContainer
      menuOpen={menuOpen}
      onClick={onMenuClick}
      aria-hidden={!menuOpen}
      aria-expanded={menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <AsideNav>
          <AsideNavList role='list'>
            {navLinks?.map(({ url, name }) => (
              <AsideNavItem
                role='listitem'
                key={cleanKey(name)}
                variants={parentVar}
                whileHover='hover'
                initial='initial'
              >
                <AsideNavLink role='link' to={url} variants={childVar} initial='initial'>
                  {name}
                </AsideNavLink>
              </AsideNavItem>
            ))}
          </AsideNavList>
          <StyledResumeButton responsive={true} href='/resume.pdf'>
            Resume
          </StyledResumeButton>
        </AsideNav>
      </Sidebar>
    </StyledContainer>
  )
})
*/
