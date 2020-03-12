import styled from 'styled-components'

import media from './media'
import mixins from './mixins'

const Section = styled.section`
  /* margin: 0 auto; */
  max-width: 1045px;
  width: 100%;
  ${media.bigDesktop`max-width: 845px;`};
  ${media.desktop`max-width: 697px;`};
  ${mixins.sectionPadding};
`

export default Section
