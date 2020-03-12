import styled, { css } from 'styled-components'

import theme from './theme'
import media from './media'
import mixins from './mixins'

const { flat } = theme

const handleTabletQuery = ({ tabletStyles }) => {
  if (tabletStyles) {
    return css`
      ${media.tablet`
        ${tabletStyles};
      `}
    `
  }
}
const handleBigDesktopQuery = ({ bigDesktopStyles }) => {
  if (bigDesktopStyles) {
    return css`
      ${media.bigDesktop`
        ${bigDesktopStyles};
      `}
    `
  }
}
const handleDesktopQuery = ({ desktopStyles }) => {
  if (desktopStyles) {
    return css`
      ${media.desktop`
        ${desktopStyles};
      `}
    `
  }
}

const Article = styled.article`
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || '0 auto'};
  padding: ${props => props.padding || '0'};
  text-align: ${props => props.textAlign || 'start'};
  background-color: ${flat.light.background};
  max-width: ${props => props.maxWidth || '1045px'};
  scroll-snap-align: start;
  ${mixins.articlePadding};
  ${props => handleBigDesktopQuery(props)};
  ${props => handleDesktopQuery(props)};
  ${props => handleTabletQuery(props)};
`

export default Article
