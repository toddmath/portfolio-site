import React, { forwardRef } from 'react'
import T from 'prop-types'

import { StyledHeading } from './heading.styles'

const Heading = forwardRef(
  ({ level, fontSize, display, margin, align, width, color, children }, ref) => (
    <StyledHeading
      ref={ref}
      as={level}
      fontSize={fontSize}
      display={display}
      margin={margin}
      align={align}
      width={width}
      color={color}
    >
      {children}
    </StyledHeading>
  )
)

Heading.propTypes = {
  level: T.string,
  fontSize: T.string,
  display: T.string,
  margin: T.string,
  align: T.string,
  width: T.string,
  color: T.string,
  children: T.oneOfType([T.element, T.arrayOf(T.element), T.arrayOf(T.string), T.string]),
}

Heading.defaultProps = {
  level: 'h2',
  fontSize: 'xl',
  display: 'flex',
  margin: '10px 0 40px',
  align: 'center',
  width: '100%',
}

export default Heading
