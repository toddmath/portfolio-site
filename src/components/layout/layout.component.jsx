import React from 'react'
import PropTypes from 'prop-types'

import { Head, Main } from '@components'
import { GlobalStyle } from '@styles'

const Layout = ({ children }) => (
  <Main>
    <Head />
    <GlobalStyle />
    <>{children}</>
  </Main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
