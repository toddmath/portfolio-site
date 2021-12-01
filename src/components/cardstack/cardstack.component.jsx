/* eslint-disable one-var */
import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'

// function handleTop(numCards = 4) {
//   let TOP = 0,
//     i = 0
//   let styles = css``
//   while (i < numCards) {
//     styles += css`
//       & > section:nth-child(${i + 1}) {
//         top: ${TOP}px;
//       }
//     `
//     TOP += 20
//     i++
//   }
//   return styles
// }

const CardStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  & > section:nth-child(1) {
    top: 0;
  }

  & > section:nth-child(2) {
    top: 20px;
  }

  & > section:nth-child(3) {
    top: 40px;
  }

  & > section:nth-child(4) {
    top: 60px;
  }
`

function CardStack({ children }) {
  return <CardStackContainer>{children}</CardStackContainer>
}

CardStack.propTypes = {
  children: T.node,
}

export default CardStack
