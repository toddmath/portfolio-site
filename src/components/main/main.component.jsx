import React from 'react'

import { Nav, Social, Email, Footer, CSSDebugger, ProgressBar } from '@components'
import { Main as StyledMain } from '@styles'

const Main = ({ children }) => (
  <StyledMain id='root' counter='section' title='Home'>
    <ProgressBar />
    {/* <CSSDebugger /> */}
    <Nav />
    <Social />
    <Email />
    {children}
    <Footer />
  </StyledMain>
)

export default Main
