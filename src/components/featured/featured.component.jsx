import React, { useRef } from 'react'

// import { useReveals, useFeaturedQuery } from '@hooks'
import { useFeaturedQuery } from '@hooks'
import { ProjectLink, FeaturedLinks } from '@components'
import { Heading } from '@styles'

import {
  StyledContainer,
  StyledContent,
  StyledProjectName,
  StyledDescription,
  StyledTechList,
  StyledFeaturedImg,
  StyledImgContainer,
  StyledProject,
} from './featured.styles'

const cleanKey = key => key.replace(/(\s+)/g, '')
const isOdd = i => i % 2 === 1

export default function Featured() {
  const revealTitles = useRef([])
  const revealDescriptions = useRef([])
  const featuredProjects = useFeaturedQuery()

  // useReveals(revealTitles)
  // useReveals(revealDescriptions, { delay: 280, distance: '0px', opacity: 0.25 })
  const handleRefs = (ref, array) => array.current.push(ref)

  return (
    <StyledContainer
      maxWidth='1045px'
      bigDesktopStyles={`max-width: 845px;`}
      desktopStyles={`max-width: 696px;`}
    >
      <Heading id='projects' ref={ref => handleRefs(ref, revealTitles)}>
        Some Things I&apos;ve Built
      </Heading>

      <div>
        {featuredProjects &&
          featuredProjects.map(({ node: { frontmatter: fm, html } }, i) => (
            <StyledProject key={cleanKey(fm.title)}>
              <StyledContent>
                <StyledProjectName ref={ref => handleRefs(ref, revealTitles)}>
                  {fm.external ? (
                    <ProjectLink to={fm.external} label='Demo'>
                      {fm.title}
                    </ProjectLink>
                  ) : (
                    fm.title
                  )}
                </StyledProjectName>

                <StyledDescription
                  ref={ref => handleRefs(ref, revealDescriptions)}
                  dangerouslySetInnerHTML={{ __html: html }}
                />

                {fm.tech && (
                  <StyledTechList>
                    {fm.tech.map(technology => (
                      <li key={cleanKey(technology)}>{technology}</li>
                    ))}
                  </StyledTechList>
                )}

                <FeaturedLinks isOdd={isOdd(i)} github={fm.github} external={fm.external} />
              </StyledContent>

              <StyledImgContainer
                href={fm.external ? fm.external : fm.github || '#'}
                target='_blank'
                rel='nofollow noopener noreferrer'
              >
                <StyledFeaturedImg fluid={fm.cover.childImageSharp.fluid} />
              </StyledImgContainer>
            </StyledProject>
          ))}
      </div>
    </StyledContainer>
  )
}
