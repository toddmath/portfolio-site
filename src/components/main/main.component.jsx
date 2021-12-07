import React from 'react'

import { Nav, Social, Email, Footer, ProgressBar } from '@components'
import { Main as StyledMain } from '@styles'

function Main({ children }) {
  return (
    <StyledMain id='root' counter='section' title='Home'>
      <ProgressBar />
      <Nav />
      <Social />
      <Email />
      {children}
      <Footer />
    </StyledMain>
  )
}

export default Main
