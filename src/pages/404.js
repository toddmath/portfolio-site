import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Main, Section, Heading, Button } from '@styles'

function FourZeroFour() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Page Not Found</title>
        <html lang='en' />
        <meta name='description' content='Page not found' />
      </Helmet>
      <Main>
        <Section>
          <Heading>
            Sorry, this path does not exist&nbsp;
            <span role='img' aria-label='sad face'>
              😞
            </span>
          </Heading>
          <p>
            <Link to='/'>
              <Button>Go back</Button>
            </Link>
          </p>
        </Section>
      </Main>
    </>
  )
}

export default FourZeroFour
