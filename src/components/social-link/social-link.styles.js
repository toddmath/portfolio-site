import styled from 'styled-components'
import { animated } from 'react-spring'

import { theme } from '@styles'

const { flat } = theme

export const StyledLink = styled(animated.a)`
  padding: 10px;
  color: ${flat.dark.link};
  transform: unset;
  transition: unset;
  svg {
    width: 18px;
    height: 18px;
  }
`
