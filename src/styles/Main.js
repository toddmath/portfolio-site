import styled from 'styled-components'

import mixins from './mixins'

const Main = styled.main`
  ${mixins.sidePadding};
  counter-reset: ${({ counter }) => counter || 'unset'};
  background-color: var(--background-primary);
  transition: background-color 400ms ease;
`

export default Main
