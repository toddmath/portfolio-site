import styled, { css } from 'styled-components'

import { theme, media } from '@styles'

const { borderRadius, flat, fonts, fontSizes, transition } = theme

const sizeStyles = {
  small: css`
    padding: 0.55em 0.9em;
    font-size: ${fontSizes.smish};
  `,
  medium: css`
    padding: 0.8em 1.15em;
    font-size: ${fontSizes.smish};
  `,
  large: css`
    padding: 1em 1.5em;
    font-size: ${fontSizes.sm};
  `,
}

const handleBtnSize = ({ size }) => {
  switch (size.toLowerCase()) {
    case 'small':
    case 'sm':
    case 's':
      return sizeStyles.small
    case 'medium':
    case 'md':
    case 'm':
      return sizeStyles.medium
    case 'large':
    case 'lg':
    case 'l':
    default:
      return sizeStyles.large
  }
}

const handleOtherStyles = ({ otherStyles }) => {
  if (otherStyles) {
    return css`
      ${otherStyles};
    `
  }
}

const baseButtonStyles = css`
  --fgColor: ${flat.dark.buttonText};
  --bgColor: ${flat.dark.button};
  border: 1px solid var(--bgColor);
  border-radius: ${borderRadius};
  ${({ outline }) =>
    outline
      ? css`
          background: transparent;
          color: var(--bgColor);
          &:hover,
          &:focus {
            background: var(--bgColor);
            color: var(--fgColor);
          }
        `
      : css`
          background: var(--bgColor);
          color: var(--fgColor);
          &:hover,
          &:focus {
            background: transparent;
            color: var(--bgColor);
          }
        `}
  ${({ mono }) =>
    mono
      ? css`
          font-family: ${fonts.SFMono};
          word-spacing: -0.059em;
          letter-spacing: -0.059em;
        `
      : css`
          font-family: ${fonts.Montserrat};
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
    outline: solid 2px var(--bgColor);
  }
`

export const StyledResponsiveButton = styled.button`
  ${baseButtonStyles};
  padding: 1.25em 1.5em;
  font-size: ${fontSizes.sm};
  ${media.thone`font-size: ${fontSizes.smish};`}
  ${media.phone`font-size: ${fontSizes.xs};`}
  ${props => handleOtherStyles(props)};
`

/* ${props => props.sizes && sizeStyles[props.sizes]} */

export const StyledButton = styled.button`
  ${baseButtonStyles};
  ${props => handleBtnSize(props)};
  ${props => handleOtherStyles(props)};
`

/*
const handleBtnSize = ({ size }) => {
  switch (size.toLowerCase()) {
    case 'small':
      return css`
        padding: 0.58rem 0.75rem;
        font-size: ${fontSizes.xs};
      `
    case 'medium':
      return css`
        padding: 0.75rem 1.25rem;
        font-size: ${fontSizes.smish};
      `
    case 'large':
    default:
      return css`
        padding: 1rem 1.5rem;
        font-size: ${fontSizes.sm};
      `
  }
}
*/
