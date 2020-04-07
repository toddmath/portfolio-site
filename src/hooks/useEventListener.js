import { useEffect } from 'react'
// import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'
import useSavedRef from './useSavedRef'

const isFunction = p => p.constructor === Function || typeof p === 'function'
const isPassive = name => ['scroll', 'touchstart', 'touchmove', 'wheel'].some(e => e === name)

const handleConfig = n => (isPassive(n) ? { passive: true } : false)

const ELEMENT = typeof window !== 'undefined' ? window : null

/**
 * React custom hook that add's and removes an eventListener to provided element,
 * on provided eventName
 * @author Todd Matheson / https://github.com/toddmath
 * @param {string} eventName - The eventName to subscribe to
 * @param {Function} handler - Event handler function to run.
 * @param {HTMLElement} [element=window]
 */
export default function useEventListener(eventName, handler, element = ELEMENT) {
  const savedHandler = useSavedRef(handler)

  const hasListener = e => !!e?.addEventListener

  // const isSupported = () =>
  //   hasListener(element) && savedHandler.current && isFunction(savedHandler.current)

  // const isPassive = name => {
  //   const positives = ['scroll', 'touchstart', 'touchmove', 'wheel']
  //   return positives.some(evtName => evtName === name) ? { passive: true } : false
  // }

  // const isFunction = p => p.constructor === Function || typeof p === 'function'

  useEffect(() => {
    const notSupported =
      typeof window === 'undefined' ||
      !hasListener(element) ||
      !savedHandler.current ||
      !isFunction(savedHandler.current)

    if (notSupported) return

    const eventListener = event => savedHandler.current(event)
    element.addEventListener(eventName, eventListener, handleConfig(eventName))

    console.count(`attached ${eventName} listener on ${element}`)

    return () => {
      element.removeEventListener(eventName, eventListener, handleConfig(eventName))
      console.count(`removed ${eventName} listener from ${element}`)
    }
  }, [eventName, element, savedHandler])
}
