import styled, { css } from 'styled-components'

import theme from './theme'
import media from './media'
import mixins from './mixins'

const { flat } = theme

function handleTabletQuery({ tabletStyles }) {
  if (tabletStyles) {
    return css`
      ${media.tablet`
        ${tabletStyles};
      `}
    `
  }
}

function handleBigDesktopQuery({ bigDesktopStyles }) {
  if (bigDesktopStyles) {
    return css`
      ${media.bigDesktop`
        ${bigDesktopStyles};
      `}
    `
  }
}

function handleDesktopQuery({ desktopStyles }) {
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
  ${props => handleBigDesktopQuery(props)};
  ${props => handleDesktopQuery(props)};
  ${props => handleTabletQuery(props)};
  ${mixins.sectionPadding};
`

export default Article
