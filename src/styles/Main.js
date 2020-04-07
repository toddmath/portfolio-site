import styled from 'styled-components'
import styledTheme from './StyledTheme'

import theme from './theme'
import mixins from './mixins'

const { flat } = theme

const backgroundColor = styledTheme([flat.dark.background, flat.dark.cardBackground])

const Main = styled.main`
  ${mixins.sidePadding};
  counter-reset: ${({ counter }) => counter || 'unset'};
  background-color: ${backgroundColor};
`

export default Main
