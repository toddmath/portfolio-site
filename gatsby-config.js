const config = require('./src/config')
const path = require('path')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    url: config.siteUrl,
    startUrl: config.startUrl,
    keyWords: config.siteKeywords,
    language: config.siteLanguage,
    author: {
      name: config.name,
      location: config.location,
      email: config.email,
      github: config.github,
      twitter: config.twitterHandle,
      socialMedia: config.socialMedia,
    },
    themeBg: config.background,
    themeFg: config.main,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@config': path.resolve(__dirname, 'src/config'),
          '@content': path.resolve(__dirname, 'src/content'),
          '@fonts': path.resolve(__dirname, 'src/fonts'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@context': path.resolve(__dirname, 'src/context'),
        },
        extensions: ['js', 'jsx', 'md'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-lodash',
      options: {
        disabledFeatures: ['exotics'],
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true,
        fileName: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteShortName,
        description: config.siteDescription,
        lang: config.siteLanguage,
        start_url: config.startUrl,
        background_color: config.background,
        theme_color: config.main,
        display: `standalone`,
        theme_color_in_head: false,
        icons: [],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1100,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
