/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { AnimatePresence } from 'framer-motion'

import { email } from '@config'
// import { CharacterWorking } from '@components/icons'
import { useHeroQuery, useBoolean, useTimeout } from '@hooks'
// import { ReactIcon as ManInOffice } from '@components/icons/man-in-office-opt3.svg'
// import { AnimatedText } from '@components'
import {
  HeroGrid,
  StyledOverline,
  HeroTitles,
  HeroName,
  HeroSubTitle,
  StyledDescription,
  StyledContainer,
  CTA,
} from './hero.styles'

const encode = encodeURIComponent

const child = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
  },
}

const parent = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.3 },
  },
  exit: {
    opacity: 0,
  },
}

export default function Hero() {
  const { title, name, subtitle, contactText, html } = useHeroQuery()
  const { isToggled: isMounted, setTrue } = useBoolean(false)
  useTimeout(setTrue, 1000)

  const emailSubject = encode(`Just trying to ${contactText.toLowerCase()}!`)
  const emailBody = encode(`Hi Todd, my name is ...\n\nI just wanted to say ...`)

  return (
    <StyledContainer
      maxWidth='1045px'
      bigDesktopStyles={'max-width: 820px;'}
      desktopStyles={'max-width: 696px;'}
    >
      <AnimatePresence>
        {isMounted ? (
          <>
            <HeroGrid
              variants={parent}
              initial='initial'
              animate='show'
              exit='exit'
              layout
            >
              <StyledOverline
                className='hero'
                variants={child}
                initial='initial'
                exit='exit'
                layout
              >
                {title}
              </StyledOverline>

              <HeroTitles>
                <HeroName>{name}</HeroName>
                <HeroSubTitle>{subtitle}</HeroSubTitle>
              </HeroTitles>

              <StyledDescription
                className='hero'
                variants={child}
                initial='initial'
                exit='exit'
                layout
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <CTA
                as='a'
                href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
                responsive={true}
                mono={true}
                outline={false}
                variants={child}
                initial='initial'
                exit='exit'
                layout
                whileHover='hover'
              >
                Say&nbsp;
                <span role='img' alt='hi' aria-label='hi'>
                  👋
                </span>
              </CTA>
            </HeroGrid>
          </>
        ) : null}
      </AnimatePresence>
    </StyledContainer>
  )
}
