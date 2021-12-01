import React from 'react'
import { useAboutQuery } from '@hooks'
import { github } from '@config'

import { Heading } from '@styles'
import { Flex } from '@components'

import {
  StyledContainer,
  StyledContent,
  StyledGrid,
  SkillsGridList,
  SkillGridItem,
  SkillIcon,
  StyledPic,
  StyledAvatar,
  StyledAvatarLink,
} from './about.styles'

const cleanKey = key => key.replace(/(\s+)/g, '')

export default function About() {
  const { title, skills, fluid, html } = useAboutQuery()

  return (
    <StyledContainer
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

        <StyledGrid>
          <StyledContent>
            <div dangerouslySetInnerHTML={{ __html: html }} />

            <SkillsGridList role='list'>
              {skills?.map(skill => (
                <SkillGridItem key={cleanKey(skill)} role='listitem'>
                  <SkillIcon />
                  {skill}
                </SkillGridItem>
              ))}
            </SkillsGridList>
          </StyledContent>

          <StyledPic>
            <StyledAvatarLink role='link' href={github}>
              <StyledAvatar role='img' fluid={fluid} alt='Avatar' />
            </StyledAvatarLink>
          </StyledPic>
        </StyledGrid>
      </Flex>
    </StyledContainer>
  )
}

/*
<Tilt
  options={{
    reverse: false,
    max: 12,
    perspective: 1000,
    scale: 1,
    speed: 300,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  }}
>
*/
