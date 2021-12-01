import React, { memo } from 'react'

import FeaturedLinks from '../featured-links/featured-links.component'
import {
  StyledProject,
  StyledContent,
  StyledProjectName,
  StyledDescription,
  StyledTechList,
  MotionImgContainer,
  StyledFeaturedImg,
} from './featured-projects.styles'

const removeSpaces = key => key && key.replace(/(\s+)/g, '')
const isOdd = i => i % 2 === 1

const variants = {
  initial: {
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    scale: 0.95,
    transition: {
      duration: 0.4,
    },
  },
}

const FeaturedProjects = memo(function FeaturedProjects({ projects }) {
  return projects.map(({ node: { frontmatter, html } }, i) => {
    const { title, external, tech, github, cover } = frontmatter

    return (
      <StyledProject key={removeSpaces(title)}>
        <StyledContent>
          <StyledProjectName>
            <a
              href={external}
              target='_blank'
              rel='nofollow noopener noreferrer'
              aria-label='Live Demo'
            >
              {title}
            </a>
          </StyledProjectName>

          <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />

          {tech ? (
            <StyledTechList>
              {tech.map(technology => (
                <li key={removeSpaces(technology)}>{technology}</li>
              ))}
            </StyledTechList>
          ) : null}

          <FeaturedLinks isOdd={isOdd(i)} github={github} external={external} />
        </StyledContent>

        <MotionImgContainer
          href={external ? external : github ?? '#'}
          target='_blank'
          rel='nofollow noopener noreferrer'
          variants={variants}
          style={{ originX: isOdd(i) ? '80%' : '20%' }}
          whileHover='hover'
        >
          <StyledFeaturedImg fluid={cover.childImageSharp.fluid} />
        </MotionImgContainer>
      </StyledProject>
    )
  })
})

export default FeaturedProjects
