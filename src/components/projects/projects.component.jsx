import React, { useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'

// import { useProjectsQuery, useProjectsReveal } from '@hooks'
import { useProjectsQuery } from '@hooks'
import { Section, Flex, TechList } from '@components'
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

const variants = {
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
  initial: {
    opacity: 0,
  },
}

const Projects = ({ gridLimit = 6 }) => {
  const revealTitle = useRef(null)
  // const revealArchiveLink = useRef(null)
  const revealProjects = useRef([])
  const [projects, firstSix] = useProjectsQuery(gridLimit) // eslint-disable-line no-unused-vars
  // useProjectsReveal(revealTitle, revealArchiveLink, revealProjects)
  // const cleanKey = key => key.replace(/(\s+)/g, '')

  // const observer = useObserver(revealTitle)
  // console.log(observer)

  return (
    <Section
      ariaLabel='Additional projects section'
      maxWidth='1045px'
      bigDesktopStyles={`max-width: 845px;`}
      desktopStyles={`max-width: 696px;`}
    >
      <Flex
        justifyContent='center'
        alignItems='flex-start'
        flexDirection='column'
        flexGrow='1'
      >
        <StyledTitle ref={revealTitle}>Other Noteworthy Projects</StyledTitle>

        <AnimatePresence>
          <StyledGrid>
            {projects?.map(({ node: { frontmatter: fm, html } }, i) => (
              <StyledProject
                key={i}
                custom={i}
                variants={variants}
                initial='initial'
                animate='visible'
                ref={el => (revealProjects.current[i] = el)}
                aria-label={`${fm.title} Other Project Section`}
                tabIndex='0'
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
            ))}
          </StyledGrid>
        </AnimatePresence>
      </Flex>
    </Section>
  )
}

export default Projects
