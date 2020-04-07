import { useState, useCallback } from 'react'

// import createMemo from './createMemo'
// import useEventListener from './useEventListener'
// import useScrollPosition from './useScrollPosition'
// import { throttle } from '@utils'
import useScrollPos from './useScrollPos'

export default function useProgressBar() {
  const [progress, setProgress] = useState(0)

  // const dimensions = [
  //   document.body.scrollHeight,
  //   document.body.offsetHeight,
  //   document.body.clientHeight,
  // ]

  // const getDocHeight = () => Math.max(...dimensions)

  // const calculateScrollDistance = () => {
  //   const scrollTop = window.scrollY
  //   const winHeight = window.innerHeight
  //   const docHeight = document.body.clientHeight

  //   return Math.floor((scrollTop / (docHeight - winHeight)) * 100)
  // }

  const makeAbs = n => n && Math.abs(n)

  const scrollHandler = ({ currPos }) => {
    if (typeof window !== 'undefined') {
      const winHeight = window.innerHeight
      const docHeight = document.body.clientHeight
      setProgress(Math.floor((makeAbs(currPos.y) / (docHeight - winHeight)) * 100))
    }
  }

  // const handleScroll = () => {
  //   setProgress(calculateScrollDistance())
  // }

  useScrollPos(scrollHandler, [], false, false, 20)

  // const scalePercent = () => `${progress / 100}`
  const scalePercent = useCallback(() => `${progress / 100}`, [progress])

  // useEventListener('scroll', () => {
  //   requestAnimationFrame(() => setProgress(calculateScrollDistance()))
  // })

  // useEffect(() => {
  //   const dimensions = [
  //     document.body.scrollHeight,
  //     document.documentElement.scrollHeight,
  //     document.body.offsetHeight,
  //     document.documentElement.offsetHeight,
  //     document.body.clientHeight,
  //     document.documentElement.clientHeight,
  //   ]

  //   const getDocHeight = () => Math.max(...dimensions)

  //   const calculateScrollDistance = () => {
  //     const scrollTop = window.pageYOffset
  //     const winHeight = window.innerHeight
  //     const docHeight = getDocHeight()
  //     // const totalDocScrollLength = docHeight - winHeight

  //     const scrollPosition = Math.floor((scrollTop / (docHeight - winHeight)) * 100)
  //     setProgress(scrollPosition)
  //   }

  //   const handleScroll = () => {
  //     requestAnimationFrame(() => {
  //       calculateScrollDistance()
  //     })
  //   }

  //   document.addEventListener('scroll', handleScroll, { passive: true })

  //   return () => {
  //     document.removeEventListener('scroll', handleScroll, { passive: true })
  //   }
  // }, [])

  return [scalePercent(), setProgress]
}
