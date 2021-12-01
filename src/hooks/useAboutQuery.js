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
                    width: 900
                    quality: 90
                    tracedSVGOptions: { color: "#4a83ff" }
                    placeholder: TRACED_SVG
                    layout: CONSTRAINED
                    formats: [AUTO, WEBP, AVIF]
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

  const { node } = data.allMarkdownRemark.edges[0]
  const image = getImage(node.frontmatter.avatar)

  const {
    frontmatter: { title, skills },
    html,
  } = node

  return {
    title,
    skills,
    image,
    html,
  }
}

export default useAboutQuery
