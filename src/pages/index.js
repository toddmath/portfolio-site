import React from 'react'
import PropTypes from 'prop-types'

// import { Main } from '@styles'
// import { ThemeToggleProvider } from '@context'
import { Layout, Hero, About, Featured, Projects, Contact } from '@components'
import { useSal } from '@hooks'

const IndexPage = ({ location }) => {
  useSal()

  return (
    <Layout id='content' location={location}>
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object,
}

export default IndexPage
