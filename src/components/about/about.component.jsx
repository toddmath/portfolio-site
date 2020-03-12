/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useRef } from 'react'

import { useAboutQuery, useReveal } from '@hooks'
import { github } from '@config'

import { Article, Heading, Flex } from '@components'
import {
  StyledFlexContainer,
  StyledContent,
  SkillsContainer,
  Skill,
  StyledPic,
  StyledAvatar,
  StyledAvatarLink,
} from './about.styles'

const About = () => {
  const { title, skills, fluid, html } = useAboutQuery()
  const revealContainer = useRef(null)
  useReveal(revealContainer)
  const cleanKey = key => key.replace(/(\s+)/g, '')

  return (
    <Article
      ariaLabel='About me section'
      maxWidth='1045px'
      bigDesktopStyles={`max-width: 820px;`}
      desktopStyles={`max-width: 696px;`}
    >
      <Flex width='100%' flexDirection='column' justifyContent='center' alignItems='flex-start'>
        <Heading id='about' as='h2' ref={revealContainer}>
          {title}
        </Heading>
        <StyledFlexContainer>
          <StyledContent>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <SkillsContainer>
              {skills && skills.map(skill => <Skill key={cleanKey(skill)}>{skill}</Skill>)}
            </SkillsContainer>
          </StyledContent>

          <StyledPic>
            <StyledAvatarLink href={github}>
              <StyledAvatar fluid={fluid} alt='Avatar' />
            </StyledAvatarLink>
          </StyledPic>
        </StyledFlexContainer>
      </Flex>
    </Article>
  )
}

export default About
