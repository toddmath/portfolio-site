import { useState, useCallback, useEffect } from 'react'

import useTimeout from './useTimeout'
// import useScrollPosition from './useScrollPosition'
import useScrollPos from './useScrollPos'
import useEventListener from './useEventListener'
// import { navHeight } from '@config'
import { throttle } from '@utils'

const ELEMENT = typeof window === 'undefined' ? null : window

export default function useNav(element = ELEMENT) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('none')
  // const [lastScrollTop, setLastScrollTop] = useState(0)
  // const DELTA = 2

  const toggleMenu = useCallback(() => setMenuOpen(state => !state), [setMenuOpen])

  // const handleSetScrollDirection = useCallback(
  //   dir => {
  //     if (scrollDirection !== dir) setScrollDirection(dir)
  //   },
  //   [scrollDirection, setScrollDirection]
  // )
  // const handleScroll = () => {
  //   const fromTop = Math.abs(element.scrollY)
  //   if (!isMounted || Math.abs(lastScrollTop - fromTop) < DELTA || menuOpen) {
  //     return
  //   }

  //   if (fromTop <= DELTA) {
  //     handleSetScrollDirection('none')
  //   } else if (fromTop > lastScrollTop && fromTop > navHeight) {
  //     handleSetScrollDirection('down')
  //   } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
  //     handleSetScrollDirection('up')
  //   }

  //   if (lastScrollTop !== fromTop) {
  //     setLastScrollTop(fromTop)
  //   }
  // }

  const handleResize = () => {
    if (typeof window !== 'undefined' && window.innerHeight > 768 && menuOpen) {
      toggleMenu()
    }
  }

  const onKeyPress = () => {
    if (!menuOpen) return
    if (isKeyPress) toggleMenu()
  }

  // const onKeyDown = e => {
  //   if (!menuOpen) return
  //   if (e.which === 27 || e.key === 'Escape') {
  //     toggleMenu()
  //   }
  // }

  const handleMount = () => setIsMounted(true)
  useTimeout(handleMount, 10)

  // const throttledScroll = () => throttle(handleScroll(), 50)
  const throttledResize = () => throttle(handleResize(), 50)
  // const wait = 10

  useScrollPos(
    ({ prevPos, currPos }) => {
      if (menuOpen) return
      const isTop = () => Math.abs(currPos.y) <= 20
      const isShow = currPos.y > prevPos.y
      const notShow = prevPos.y > currPos.y
      if (!isTop() && isShow && scrollDirection !== 'up') setScrollDirection('up')
      if (!isTop() && notShow && scrollDirection !== 'down') setScrollDirection('down')
      if (isTop() && scrollDirection !== 'none') setScrollDirection('none')
    },
    [scrollDirection]
  )
  // useScrollPosition(throttledScroll, null, 50)
  // useScrollPosition(handleScroll, null, 100)

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

  useEffect(() => onKeyPress(), [isMounted])

  return {
    menuOpen,
    isMounted,
    scrollDirection,
    toggleMenu,
  }
}
