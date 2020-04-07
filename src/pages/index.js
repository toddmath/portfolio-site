import React from 'react'
import PropTypes from 'prop-types'

// import { Main } from '@styles'
// import { ThemeToggleProvider } from '@context'
import { Layout, Hero, About, Featured, Projects, Contact } from '@components'

const IndexPage = ({ location }) => (
  <Layout id='content' location={location}>
    <Hero />
    <About />
    <Featured />
    <Projects />
    <Contact />
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object,
}

export default IndexPage
