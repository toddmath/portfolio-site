import React, { useRef } from 'react'

import { useReveals, useFeaturedQuery } from '@hooks'
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

export default function Featured() {
  const revealTitles = useRef([])
  const revealDescriptions = useRef([])
  const featuredProjects = useFeaturedQuery()

  useReveals(revealTitles)
  useReveals(revealDescriptions, { delay: 280, distance: '0px', opacity: 0.25 })

  const handleTitleRef = ref => revealTitles.current.push(ref)
  const handleDescRef = ref => revealDescriptions.current.push(ref)
  const cleanKey = key => key.replace(/(\s+)/g, '')

  return (
    <StyledContainer id='projects'>
      <Heading ref={ref => handleTitleRef(ref)}>Some Things I&apos;ve Built</Heading>

      <div>
        {featuredProjects &&
          featuredProjects.map(({ node: { frontmatter: fm, html } }, i) => (
            <StyledProject key={i}>
              <StyledContent>
                <StyledProjectName ref={ref => handleTitleRef(ref)}>
                  {fm.external ? (
                    <ProjectLink to={fm.external} label='External'>
                      {fm.title}
                    </ProjectLink>
                  ) : (
                    fm.title
                  )}
                </StyledProjectName>

                <StyledDescription
                  ref={ref => handleDescRef(ref)}
                  dangerouslySetInnerHTML={{ __html: html }}
                />

                {fm.tech && (
                  <StyledTechList>
                    {fm.tech.map(technology => (
                      <li key={cleanKey(technology)}>{technology}</li>
                    ))}
                  </StyledTechList>
                )}

                <FeaturedLinks isOdd={i % 2 === 1} github={fm.github} external={fm.external} />
              </StyledContent>

              <StyledImgContainer
                key={i}
                href={fm.external ? fm.external : fm.github ? fm.github : '#'}
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
