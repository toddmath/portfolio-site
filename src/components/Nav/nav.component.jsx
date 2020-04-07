import React from 'react'
import Helmet from 'react-helmet'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { navLinks } from '@config'
import { useNav } from '@hooks'
import { Menu, NavLinks, Button, ThemeToggle } from '@components'

import {
  StyledContainer,
  StyledNav,
  StyledHamburger,
  StyledHamburgerBox,
  StyledHamburgerInner,
  StyledLink,
  StyledButtonContainer,
} from './nav.styles'

const Nav = () => {
  const { menuOpen, isMounted, scrollDirection, toggleMenu } = useNav()

  return (
    <StyledContainer scrollDirection={scrollDirection}>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <StyledNav role='navigation' id='header-nav' aria-label='Section links'>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames='fade' timeout={3000}>
              <StyledHamburger
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-haspopup='menu'
              >
                <StyledHamburgerBox>
                  <StyledHamburgerInner menuOpen={menuOpen} aria-expanded={menuOpen} />
                </StyledHamburgerBox>
              </StyledHamburger>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLink>
          <NavLinks isMounted={isMounted} />
          <ThemeToggle />

          {/* <StyledList role='list'>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition in={true} key={i} classNames='fade' timeout={3000}>
                    <StyledListItem
                      key={i}
                      style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                      role='listitem'
                      aria-posinset={i + 1}
                    >
                      <StyledListLink role='link' to={url}>
                        {name}
                      </StyledListLink>
                    </StyledListItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </StyledList> */}

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition in={true} classNames='fade' timeout={3000}>
                <StyledButtonContainer delay={navLinks.length * 100 + 100}>
                  <Button outline size='medium' href='/resume.pdf'>
                    Resume
                  </Button>
                </StyledButtonContainer>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLink>
      </StyledNav>

      <Menu
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        aria-expanded={menuOpen}
        aria-haspopup='menu'
      />
    </StyledContainer>
  )
}

export default Nav
