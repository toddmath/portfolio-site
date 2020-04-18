import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

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
                  gatsbyImageData(
                    width: 600
                    quality: 90
                    tracedSVGOptions: { color: "#4a83ff" }
                    placeholder: TRACED_SVG
                    layout: CONSTRAINED
                  )
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

  const image = getImage(data.allMarkdownRemark.edges[0].node.frontmatter.avatar)

  const {
    frontmatter: {
      title,
      skills,
      // avatar: {
      //   childImageSharp: { fluid },
      // },
    },
    html,
  } = data.allMarkdownRemark.edges[0].node

  return {
    title,
    skills,
    image,
    html,
  }
}

export default useAboutQuery
