/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import Img from 'gatsby-image'

import { theme, mixins, media, Article, styledTheme } from '@styles'

const {
  willow,
  nashville,
  inkwell,
  img,
  flexBetween,
  flexCenter,
  flexColumn,
  inlineLink,
  linkCenterUL,
  gridImplicit,
} = mixins
const { colors, flat, fontSizes, fonts, transition, borderRadius } = theme

const gridItemColor = styledTheme([flat.dark.paragraph, flat.dark.background])

export const StyledContainer = styled(Article)`
  position: relative;
  transition: ${transition};
  ${flexCenter};
  ${flexColumn};
  align-items: flex-start;
`

export const StyledFlexContainer = styled.div`
  ${flexBetween};
  align-items: flex-start;
  flex-wrap: nowrap;
  ${media.tablet`
    flex-wrap: wrap;
    flex-direction: row;
  `};
  width: 100%;
`

export const StyledGrid = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  ${media.tablet`
    grid-template-rows: repeat(2, minMax(300px, 1fr));
  `}
`

export const StyledGridContent = styled.div`
  width: 100%;
  grid-column: span 5;
  a {
    ${linkCenterUL};
  }
  ${media.desktop`
    grid-column: 1 / -1;
    grid-row: span 1;
  `}
`

export const StyledContent = styled.div`
  width: 100%;
  flex-basis: 800px;
  a {
    ${linkCenterUL};
  }
`

// export const SkillsContainer = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(2, minmax(140px, 200px));
//   overflow: hidden;
//   margin-top: 20px;
// `

export const SkillsGridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  row-gap: 0.25rem;
  column-gap: 0.5rem;
  overflow: hidden;
`

export const SkillGridItem = styled.li`
  position: relative;
  margin: 0;
  padding-left: 1rem;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${gridItemColor};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${flat.dark.tertiary};
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.md};
    font-weight: bold;
    line-height: inherit;
  }
`

// export const Skill = styled.li`
//   position: relative;
//   margin-bottom: 10px;
//   padding-left: 20px;
//   font-family: ${fonts.SFMono};
//   font-size: ${fontSizes.smish};
//   color: ${colors.grey};
//   &:before {
//     content: '▹';
//     position: absolute;
//     left: 0;
//     color: ${flat.dark.tertiary};
//     font-size: ${fontSizes.md};
//     line-height: 15px;
//   }
// `

export const StyledGridPic = styled.div`
  grid-column: -1 / -4;
  align-self: start;
  position: relative;
  max-width: 300px;
  width: 100%;
  margin-left: auto;
  ${media.desktop`
    width: 100%;
    grid-column: 1 / -1;
    grid-row: span 1;
    align-self: center;
    justify-self: center;
    margin: 60px auto;
  `};
  ${media.phablet`width: 80%;`};
`

export const StyledPic = styled.div`
  position: relative;
  align-self: start;
  max-width: 300px;
  width: 100%;
  margin-left: 2rem;
  flex-basis: 300px;
  flex-shrink: 0.5;
  ${media.tablet`
      margin: 60px auto 0 auto;
      align-self: center;
      justify-self: center;
      justify-items: center;
      justify-content: center;
  `};
  ${media.desktop`width: 100%;`};
  ${media.phablet`width: 80%;`};
`

export const StyledAvatar = styled(Img)`
  position: relative;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  ${img};
  img {
    border-radius: ${borderRadius};
  }
`

export const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  ${willow};
  position: relative;
  border-radius: ${borderRadius};
  transition: ${theme.transition};
  &:before,
  &:after {
    transition: ${theme.transition};
  }
`
