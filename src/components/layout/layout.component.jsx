import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Head, Nav, Social, Email, Footer } from '@components'
import { GlobalStyle } from '@styles'

import { StyledContent } from './layout.styles'

const Layout = ({ children }) => (
  <div id='root'>
    <Head />
    <GlobalStyle />
    <StyledContent id='content'>
      <Nav />
      <Social />
      <Email />
      {children}
      <Footer />
    </StyledContent>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(Layout)
