import styled from 'styled-components'
import Img from 'gatsby-image'

import { theme, mixins, media, Article, styledTheme } from '@styles'

const { flexCenter, linkCenterUL, img, willow } = mixins
const {
  colors,
  flat,
  fontSizes: { smish, lg },
  fonts: { SFMono },
  transition,
  borderRadius,
  margin,
  easing,
} = theme

const techColor = styledTheme([flat.dark.paragraph, flat.dark.background])
const projectTitleColor = styledTheme([flat.dark.headline, flat.dark.cardParagraph])

export const StyledContainer = styled(Article)`
  --projBenz: ${easing};
  ${flexCenter};
  flex-direction: column;
  align-items: flex-start;
  /* transition: ${transition}; */
  transition: transform 0.25s var(--projBenz), background 0s var(--projBenz);
`

export const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 8;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`

/*
${media.thone`
  grid-column: 1 / -1;
  padding: 40px 40px 30px;
  z-index: 5;
`};
*/

export const StyledProjectName = styled.h4`
  z-index: 100;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${projectTitleColor};
  ${media.tablet`font-size: 24px;`};
  ${media.thone`color: ${flat.dark.headline};`};
  a {
    ${media.tablet`display: block;`};
    &:hover,
    &:active {
      color: inherit;
    }
  }
`

const descriptionBorderColor = styledTheme([
  `2px solid ${flat.dark.cardBackground}`,
  `2px solid ${flat.dark.headline}`,
])

export const StyledDescription = styled.div`
  box-shadow: 0 10px 30px -15px ${flat.dark.shadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${flat.dark.cardBackground};
  color: ${flat.dark.cardParagraph};
  font-size: ${lg};
  border-radius: ${borderRadius};
  border: ${descriptionBorderColor};
  ${media.thone`
    background-color: ${flat.dark.semiCardBackground};
    padding: 20px;
    box-shadow: none;
    width: 100%;
    &:hover {
      box-shadow: none;
    }
  `};
  p {
    margin: 0;
  }
  a {
    ${linkCenterUL};
  }
`

export const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  li {
    font-family: ${SFMono};
    font-size: ${smish};
    color: ${techColor};
    margin-bottom: 7px;
    white-space: nowrap;
    &:not(:last-of-type) {
      margin-right: ${margin};
    }
    ${media.thone`
      color: ${colors.lightestSlate};
      margin-right: 10px;
    `};
  }
  ${media.thone`
    li {
      margin-bottom: 0;
      margin: 0 !important;
      &:not(:last-of-type) {
        margin-right: ${margin} !important;
        margin-left: 0 !important;
      }
    }
  `}
`

export const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: ${flat.dark.link};
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
  ${media.thone`
    margin: 0;
  `}
`

export const StyledFeaturedImg = styled(Img)`
  vertical-align: middle;
  border-radius: ${borderRadius};
  ${img};
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
  `};
  img {
    border-radius: ${borderRadius};
  }
`

export const StyledImgContainer = styled.a`
  ${mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  ${willow};
  ${media.tablet`
      height: 80%;
      grid-column: 13 / 4;
      align-self: end;
    `}
  ${media.thone`
    grid-column: 1 / 13;
  `};
`

export const StyledProject = styled.section`
  transition: inherit;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 100px;
  }
  ${media.thone`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-around;
    & > * {
      width: 100%;
      display: block;
    }
    ${StyledContent} {
      width: 100%;
      display: block;
      padding: 0;
      text-align: unset;
    }
    ${StyledDescription} {
      padding: 2em;
    }
    ${StyledLinkWrapper} {
      margin-top: 0;
    }
  `};
  ${media.tablet`align-items: start;`};
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 6 / -1;
      text-align: right;
      ${media.thone`
        grid-column: 1 / -1;
        text-align: unset;
        /* padding: 40px 40px 30px; */
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${StyledTechList} {
      justify-content: flex-end;
      li {
        margin-left: ${margin};
        margin-right: 0;
      }
      ${media.thone`
        justify-content: flex-start;
      `}
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 8;
      ${media.tablet`
        height: 80%;
        grid-column: 1 / 9;
        align-self: end;
        `};
      ${media.thone`
        grid-column: 1 / -1;
      `};
    }
  }
`

// export const StyledProject = styled.section`
//   transition: inherit;
//   display: grid;
//   grid-gap: 10px;
//   grid-template-columns: repeat(12, 1fr);
//   align-items: center;
//   &:not(:last-of-type) {
//     margin-bottom: 100px;
//   }
//   ${media.thone`
//     margin-bottom: 70px;
//     align-items: end;
//   `};
//   ${media.tablet`align-items: start;`};
//   &:nth-of-type(odd) {
//     ${StyledContent} {
//       grid-column: 6 / -1;
//       text-align: right;
//       ${media.thone`
//         grid-column: 1 / -1;
//         padding: 40px 40px 30px;
//       `};
//       ${media.phablet`padding: 30px 25px 20px;`};
//     }
//     ${StyledTechList} {
//       justify-content: flex-end;
//       li {
//         margin-left: ${margin};
//         margin-right: 0;
//       }
//     }
//     ${StyledLinkWrapper} {
//       justify-content: flex-end;
//       margin-left: 0;
//       margin-right: -10px;
//     }
//     ${StyledImgContainer} {
//       grid-column: 1 / 8;
//       ${media.tablet`
//         height: 80%;
//         grid-column: 1 / 9;
//         align-self: end;
//         `};
//       ${media.thone`
//         grid-column: 1 / -1;
//       `};
//     }
//   }
// `
