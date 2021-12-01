import React from 'react'
import { AnimatePresence } from 'framer-motion'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { useProjectsQuery } from '@hooks'
import { Article, Flex, TechList } from '@components'
import { IconGitHub, IconExternal, Icon } from '@components/icons'

import {
  StyledTitle,
  StyledFolder,
  MotionGrid,
  StyledProjectInner,
  MotionProject,
  StyledProjectHeader,
  StyledProjectLinks,
  StyledIconLink,
  StyledProjectName,
  StyledProjectDescription,
} from './projects.styles'

const Projects = ({ gridLimit = 6 }) => {
  // eslint-disable-next-line no-unused-vars
  const [projects, firstSix] = useProjectsQuery(gridLimit)

  const variants = {
    visible: custom => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <Article
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
        <StyledTitle>Other Noteworthy Projects</StyledTitle>

        <AnimatePresence>
          <MotionGrid>
            {projects?.map(({ node: { frontmatter: fm, html } }, i) => (
              <MotionProject
                key={i}
                custom={i}
                initial={{ opacity: 0 }}
                animate='visible'
                variants={variants}
                whileTap={{ y: 0, scale: 0.95 }}
                whileHover={{ y: -10 }}
                aria-label={`${fm.title} Other Project Section`}
                tabIndex='0'
              >
                <StyledProjectInner>
                  <header>
                    <StyledProjectHeader>
                      <StyledFolder role='presentation'>
                        <Icon name='folder' size='40' strokeWidth='1.5' />
                        {/* <IconFolder role='presentation' /> */}
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
                    <StyledProjectDescription
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </header>

                  <footer>
                    <TechList tech={fm.tech} />
                  </footer>
                </StyledProjectInner>
              </MotionProject>
            ))}
          </MotionGrid>
        </AnimatePresence>
      </Flex>
    </Article>
  )
}

export default Projects
