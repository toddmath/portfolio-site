import React from 'react'
import PropTypes from 'prop-types'

import { useToggle } from '@hooks'
import { StyledButton, StyledResponsiveButton } from './button.styles'

const Button = ({
  className = '',
  outline = false,
  mono = true,
  size = 'large',
  responsive = false,
  as = 'button',
  href,
  children,
}) => {
  const [activated, toggleActivated] = useToggle(false)

  let extraProps = {}
  if (as === 'a' && href) {
    extraProps = { href }
  }

  if (responsive)
    return (
      <StyledResponsiveButton
        className={`button ${className}`}
        aria-pressed={activated ? 'true' : 'false'}
        onClick={toggleActivated}
        type='button'
        outline={outline}
        mono={mono}
        as={as}
        {...extraProps}
      >
        {children}
      </StyledResponsiveButton>
    )

  return (
    <StyledButton
      className={`button ${className}`}
      aria-pressed={activated ? 'true' : 'false'}
      onClick={toggleActivated}
      type='button'
      outline={outline}
      mono={mono}
      size={size}
      as={as}
      {...extraProps}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
  href: PropTypes.string,
  mono: PropTypes.bool,
  outline: PropTypes.bool,
  responsive: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
}

export default Button
