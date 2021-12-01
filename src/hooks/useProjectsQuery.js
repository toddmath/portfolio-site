import { useStaticQuery, graphql } from 'gatsby'

/**
 * Custom react hook. Wrapper around Gatsby's `useStaticQuery`
 * @param {number} gridLimit Maximum projects to show in the grid.
 * @returns {array} Projects
 */
export default function useProjectsQuery(gridLimit = 6) {
  const data = useStaticQuery(graphql`
    query projects {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
              show
            }
            html
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.show === 'true'
  )

  const firstProjects = projects.slice(0, gridLimit)

  return [projects, firstProjects]
}
