import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Layout, Hero, About, Featured, Contact } from '@components'
import { useSal } from '@hooks'
// import { Background, particlesParams } from '@styles'
import { consoleStyles, smallConsoleStyles } from '@styles/mixins'
// import octocat from '@images/Octocat.jpg'

function IndexPage({ location }) {
  useSal()

  useEffect(() => {
    console.group('%c👋 Hey there!', consoleStyles)
    console.log(
      '%cFeel free to check out my source code https://github.com/toddmath/portfolio-site',
      smallConsoleStyles
    )
    console.groupEnd()
  }, [])

  return (
    <Layout id='content' location={location}>
      <Hero />
      <Featured />
      <About />
      <Contact />
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object,
}

export default IndexPage
