import styled from 'styled-components'

import { theme, mixins } from '@styles'

const { flat } = theme

export const StyledLinkWrapper = styled.div`
  --margin: 10px;
  --negativeMargin: -10px;
  --iconSize: 22px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: var(--margin);
  color: ${flat.dark.link};
  justify-content: ${props => (props.isOdd ? 'flex-start' : 'flex-end')};
  margin-left: ${props => (props.isOdd ? 'var(--negativeMargin)' : '0')};
  margin-right: ${props => (props.isOdd ? '0' : 'var(--negativeMargin)')};
  a {
    padding: var(--margin);
    transition: unset;
    svg {
      width: var(--iconSize);
      height: var(--iconSize);
      ${mixins.boxShadow};
      transition: shadow 250ms ${theme.easing};
    }
  }
`
