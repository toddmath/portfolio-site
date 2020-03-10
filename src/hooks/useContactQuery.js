import { useStaticQuery, graphql } from 'gatsby'

export function useContactQuery() {
  const data = useStaticQuery(graphql`
    query contact {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `)

  const {
    frontmatter: { title },
    html,
  } = data.allMarkdownRemark.edges[0].node

  return { title, html }
}

export default useContactQuery
