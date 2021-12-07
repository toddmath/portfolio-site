import styled from 'styled-components'

import { theme } from '@styles'

const {
  fontSizes: { xs },
  fonts: { SFMono },
} = theme

export const TechUl = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const TechItem = styled.li`
  /* font-family: ${SFMono}; */
  font-size: ${xs};
  color: var(--text-muted);
  line-height: 1.75;

  &:not(:last-of-type) {
    margin-right: 15px;
  }
`
