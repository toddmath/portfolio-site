import styled, { css } from 'styled-components'

import media from './media'
import mixins from './mixins'

const sectionQueryStyle = css`
  ${({ bigDesktopStyles }) => bigDesktopStyles && media.bigDesktop`${bigDesktopStyles};`}
  ${({ desktopStyles }) => desktopStyles && media.desktop`${desktopStyles};`}
  ${({ tabletStyles }) => tabletStyles && media.tablet`${tabletStyles};`}
`

const Section = styled.section`
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || '0 auto'};
  padding: ${props => props.padding || '0'};
  text-align: ${props => props.textAlign || 'start'};
  max-width: ${props => props.maxWidth || '1045px'};
  transition: background-color 400ms ease, color 400ms ease;
  background-color: var(--background-primary);
  color: var(--text-normal);
  ${mixins.articlePadding};
  ${sectionQueryStyle};
`

// const Section = styled.section`
//   /* margin: 0 auto; */
//   max-width: 1045px;
//   width: 100%;
//   ${media.bigDesktop`max-width: 845px;`};
//   ${media.desktop`max-width: 697px;`};
//   ${mixins.sectionPadding};
// `

export default Section
