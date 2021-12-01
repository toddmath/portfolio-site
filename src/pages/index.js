import React from 'react'
import T from 'prop-types'

import { Layout, Hero, About, Featured, Contact } from '@components'
import { useSal } from '@hooks'

function IndexPage({ location }) {
  useSal()

  return (
    <Layout id='content' location={location}>
      <Hero />
      <About />
      <Featured />
      <Contact />
    </Layout>
  )
}

IndexPage.propTypes = {
  location: T.object,
}

export default IndexPage
