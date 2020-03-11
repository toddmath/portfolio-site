import React, { useRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { useProjectsQuery, useProjectsReveal } from '@hooks'
import { Article, Flex, TechList } from '@components'
import { IconGitHub, IconExternal, IconFolder } from '@components/icons'

import {
  StyledTitle,
  StyledFolder,
  StyledGrid,
  StyledProjectInner,
  StyledProject,
  StyledProjectHeader,
  StyledProjectLinks,
  StyledIconLink,
  StyledProjectName,
  StyledProjectDescription,
} from './projects.styles'

const Projects = () => {
  const GRID_LIMIT = 6
  const revealTitle = useRef(null)
  const revealArchiveLink = useRef(null)
  const revealProjects = useRef([])
  const [projects, firstSix] = useProjectsQuery(GRID_LIMIT) // eslint-disable-line no-unused-vars

  useProjectsReveal(revealTitle, revealArchiveLink, revealProjects)
  // const cleanKey = key => key.replace(/(\s+)/g, '')

  return (
    <Article
      ariaLabel='Additional projects section'
      maxWidth='1045px'
      bigDesktopStyles={`max-width: 845px;`}
      desktopStyles={`max-width: 696px;`}
    >
      <Flex justifyContent='center' alignItems='flex-start' flexDirection='column' flexGrow='1'>
        <StyledTitle ref={revealTitle}>Other Noteworthy Projects</StyledTitle>

        <StyledGrid>
          <TransitionGroup className='projects'>
            {projects?.map(({ node: { frontmatter: fm, html } }, i) => (
              <CSSTransition
                key={i}
                classNames='fadeup'
                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                exit={false}
              >
                <StyledProject
                  key={i}
                  ref={el => (revealProjects.current[i] = el)}
                  aria-label={`${fm.title} Other Project Section`}
                  tabIndex='0'
                  style={{
                    transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                  }}
                >
                  <StyledProjectInner>
                    <header>
                      <StyledProjectHeader>
                        <StyledFolder role='presentation'>
                          <IconFolder role='presentation' />
                        </StyledFolder>
                        <StyledProjectLinks>
                          {fm.github && (
                            <StyledIconLink
                              href={fm.github}
                              target='_blank'
                              rel='nofollow noopener noreferrer'
                              aria-label='GitHub Link'
                            >
                              <IconGitHub />
                            </StyledIconLink>
                          )}
                          {fm.external && (
                            <StyledIconLink
                              href={fm.external}
                              target='_blank'
                              rel='nofollow noopener noreferrer'
                              aria-label='External Link'
                            >
                              <IconExternal />
                            </StyledIconLink>
                          )}
                        </StyledProjectLinks>
                      </StyledProjectHeader>
                      <StyledProjectName role='banner'>{fm.title}</StyledProjectName>
                      <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                    </header>

                    <footer>
                      <TechList tech={fm.tech} />
                    </footer>
                  </StyledProjectInner>
                </StyledProject>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </StyledGrid>
      </Flex>
    </Article>
  )
}

export default Projects
