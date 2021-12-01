import styled, { css } from 'styled-components'
// import { motion } from 'framer-motion'

import theme from './theme'
import media from './media'
import mixins from './mixins'

const { easing } = theme

const articleQueryStyles = css`
  ${({ bigDesktopStyles }) =>
    bigDesktopStyles ? media.bigDesktop`${bigDesktopStyles}` : null}
  ${({ desktopStyles }) => (desktopStyles ? media.desktop`${desktopStyles};` : null)}
  ${({ tabletStyles }) => (tabletStyles ? media.tablet`${tabletStyles};` : null)}
`

// TODO: Don't now if font-size-adjust is the right thing ??
const Article = styled.article`
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || '0 auto'};
  padding: ${props => props.padding || '0'};
  text-align: ${props => props.textAlign || 'start'};
  max-width: ${props => props.maxWidth || '1045px'};
  background-color: var(--background-primary);
  color: var(--text-normal);
  transition: color 200ms ${easing}, background 200ms ${easing};
  ${mixins.articlePadding};
  ${articleQueryStyles};
`

export default Article
