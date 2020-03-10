import styled, { css } from 'styled-components'

import { theme, media } from '@styles'

const { borderRadius, flat, fonts, fontSizes, transition } = theme

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

const baseButtonStyles = css`
  border: 1px solid ${flat.dark.button};
  border-radius: ${borderRadius};
  background: ${props => (props.outline ? 'transparent' : flat.dark.button)};
  color: ${props => (props.outline ? flat.dark.button : flat.dark.background)};
  font-family: ${props => (props.mono ? fonts.SFMono : fonts.Montserrat)};
  word-spacing: ${props => (props.mono ? '-0.059em' : 'unset')};
  letter-spacing: ${props => (props.mono ? '-0.059em' : 'unset')};
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transition: ${transition};
  box-sizing: border-box;
  &:hover {
    background: ${props => (props.outline ? flat.dark.button : 'transparent')};
    color: ${props => (props.outline ? flat.dark.background : flat.dark.button)};
  }
  &:focus {
    outline-offset: 0.5rem;
    outline: solid 2px ${flat.dark.button};
    background: ${props => (props.outline ? flat.dark.button : 'transparent')};
    color: ${props => (props.outline ? flat.dark.background : flat.dark.button)};
  }
`

export const StyledResponsiveButton = styled.button`
  ${baseButtonStyles};
  padding: 1rem 1.5rem;
  font-size: ${fontSizes.sm};
  ${media.thone`
    padding: 0.75rem 1.25rem;
    font-size: ${fontSizes.smish};
  `}
  ${media.phone`
    padding: 0.58rem 0.75rem;
    font-size: ${fontSizes.xs};
  `}
`

export const StyledButton = styled.button`
  ${baseButtonStyles};
  ${props => handleBtnSize(props)}
`
