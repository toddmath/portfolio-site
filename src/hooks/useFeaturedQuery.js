import { useStaticQuery, graphql } from 'gatsby'

export function useFeaturedQuery() {
  const data = useStaticQuery(graphql`
    query featured {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#4a83ff" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
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

  const featuredProjects = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.show === 'true'
  )

  return featuredProjects
}

export default useFeaturedQuery
