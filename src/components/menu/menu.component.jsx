import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { navLinks } from '@config'
import { Sidebar, NavList, StyledContainer, NavLinks, NavLink, NavItem, Resume } from './menu.styles'

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
        <NavLinks>
          <NavList role='list'>
            {navLinks?.map(({ url, name }) => (
              <NavItem role='listitem' key={name.trim().toLowerCase()}>
                <NavLink role='link' to={url}>
                  {name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
          <Resume href='/resume.pdf' target='_blank' rel='nofollow noopener noreferrer'>
            Resume
          </Resume>
        </NavLinks>
      </Sidebar>
    </StyledContainer>
  )
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default memo(Menu)
