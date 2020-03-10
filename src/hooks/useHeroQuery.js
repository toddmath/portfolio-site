import { useStaticQuery, graphql } from 'gatsby'

export function useHeroQuery() {
  const data = useStaticQuery(graphql`
    query hero {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
        edges {
          node {
            frontmatter {
              title
              name
              subtitle
              contactText
            }
            html
          }
        }
      }
    }
  `)

  const {
    frontmatter: { title, name, subtitle, contactText },
    html,
  } = data.allMarkdownRemark.edges[0].node

  return { title, name, subtitle, contactText, html }
}

export default useHeroQuery
