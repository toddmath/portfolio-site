import styled from 'styled-components'

import { theme, mixins, media, Article, Heading } from '@styles'

const {
  flat,
  fontSizes: { xl, lg },
} = theme

export const StyledContainer = styled(Article)`
  text-align: center;
  max-width: 820px;
  margin: 0 auto 30px;
  ${media.tablet`
    margin-bottom: 20px;
    padding-bottom: 50px;
  `}
  ${media.phablet`margin-bottom: 10px;`}
`

export const StyledHeading = styled(Heading)`
  color: ${flat.dark.headline};
  font-size: 50px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  &:before {
    font-size: ${xl};
    ${media.tablet`font-size: ${lg};`};
  }
  &:after {
    width: 100%;
  }
`

export const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  color: ${flat.dark.headline};
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`

export const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
  ${media.tablet`margin-top: 30px;`}
  ${media.phablet`margin-top: 20px;`}
  &:hover,
  &:focus,
  &:active {
    color: ${flat.dark.background};
  }
`

export const StyledButtonContainer = styled.div`
  margin-top: 50px;
  ${media.tablet`margin-top: 30px;`}
  ${media.phablet`margin-top: 20px;`}
`
