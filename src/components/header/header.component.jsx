import React from 'react'
import { useCycle } from 'framer-motion'

// import { useDimensions } from '@hooks'
import { Background, Toggler, Head, sidebar } from './header.styles'
import Nav from '../Navigation/navigation.component'

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  // const containerRef = useRef(null)
  // const { height } = useDimensions(containerRef)

  return (
    <Head>
      <Toggler
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        // custom={height}
        // ref={containerRef}
      >
        <Background className='menu-background' variants={sidebar} />
        <Nav toggle={() => toggleOpen()} />
      </Toggler>
    </Head>
  )
}
