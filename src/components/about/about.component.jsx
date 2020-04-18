import React from 'react'

// import { useAboutQuery, useReveal } from '@hooks'
import { useAboutQuery } from '@hooks'
import { github } from '@config'

import { Article, Heading, Flex } from '@components'
import {
  StyledFlexContainer,
  StyledContent,
  SkillsGridList,
  SkillGridItem,
  StyledPic,
  StyledAvatar,
  StyledAvatarLink,
} from './about.styles'

const cleanKey = key => key.replace(/(\s+)/g, '')

export default function About() {
  const { title, skills, image, html } = useAboutQuery()
  // const revealContainer = useRef(null)
  // useReveal(revealContainer)

  return (
    <Article
      ariaLabel='About me section'
      maxWidth='1045px'
      bigDesktopStyles={`max-width: 820px;`}
      desktopStyles={`max-width: 696px;`}
    >
      {/* <div data-sal='fade' data-sal-duration='1000'> */}
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
              {skills &&
                skills.map(skill => (
                  <SkillGridItem key={cleanKey(skill)} role='listitem'>
                    {skill}
                  </SkillGridItem>
                ))}
            </SkillsGridList>
          </StyledContent>

          <StyledPic>
            <StyledAvatarLink role='link' href={github}>
              <StyledAvatar role='img' image={image} alt='Avatar' />
            </StyledAvatarLink>
          </StyledPic>
        </StyledFlexContainer>
      </Flex>
      {/* </div> */}
    </Article>
  )
}
