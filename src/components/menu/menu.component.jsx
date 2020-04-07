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

const Menu = ({ menuOpen, toggleMenu }) => {
  const onMenuClick = evt => {
    if (evt) evt.preventDefault()
    const { target } = evt
    const { classList } = target
    const isNotMenu = classList && classList[0].includes('StyledContainer')

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
              <AsideNavItem role='listitem' key={name.trim().toLowerCase()}>
                <AsideNavLink role='link' to={url}>
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
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default memo(Menu)
