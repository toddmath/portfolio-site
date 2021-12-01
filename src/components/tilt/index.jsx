import React, { useCallback } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useSpring } from 'framer-motion'
// import { useSpring, animated } from 'react-spring'

import { isClient } from '@utils'
// import { useDimensions } from '@hooks'

// const AnimatedTilit = styled(animated.div)`
//   will-change: transform;
//   box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
//   transition: box-shadow 0.5s;
//   &:hover {
//     box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
//   }
// `

const AnimatedTilit = styled(motion.div)`
  will-change: transform;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  /* transition: box-shadow 0.5s; */
  transition: unset;
  /* perspective: 900px; */
  /* &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  } */
`

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.07,
]

// const calc = (x, y) => [
//   -(y - window.innerHeight / 2) / 40,
//   (x - window.innerWidth / 2) / 40,
//   1.03,
// ]

// const calc = (x, y, w, h) => [-(y - h / 4) / 60, (x - w / 2) / 60, 1]

// const springConfig = { mass: 3, tension: 350, friction: 40 }

// function trans(x, y, s) {
//   return `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
// }

export default function Tilt({ children }) {
  const INIT_XYS = [0, 0, 1]
  // const [props, set] = useSpring(() => ({
  //   xys: INIT_XYS,
  //   config: springConfig,
  // }))
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useSpring(1, { stiffness: 100, damping: 40 })

  const reset = () => {
    const [newX, newY, newScale] = INIT_XYS
    x.set(newX)
    y.set(newY)
    scale.set(newScale)
  }

  const onMouseMove = useCallback(
    e => {
      // e.persist()
      // console.log(e)
      if (isClient) {
        const [newX, newY, newScale] = calc(e.clientX, e.clientY)
        x.set(newX)
        y.set(newY)
        scale.set(newScale)
      }
      // set({ xys: isClient ? calc(clientX, clientY) : INIT_XYS })
    },
    [scale, x, y]
  )

  return (
    <AnimatedTilit
      style={{ rotateX: x, rotateY: y, scale }}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      transition={{
        scale: { delay: 0.2 },
        default: { delay: 0 },
      }}
    >
      {children}
    </AnimatedTilit>
  )
}

/*
<AnimatedTilit
  onMouseMove={onMouseMove}
  onMouseLeave={reset}
  to={trans(props.xys)}
  // style={{ transform: props.xys.interpolate(trans) }}
>
*/
