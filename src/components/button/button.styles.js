import styled, { css } from 'styled-components'

import { theme, media } from '@styles'

const { borderRadius, fontSizes, transition } = theme

export function handleBtnSize({ size }) {
  if (!size) return
  switch (size.toLowerCase()) {
    case 'small':
    case 'sm':
    case 's':
      return css`
        padding: 0.55em 0.9em;
        font-size: ${fontSizes.smish};
      `
    case 'medium':
    case 'md':
    case 'm':
      return css`
        padding: 0.8em 1.15em;
        font-size: ${fontSizes.smish};
      `
    case 'large':
    case 'lg':
    case 'l':
    default:
      return css`
        padding: 1em 1.5em;
        font-size: ${fontSizes.sm};
      `
  }
}

export const baseButtonStyles = css`
  border: 1px solid var(--interactive-normal);
  border-radius: ${borderRadius};
  ${({ outline }) =>
    outline
      ? css`
          background: transparent;
          color: var(--interactive-normal);
          /* color: var(--bgColor); */
          &:hover,
          &:focus {
            background: var(--interactive-hover);
            color: var(--background-primary);
            /* background: var(--bgColor);
            color: var(--fgColor); */
          }
        `
      : css`
          background: var(--interactive-normal);
          color: var(--background-primary);
          /* background: var(--bgColor); */
          /* color: var(--fgColor); */
          &:hover,
          &:focus {
            background: var(--interactive-hover);
            color: var(--background-primary);
            /* background: transparent; */
            /* color: var(--bgColor); */
          }
        `}
  ${({ mono }) =>
    mono
      ? css`
          font-family: var(--font-code);
          font-weight: 400;
          text-transform: uppercase;
          font-kerning: auto;
          font-variant-ligatures: normal;
          font-style: normal;
          word-spacing: -0.059em;
        `
      : css`
          font-family: var(--font-sys);
          word-spacing: inherit;
          letter-spacing: inherit;
        `}
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transition: ${transition};
  box-sizing: border-box;
  &:focus {
    outline-offset: 0.5rem;
    outline: 2px dotted var(--text-link);
    /* outline: solid 2px var(--bgColor); */
  }
`

export const StyledResponsiveButton = styled.button`
  ${baseButtonStyles};
  padding: 1.15rem 1.5rem;
  font-size: ${fontSizes.md};
  ${media.thone`font-size: ${fontSizes.sm};`}
  ${({ otherStyles }) => otherStyles || null}
`

export const StyledButton = styled.button`
  ${baseButtonStyles};
  ${props => handleBtnSize(props)};
  ${({ otherStyles }) => otherStyles || null}
`
