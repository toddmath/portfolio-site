import React from 'react'
import PT from 'prop-types'

import { Nav, Social, Email, Footer, ProgressBar, Head } from '@components'
import { Main as StyledMain, MainGrid, GlobalStyle } from '@styles'
// import { useResizeObserver } from '@hooks'

function Layout({ children }) {
  // const { ref, width, height } = useResizeObserver({})

  return (
    <StyledMain>
      <Head />
      <GlobalStyle />
      <MainGrid id='root' counter='section' title='Home'>
        <ProgressBar />
        <Nav />
        <Social />
        <Email />
        {children}
        <Footer />
      </MainGrid>
    </StyledMain>
  )
}

Layout.propTypes = {
  children: PT.node,
}

export default Layout
