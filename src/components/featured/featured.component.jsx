import React, { useRef } from 'react'
import { getImage } from 'gatsby-plugin-image'

import { useFeaturedQuery } from '@hooks'
import { ProjectLink, FeaturedLinks } from '@components'
import { Heading } from '@styles'

import {
  FeaturedContainer,
  FeaturedContent,
  StyledProjectName,
  StyledDescription,
  StyledTechList,
  StyledFeaturedImg,
  StyledImgContainer,
  Project,
  FeaturedHeading,
} from './featured.styles'

/**
 * Simple helper function to take out all spaces from key
 * @param {string} key Key to sanitize
 */
const cleanKey = key => key.replace(/(\s+)/g, '')

/**
 * Checks whether the index is odd
 * @param {number} i The index to check
 * @returns {boolean}
 **/
const isOdd = i => i % 2 === 1

export default function Featured() {
  const featuredProjects = useFeaturedQuery()
  const revealTitles = useRef([])
  const revealDescriptions = useRef([])
  // useReveals(revealTitles)
  // useReveals(revealDescriptions, { delay: 280, distance: '0px', opacity: 0.25 })
  const handleRefs = (ref, array) => array.current.push(ref)

  return (
    <FeaturedContainer
      maxWidth='1045px'
      bigDesktopStyles={`max-width: 845px;`}
      desktopStyles={`max-width: 696px;`}
    >
      <FeaturedHeading id='projects' ref={ref => handleRefs(ref, revealTitles)}>
        Some Things I&apos;ve Built
      </FeaturedHeading>

      {/* <div className='projects-container'> */}
      {featuredProjects
        ? featuredProjects.map(({ node: { frontmatter: fm, html } }, i) => (
            <Project key={cleanKey(fm.title)}>
              <FeaturedContent>
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

                <FeaturedLinks
                  isodd={isOdd(i).toString()}
                  github={fm.github}
                  external={fm.external}
                />
              </FeaturedContent>

              <StyledImgContainer
                href={fm.external ? fm.external : fm.github || '#'}
                target='_blank'
                rel='nofollow noopener noreferrer'
              >
                <StyledFeaturedImg image={getImage(fm.cover)} alt={fm.title} />
              </StyledImgContainer>
            </Project>
          ))
        : null}
      {/* </div> */}
    </FeaturedContainer>
  )
}
