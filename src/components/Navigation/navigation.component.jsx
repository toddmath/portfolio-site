import React from 'react'
import { MotionUl, variants } from './navigation.styles'

import MenuItem from '../MenuItem/menu-item.component'
import { navLinks } from '@config'

// function Menu({ children }) {
//   return <Ul>{children}</Ul>
// }

function Navigation({ toggle }) {
  return (
    <MotionUl variants={variants}>
      {navLinks.map(item => (
        <MenuItem item={item} key={item.name} toggle={toggle} />
      ))}
    </MotionUl>
  )
}

export default Navigation
