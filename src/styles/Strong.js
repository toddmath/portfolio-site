import styled, { css } from 'styled-components'

import theme from './theme'
// import media from './media'
// import mixins from './mixins'
// import styledTheme from './StyledTheme'

// const strongColor = styledTheme([])

const strongStyles = css`
  --text-wght: 475;
  font-size: inherit;
  color: ${theme.flat.dark.strong};
`

export const Strong = styled.strong`
  ${strongStyles};
`
