import React from 'react'

import { Nav, Social, Email, Footer, ProgressBar } from '@components'
import { Main as StyledMain, MainGrid, GlobalStyle } from '@styles'

export default function Main({ children }) {
  return (
    <StyledMain id='root' counter='section' title='Home'>
      {/* <CSSDebugger /> */}
      <GlobalStyle />
      <MainGrid counter='section'>
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

/*
<Background bg={true} width={width} height={height <= 0 ? 0 : height - 4} />
*/
