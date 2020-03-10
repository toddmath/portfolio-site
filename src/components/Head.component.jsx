import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { useSiteMetadata } from '@hooks'

const Head = ({ description, title }) => {
  const data = useSiteMetadata()
  const metaDescription = description || data.description
  const metaTitle = title || data.title

  return (
    <Helmet>
      <html lang='en' prefix='og: http://ogp.me/ns#' />
      <title itemProp='name' lang='en'>
        {metaTitle}
      </title>
      <link rel='canonical' href={data.url} />

      <meta name='description' content={metaDescription} />
      <meta name='keywords' content={data.siteKeywords} />
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={data.url} />
      <meta property='og:site_name' content={metaTitle} />
      <meta property='og:locale' content={data.language} />
      <meta itemProp='name' content={metaTitle} />
      <meta itemProp='description' content={metaDescription} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={data.url} />
      <meta name='twitter:site' content={data.author.twitter} />
      <meta name='twitter:creator' content={data.author.twitter} />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:description' content={metaDescription} />

      <meta name='msapplication-TileColor' content={data.themeBg} />
      <meta name='theme-color' content={data.themeFg} />
    </Helmet>
  )
}

Head.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default Head
