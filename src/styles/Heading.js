import styled from 'styled-components'

import theme from './theme'
import media from './media'

const {
  flat,
  fontSizes: { h3, xl, lg },
  fonts: { SFMono },
} = theme

const Heading = styled.h3`
  --margin: 10px;
  position: relative;
  display: flex;
  align-items: center;
  margin: var(--margin) 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${h3};
  ${media.tablet`font-size: 24px;`};
  color: ${flat.dark.headline};
  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: var(--margin);
    font-family: ${SFMono};
    font-weight: normal;
    color: ${flat.dark.tertiary};
    font-size: ${xl};
    position: relative;
    bottom: 4px;
    ${media.tablet`font-size: ${lg};`};
  }
  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${flat.dark.tertiary};
    position: relative;
    top: -5px;
    margin-left: calc(var(--margin) * 2);
    ${media.desktop`width: 200px;`};
    ${media.tablet`width: 100%;`};
    ${media.thone`margin-left: var(--margin);`};
  }
`

export default Heading
