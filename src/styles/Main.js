import styled from 'styled-components'

import mixins from './mixins'

const Main = styled.main`
  ${mixins.sidePadding};
  /* margin: 0 auto; */
  counter-reset: ${({ counter }) => counter || 'unset'};
  scroll-snap-type: y mandatory;
`

export default Main
