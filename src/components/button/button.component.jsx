import React from 'react'
import PropTypes from 'prop-types'

import { useToggle } from '@hooks'
import { StyledButton, StyledResponsiveButton } from './button.styles'

function Button({
  className = '',
  outline = false,
  mono = true,
  size = 'large',
  responsive = false,
  as = 'button',
  href,
  otherStyles,
  children,
}) {
  const [activated, toggleActivated] = useToggle(false)

  let linkProps = {}
  if (as === 'a' && href) {
    linkProps = { href }
  }

  let btnProps = {
    className: `button ${className}`,
    'aria-pressed': activated ? 'true' : 'false',
    type: 'button',
    outline,
    mono,
    as,
    otherStyles,
  }
  if (responsive === false) btnProps = { ...btnProps, size }

  if (responsive === true)
    return (
      <StyledResponsiveButton onClick={toggleActivated} {...btnProps} {...linkProps}>
        {children}
      </StyledResponsiveButton>
    )

  return (
    <StyledButton onClick={toggleActivated} size={size} {...btnProps} {...linkProps}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  mono: PropTypes.bool,
  outline: PropTypes.bool,
  responsive: PropTypes.bool,
  otherStyles: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small', 'lg', 'md', 'sm', 'l', 'm', 's']),
}

export default Button
