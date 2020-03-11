import React from 'react'
import PropTypes from 'prop-types'

import { FlexContainer } from './flex.styles'

const Flex = ({
  props,
  alignItems,
  block,
  justifyContent,
  flexDirection,
  flexGrow,
  flexShrink,
  flexBasis,
  flexWrap,
  flex,
  margin,
  padding,
  width,
  height,
  maxWidth,
  children,
}) => (
  <FlexContainer
    alignItems={alignItems}
    block={block}
    justifyContent={justifyContent}
    flexDirection={flexDirection}
    flexGrow={flexGrow}
    flexShrink={flexShrink}
    flexBasis={flexBasis}
    flexWrap={flexWrap}
    flex={flex}
    margin={margin}
    padding={padding}
    width={width}
    height={height}
    maxWidth={maxWidth}
    {...props}
  >
    {children}
  </FlexContainer>
)

Flex.propTypes = {
  props: PropTypes.any,
  children: PropTypes.node,
}

export default Flex
