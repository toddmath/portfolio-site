import styled, { css } from 'styled-components'

import { theme, mixins, media, Article, styledTheme } from '@styles'

const { flat, fontSizes, fonts, transition } = theme
const { flexCenter, inlineLink, bigButton } = mixins

const overlineColor = styledTheme([flat.dark.paragraph, flat.dark.cardParagraph])
const headlineText = styledTheme([flat.dark.paragraph, theme.mode.dark.header])

const titleStyles = css`
  h2 {
    font-size: 4rem;
    line-height: 1;
    margin: 0;
    font-weight: 500;
    color: ${headlineText};
    ${media.tablet`
      font-size: 3.5rem;
      line-height: 0.9;
    `};
    ${media.thone`font-size: 3.3rem;`}
    ${media.phablet`font-size: 3rem;`};
    ${media.phone`font-size: 2.6rem;`};
    transition: unset;
  }
`

const subTitleStyles = css`
  h3 {
    font-size: 3.2rem;
    line-height: 0.9;
    margin: 0 0;
    margin-left: 0.3rem;
    letter-spacing: -0.048rem;
    font-weight: 500;
    color: ${headlineText};
    ${media.tablet`
      font-size: 2.7rem;
      margin: 0 auto 0 0.5rem;
      line-height: 0.85;
    `};
    ${media.thone`font-size: 2.4rem;`};
    ${media.phablet`font-size: 2.2rem;`};
    ${media.phone`font-size: 2rem;`};
    transition: unset;
  }
`

export const StyledContainer = styled(Article)`
  ${flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  width: 100vw;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
  ${titleStyles};
  ${subTitleStyles};
  /* transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1); */
`

export const StyledOverline = styled.h1`
  color: ${overlineColor};
  /* margin: 0 0 20px 3px; */
  margin: 0 0 1rem 0.3rem;
  font-size: ${fontSizes.lg};
  line-height: 1;
  letter-spacing: -0.022rem;
  /* font-family: ${fonts.SFMono}; */
  font-weight: 500;
  text-transform: none;
  transition: ${transition};
  ${media.tablet`
    margin: 0 auto 0.8rem 0.8rem;
  `}
`

export const StyledDescription = styled.div`
  /* margin-top: 25px; */
  margin-top: 1.5rem;
  width: 50%;
  max-width: 500px;
  transition: ${transition};
  a {
    ${inlineLink};
  }
  p {
    margin-left: 0.3rem;
    ${media.tablet`margin-left: 0.5rem;`}
  }
`

export const StyledEmailLink = styled.a`
  ${bigButton};
  margin-top: 50px;
  transition: ${transition};
`

export const StyledTitle = styled.h2`
  ${titleStyles};
  /* color: ${flat.dark.paragraph}; */
`

export const StyledSubtitle = styled.h3`
  ${subTitleStyles};
  /* color: ${flat.dark.paragraph}; */
`

export const ButtonContainer = styled.div`
  margin-top: 50px;
  margin-left: 0.5rem;
  ${media.tablet`
      margin-top: 2rem;
      margin-left: 0.5rem;
    `}
  ${media.thone`margin-top: 30px;`}
  ${media.phone`margin-top: 20px;`}
`
