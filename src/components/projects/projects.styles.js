import styled from 'styled-components'

import { theme, mixins, media, Button } from '@styles'

const {
  flat,
  fontSizes: { h3, xxl, xs },
  fonts: { SFMono },
  borderRadius,
  transition,
} = theme

const { linkCenterUL, boxShadow, flexBetween } = mixins

export const StyledTitle = styled.h3`
  margin: 0 auto;
  font-size: ${h3};
  color: ${flat.dark.headline};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`

export const StyledGrid = styled.div`
  margin-top: 50px;
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* grid-gap: 15px; */
    grid-gap: 2vw;
    position: relative;
    ${media.desktop`
      grid-gap: 3vw;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    `};
  }
`

export const StyledProjectInner = styled.div`
  ${boxShadow};
  ${flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${borderRadius};
  transition: ${transition};
  background-color: ${flat.dark.cardBackground};
`

export const StyledProject = styled.section`
  transition: ${transition};
  transition: unset;
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`

export const StyledProjectHeader = styled.div`
  ${flexBetween};
  margin-bottom: 30px;
`

export const StyledFolder = styled.div`
  color: ${flat.dark.cardTagBackground};
  svg {
    width: 40px;
    height: 40px;
  }
`

export const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: ${flat.dark.background};
`

export const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  &:hover,
  &:focus {
    color: ${flat.dark.background};
  }
  svg {
    width: 20px;
    height: 20px;
  }
`

export const StyledProjectName = styled.h4`
  margin: 0 0 10px;
  font-size: ${xxl};
  color: ${flat.dark.cardHeadline};
`

export const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: ${flat.dark.cardParagraph};
  a {
    ${linkCenterUL};
  }
`

export const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-top: 20px;
  li {
    font-family: ${SFMono};
    font-size: ${xs};
    color: ${flat.dark.secondary};
    line-height: 1.75;
    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
`

export const StyledMoreButton = styled(Button)`
  margin: 100px auto 0;
`
