import styled from 'styled-components'

import { theme } from '@styles'

const {
  flat,
  fontSizes: { xs },
  fonts: { SFMono },
} = theme

export const StyledTechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const StyledTechItem = styled.li`
  font-family: ${SFMono};
  font-size: ${xs};
  color: ${flat.dark.secondary};
  line-height: 1.75;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`
