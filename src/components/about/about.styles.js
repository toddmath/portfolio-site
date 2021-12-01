/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import Img from 'gatsby-image'

import Icon from '../icons/icon.component'
import Article from '../article/article.component'
import { theme, mixins, media } from '@styles'

const { willow, img, flexBetween, linkCenterUL } = mixins
const { fontSizes, borderRadius } = theme

export const StyledContainer = styled(Article).attrs(() => ({
  ariaLabel: 'About me section',
  maxWidth: '1045px',
  bigDesktopStyles: 'max-width: 820px;',
  desktopStyles: 'max-width: 696px;',
}))`
  z-index: 2;

  @media print {
    @page {
      size: 5.5in 8.5in portrait !important;
      page-break-after: always !important;
      page-break-before: always !important;
      height: 8.5in;
    }
    display: flex;
    height: 8.5in;
    align-items: center;
    justify-content: center;
    page-break-after: always !important;
    page-break-before: always !important;
    size: A4 portrait !important;
  }
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
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
`

export const StyledContent = styled.div`
  z-index: 2;
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

export const SkillsGridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  grid-row-gap: 0.25rem;
  grid-column-gap: 0.5rem;
  overflow: hidden;
`

export const SkillIcon = styled(Icon).attrs(() => ({
  name: 'source',
  size: '18',
}))`
  --length: 18;
  color: var(--text-link);
  height: var(--length);
  width: var(--length);
  margin: auto 0;
  stroke-width: 1.5;
  line-height: inherit;
  padding-right: 8px;
`

export const SkillGridItem = styled.li`
  position: relative;
  margin: 0;
  font-family: var(--font-sys);
  font-size: ${fontSizes.smish};
  color: var(--text-normal);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
`

export const StyledPic = styled.div`
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

export const StyledAvatar = styled(Img)`
  position: relative;
  border-radius: ${borderRadius};
  ${img}

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
`
