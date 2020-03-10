import { useEffect } from 'react'

import useSavedRef from './useSavedRef'

/**
 * React custom hook that add's and removes an eventListener to provided element,
 * on provided eventName
 * @author Todd Matheson / https://github.com/toddmath
 * @param {string} eventName - The eventName to subscribe to
 * @param {React.MutableRefObject} handler
 * @param {HTMLElement} [element=window]
 */
export default function useEventListener(eventName, handler, element = window) {
  const savedHandler = useSavedRef(handler)
  const isSupported = e => e && e?.addEventListener

  const isPassive = name => {
    const positives = ['scroll', 'touchstart', 'wheel']
    return positives.some(evtName => evtName === name) ? { passive: true } : false
  }

  useEffect(() => {
    if (!isSupported(element) || !savedHandler.current || typeof savedHandler.current !== 'function') {
      return
    }

    const eventListener = event => savedHandler.current(event)
    element.addEventListener(eventName, eventListener, isPassive(eventName))

    console.count(`attached ${eventName} listener on ${element}`)

    return () => {
      element.removeEventListener(eventName, eventListener, isPassive(eventName))
      console.count(`removed ${eventName} listener from ${element}`)
    }
  }, [eventName, element])
}
