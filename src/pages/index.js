import React from 'react'
import PropTypes from 'prop-types'

import { Main } from '@styles'
import { Layout, Hero, About, Featured, Projects, Contact } from '@components'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Main counter='section' aria-label='Main content' title='Home'>
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </Main>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object,
}

export default IndexPage
