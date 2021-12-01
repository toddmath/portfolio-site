import React from 'react'

import { StyledLink, Item, variants } from './menu-item.styles'

function MenuItem({ item: { name, url }, toggle }) {
  return (
    <Item variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <StyledLink to={url} onClick={toggle}>
        {name}
      </StyledLink>
    </Item>
  )
}

export default MenuItem
