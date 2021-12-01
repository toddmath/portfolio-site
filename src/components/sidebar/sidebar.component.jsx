import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SidebarBackground, SideBarButton } from './sidebar.styles'

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
}

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <SidebarBackground>
      <SideBarButton onClick={handleOpen}>
        <svg width='23' height='23' viewBox='0 0 23 23'>
          <motion.path
            fill='transparent'
            strokeWidth='3'
            stroke='hsl(0, 0%, 18%)'
            strokeLinecap='round'
            postionTransition={spring}
            d={isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5'}
          />
          <motion.path
            fill='transparent'
            strokeWidth='3'
            stroke='hsl(0, 0%, 18%)'
            strokeLinecap='round'
            postionTransition={spring}
            d={isOpen ? 'M 2 9.423 L 20 9.423' : 'M 2 9.423 L 20 9.423'}
            opacity={isOpen ? '0' : '1'}
          />
          <motion.path
            fill='transparent'
            strokeWidth='3'
            stroke='hsl(0, 0%, 18%)'
            strokeLinecap='round'
            postionTransition={spring}
            d={isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346'}
          />
        </svg>
      </SideBarButton>
    </SidebarBackground>
  )
}
