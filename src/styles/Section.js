import styled, { css } from 'styled-components'

import media from './media'
import mixins from './mixins'

/* const sectionQueryStyle = css`
  ${({ bigDesktopStyles }) => bigDesktopStyles && media.bigDesktop`${bigDesktopStyles};`}
  ${({ desktopStyles }) => desktopStyles && media.desktop`${desktopStyles};`}
  ${({ tabletStyles }) => tabletStyles && media.tablet`${tabletStyles};`}
` */

//! maxWidth was `1045px`

const Section = styled.section.attrs(props => ({
  width: props.width || '100%',
  margin: props.margin || '10ch auto',
  padding: props.padding || '0',
  textAlign: props.textAlign || 'start',
  maxWidth: props.maxWidth || '80ch',
  minHeight: props.minHeight || '100vh',
  bigDesktopStyles: props.bigDesktopStyles || '',
  desktopStyles: props.desktopStyles || '',
  tabletStyles: props.tabletStyles || '',
}))`
  width: ${props => props.width};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
  max-width: ${props => props.maxWidth};
  min-height: ${props => props.minHeight};
  transition: background-color 400ms ease, color 400ms ease;
  background-color: var(--background-primary);
  color: var(--text-normal);

  /* position: relative; */
  /* top: 0; */

  /* ${mixins.articlePadding}; */

  ${props => css`
    ${media.bigDesktop`${props.bigDesktopStyles}`};
    ${media.desktop`${props.desktopStyles}`};
    ${media.tablet`${props.tabletStyles}`};
  `};
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
