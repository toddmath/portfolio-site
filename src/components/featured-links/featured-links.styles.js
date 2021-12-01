import styled, { css } from 'styled-components'

import { media } from '@styles'

export const StyledLinkWrapper = styled.div`
  --margin: 6px;
  --negativeMargin: -6px;

  display: flex;
  align-items: center;
  position: relative;
  color: var(--interactive-normal);

  ${props =>
    props.$isOdd
      ? css`
          justify-content: flex-start;
          margin-right: 0;

          & > a:first-of-type {
            padding-left: 0;
          }
        `
      : css`
          justify-content: flex-end;
          margin-left: 0;

          & > a:last-of-type {
            padding-right: 0;
          }
        `}

  & > a {
    padding: var(--margin);
    transition: unset;

    svg {
      filter: drop-shadow(0 1.5px 0 rgba(6, 6, 7, 0.025));
    }
  }

  & > a:hover {
    color: var(--interactive-hover);
  }

  ${media.thone`
    margin: 0;

    a {
      padding: calc(var(--margin) / 1.5) var(--margin);
    }
  `}
`
