import { useStaticQuery, graphql } from 'gatsby'

export function useAboutQuery() {
  const data = useStaticQuery(graphql`
    query about {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            frontmatter {
              title
              avatar {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 90, traceSVG: { color: "#4a83ff" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              skills
            }
            html
          }
        }
      }
    }
  `)

  const {
    frontmatter: {
      title,
      skills,
      avatar: {
        childImageSharp: { fluid },
      },
    },
    html,
  } = data.allMarkdownRemark.edges[0].node

  return {
    title,
    skills,
    fluid,
    html,
  }
}

export default useAboutQuery
