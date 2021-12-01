import styled from 'styled-components'

// import theme from './theme'
import media from './media'
import mixins from './mixins'
// import styledTheme from './StyledTheme'
//
// const { flat } = theme
//
// const backgroundColor = styledTheme([flat.dark.background, flat.dark.cardBackground])
// const textColor = styledTheme([flat.dark.paragraph, flat.dark.cardParagraph])
//
// const articleQueryStyles = css`
//   ${({ bigDesktopStyles }) => bigDesktopStyles && media.bigDesktop`${bigDesktopStyles};`}
//   ${({ desktopStyles }) => desktopStyles && media.desktop`${desktopStyles};`}
//   ${({ tabletStyles }) => tabletStyles && media.tablet`${tabletStyles};`}
// `
//
// const Article = styled.article`
//   width: ${props => props.width || '100%'};
//   margin: ${props => props.margin || '0 auto'};
//   padding: ${props => props.padding || '0'};
//   text-align: ${props => props.textAlign || 'start'};
//   max-width: ${props => props.maxWidth || '1045px'};
//   background-color: ${backgroundColor};
//   color: ${textColor};
//   ${mixins.articlePadding};
//   ${articleQueryStyles};
// `

const Article = styled.article`
  /* margin: 0 auto; */
  max-width: 1045px;
  width: 100%;
  ${media.bigDesktop`max-width: 845px;`};
  ${media.desktop`max-width: 697px;`};
  ${mixins.sectionPadding};
`

export default Article
