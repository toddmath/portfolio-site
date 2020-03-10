import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          url
          startUrl
          keyWords
          language
          author {
            name
            location
            email
            github
            twitter
          }
          themeBg
          themeFg
        }
      }
    }
  `)

  return site.siteMetadata
}

export default useSiteMetadata
