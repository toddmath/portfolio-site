import { useState, useMemo } from 'react'

import { useBoolean } from './useBoolean'
import useTimeout from './useTimeout'
// import useScrollPosition from './useScrollPosition'
import useScrollPos from './useScrollPos'
import useEventListener from './useEventListener'
// import { navHeight } from '@config'
import { throttle } from '@utils'

const ELEMENT = typeof window === 'undefined' ? null : window

export default function useNav(element = ELEMENT) {
  const { isToggled: menuOpen, setToggle: toggleMenu } = useBoolean(false)
  const { isToggled: isMounted, setTrue: setMounted } = useBoolean(false)
  const [scrollDirection, setScrollDirection] = useState('none')

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      if (window?.innerHeight > 768 && menuOpen) toggleMenu()
    }
    // if (typeof window !== 'undefined' && window.innerHeight > 768 && menuOpen) {
    //   toggleMenu()
    // }
  }

  // const onKeyPress = useCallback(
  //   e => {
  //     if (!menuOpen) return
  //     if (e.which === 27 || e.key === 'Escape') toggleMenu()
  //   },
  //   [menuOpen, toggleMenu]
  // )

  // const onKeyDown = e => {
  //   if (!menuOpen) return
  //   if (e.which === 27 || e.key === 'Escape') {
  //     toggleMenu()
  //   }
  // }

  useTimeout(setMounted, 10)

  const throttledResize = () => throttle(handleResize(), 50)

  useScrollPos(
    ({ prevPos, currPos }) => {
      if (menuOpen) return
      const isTop = () => Math.abs(currPos.y) <= 20
      const isShow = currPos.y > prevPos.y
      const notShow = prevPos.y > currPos.y

      if (!isTop()) {
        if (isShow && scrollDirection !== 'up') {
          setScrollDirection('up')
        }
        if (notShow && scrollDirection !== 'down') {
          setScrollDirection('down')
        }
      }
      if (isTop() && scrollDirection !== 'none') {
        setScrollDirection('none')
      }
    },
    [scrollDirection, menuOpen]
  )

  const isEscape = e => e.which === 27 || e.key === 'Escape'

  useEventListener('resize', throttledResize, element)
  useEventListener(
    'keydown',
    evt => {
      if (!menuOpen) return
      if (isEscape(evt)) toggleMenu()
    },
    element
  )

  return useMemo(
    () => ({
      menuOpen,
      isMounted,
      scrollDirection,
      toggleMenu,
    }),
    [isMounted, menuOpen, scrollDirection, toggleMenu]
  )
}
