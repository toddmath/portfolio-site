import React from 'react'
import Helmet from 'react-helmet'

// import { navLinks } from '@config'
import { useNav } from '@hooks'
import { Menu, NavLinks, Button, ThemeToggle, Fade } from '@components'

import {
  Header,
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
    <Header scrollDirection={scrollDirection}>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <StyledNav role='navigation' id='header-nav' aria-label='Section links'>
        <Fade>
          <StyledHamburger onClick={toggleMenu} aria-expanded={menuOpen} aria-haspopup='menu'>
            <StyledHamburgerBox>
              <StyledHamburgerInner menuOpen={menuOpen} aria-expanded={menuOpen} />
            </StyledHamburgerBox>
          </StyledHamburger>
        </Fade>

        <StyledLink>
          <NavLinks isMounted={isMounted} />
          <ThemeToggle />

          <Fade wait={0}>
            <StyledButtonContainer>
              <Button outline size='medium' href='/resume.pdf'>
                Resume
              </Button>
            </StyledButtonContainer>
          </Fade>
        </StyledLink>
      </StyledNav>

      <Menu
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        aria-expanded={menuOpen}
        aria-haspopup='menu'
      />
    </Header>
  )
}

export default Nav

/*
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

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition in={true} classNames='fade' timeout={3000}>
              <StyledButtonContainer $delay={navLinks.length * 100 + 200}>
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
*/
