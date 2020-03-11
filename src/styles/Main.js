import styled from 'styled-components'

import mixins from './mixins'

const Main = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  counter-reset: ${props => (props.counter ? props.counter : 'unset')};
`

export default Main
