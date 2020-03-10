import { useState, useCallback, useEffect } from 'react'

import useTimeout from './useTimeout'
import useScrollPosition from './useScrollPosition'
import useEventListener from './useEventListener'
import { navHeight } from '@config'
import { throttle } from '@utils'

export default function useNav(element = window) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('none')
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const DELTA = 2

  const toggleMenu = useCallback(() => setMenuOpen(state => !state), [setMenuOpen])

  const handleSetScrollDirection = useCallback(
    dir => {
      if (scrollDirection !== dir) setScrollDirection(dir)
    },
    [scrollDirection, setScrollDirection]
  )

  const handleScroll = () => {
    const fromTop = Math.abs(element.scrollY)
    if (!isMounted || Math.abs(lastScrollTop - fromTop) < DELTA || menuOpen) {
      return
    }

    if (fromTop <= DELTA) {
      handleSetScrollDirection('none')
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      handleSetScrollDirection('down')
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      handleSetScrollDirection('up')
    }

    if (lastScrollTop !== fromTop) {
      setLastScrollTop(fromTop)
    }
  }

  const handleResize = () => {
    if (window.innerHeight > 768 && menuOpen) {
      toggleMenu()
    }
  }

  const onKeyPress = () => {
    if (!menuOpen) return
    if (isKeyPress) toggleMenu()
  }

  const onKeyDown = e => {
    if (!menuOpen) return
    if (e.which === 27 || e.key === 'Escape') {
      toggleMenu()
    }
  }

  const handleMount = () => setIsMounted(true)
  useTimeout(handleMount, 10)

  const throttledScroll = () => throttle(handleScroll())
  const throttledResize = () => throttle(handleResize())

  useScrollPosition(throttledScroll, null, element, true)

  useEventListener('resize', throttledResize, element)
  useEventListener('keydown', e => onKeyDown(e), element)

  useEffect(() => onKeyPress(), [isMounted])

  return {
    menuOpen,
    isMounted,
    scrollDirection,
    toggleMenu,
  }
}
