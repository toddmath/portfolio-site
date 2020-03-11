import styled, { css } from 'styled-components'

import { theme, media } from '@styles'

const {
  flat,
  fontSizes,
  fonts: { SFMono },
} = theme

const handleFontSize = ({ fontSize }) => {
  switch (fontSize.toLowerCase()) {
    case 'sm':
      return css`
        font-size: ${fontSizes.lg};
      `
    case 'md':
      return css`
        font-size: ${fontSizes.xl};
      `
    case 'lg':
      return css`
        font-size: ${fontSizes.xxl};
      `
    case 'xl':
    default:
      return css`
        font-size: ${fontSizes.h3};
      `
  }
}

export const StyledHeading = styled.h2`
  position: relative;
  display: ${props => props.display || 'flex'};
  align-items: ${props => props.center || 'center'};
  margin: ${props => props.margin || '10px 0 40px'};
  width: ${props => (props.width ? props.width : '100%')};
  white-space: nowrap;
  ${props => handleFontSize(props)}
  ${media.tablet`font-size: 24px;`};
  color: ${props => props.color || flat.dark.headline};
  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: 10px;
    font-family: ${SFMono};
    font-weight: normal;
    color: ${flat.dark.tertiary};
    font-size: ${fontSizes.xl};
    position: relative;
    bottom: 4px;
    ${media.tablet`font-size: ${fontSizes.lg};`};
  }
  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${flat.dark.tertiary};
    position: relative;
    top: -5px;
    margin-left: 20px;
    ${media.desktop`width: 200px`};
    ${media.tablet`width: 100%;`};
    ${media.thone`margin-left: 10px;`};
  }
`
