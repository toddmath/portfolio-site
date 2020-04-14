import { useEffect } from 'react'
import sal from 'sal.js'

const useSal = ({
  threshold = 1,
  once = false,
  disable = false,
  selector = '[data-sal]',
  animateClassName = 'sal-animate',
  disabledClassName = 'sal-disabled',
  rootMargin = '0% 50%',
  enterEventName = 'sal:in',
  exitEventName = 'sal:out',
} = {}) => {
  useEffect(() => {
    sal({
      threshold,
      once,
      disable,
      selector,
      animateClassName,
      disabledClassName,
      rootMargin,
      enterEventName,
      exitEventName,
    })
    // console.log(saly)
  }, [
    threshold,
    once,
    disable,
    selector,
    animateClassName,
    disabledClassName,
    rootMargin,
    enterEventName,
    exitEventName,
  ])
}

export default useSal
