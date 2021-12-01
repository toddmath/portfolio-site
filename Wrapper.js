// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import sal from 'sal.js'

// const salOptions = {
//   threshold: 1,
//   once: true,
//   disable: false,
//   selector: '[data-sal]',
//   animateClassName: 'sal-animate',
//   disabledClassName: 'sal-disabled',
//   rootMargin: '0% 50%',
//   enterEventName: 'sal:in',
//   exitEventName: 'sal:out',
// }

export default function Wrapper({
  children,
  path,
  options = {
    threshold: 1,
    once: true,
    disable: false,
    selector: '[data-sal]',
    animateClassName: 'sal-animate',
    disabledClassName: 'sal-disabled',
    rootMargin: '0% 50%',
    enterEventName: 'sal:in',
    exitEventName: 'sal:out',
  },
}) {
  useEffect(() => {
    sal(options)
  }, [path, options])

  return children
}
