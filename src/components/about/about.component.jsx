import React from 'react'

import { useAboutQuery } from '@hooks'
import { github } from '@config'

import { Section, Heading, Flex } from '@components'
import {
  StyledFlexContainer,
  StyledContent,
  SkillsGridList,
  SkillGridItem,
  StyledPic,
  Avatar,
  AvatarLink,
} from './about.styles'

const cleanKey = key => key.replace(/(\s+)/g, '')

export default function About() {
  const { title, skills, image, html } = useAboutQuery()
  // const revealContainer = useRef(null)
  // useReveal(revealContainer)

  return (
    <Section
      ariaLabel='About me section'
      maxWidth='1045px'
      bigDesktopStyles={`max-width: 820px;`}
      desktopStyles={`max-width: 696px;`}
    >
      <Flex
        width='100%'
        flexDirection='column'
        justifyContent='center'
        alignItems='flex-start'
      >
        <Heading id='about'>{title}</Heading>

        <StyledFlexContainer>
          <StyledContent>
            <div dangerouslySetInnerHTML={{ __html: html }} />

            <SkillsGridList role='list'>
              {skills?.map(skill => (
                <SkillGridItem key={cleanKey(skill)} role='listitem'>
                  {skill}
                </SkillGridItem>
              ))}
            </SkillsGridList>
          </StyledContent>

          <StyledPic>
            <AvatarLink role='link' href={github}>
              <Avatar role='img' image={image} alt='Avatar' />
            </AvatarLink>
          </StyledPic>
        </StyledFlexContainer>
      </Flex>
    </Section>
  )
}
