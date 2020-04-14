/* eslint-disable no-bitwise */
import React, { memo, useMemo, useEffect } from 'react'
import _ from 'lodash'

import { useToggle } from '@hooks'
import Row from './row.component'
import Column from './column.component'
import { FormattedIcon } from '@components/icons'
import { StyledBackground } from './background.styles'

const icons = ['React', 'Sass', 'Ts', 'Js']

const getIcon = () => icons[_.random(0, icons.length - 1, false)]

const oneOrTwo = () => _.random(1, 2, false)

const createRowArray = len => {
  let i = 0
  const arr = []
  // while (i-- > 0) {
  //   arr.push(i)
  // }
  // return arr.sort((a, b) => a - b)
  while (i++ < len) {
    arr.push(i)
  }
  return arr
}

const iconObject = createRowArray(50).reduce((acc, _, index) => {
  acc[index] = [getIcon(), getIcon(), getIcon(), getIcon()]
  return acc
}, {})

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  height: '100%',
}

const SingleRow = ({ icons }) => {
  const [singleIcon, setSingleIcon] = useToggle(oneOrTwo() === 1)
  // const getIcon = useCallback(() => icons[_.random(0, icons.length - 1, false)], [
  //   icons,
  //   icons.length,
  // ])
  // const oneOrTwo = useCallback(() => _.random(1, 2, false), [])

  useEffect(() => {
    setSingleIcon(oneOrTwo() === 1)
    console.log('icons ', icons)
  }, [])

  return (
    <Row>
      <Column>
        <div data-sal='fade' data-sal-duration='500' style={styles}>
          <FormattedIcon name={icons[0]} />
          {!singleIcon && <FormattedIcon name={icons[1]} />}
        </div>
      </Column>
      <Column>
        <div data-sal='fade' data-sal-duration='500' style={styles}>
          <FormattedIcon name={icons[2]} />
          {singleIcon && <FormattedIcon name={icons[3]} />}
        </div>
      </Column>
    </Row>
  )
}

// const ColumnSingleIcon = () => {
//   const getIcon = useCallback(() => icons[_.random(0, icons.length - 1, false)], [
//     icons,
//     icons.length,
//   ])

//   return (
//     <Column>
//       <FormattedIcon name={getIcon()} />
//     </Column>
//   )
// }

const Background = ({ numOfRows = 30, height }) => {
  // eslint-disable-next-line no-param-reassign
  // const rows = useMemo(() => Array(numOfRows).map((n, i) => (n = i)), [numOfRows])
  const rows = createRowArray(numOfRows)
  // console.log('rows: ', rows)
  // const { width, height } = backgroundSize
  const rowHeight = useMemo(() => ~~(height / numOfRows), [height, numOfRows])
  const svgSize = useMemo(() => ~~(rowHeight / 1.75), [rowHeight])

  return (
    <StyledBackground
      style={{
        '--bgHeight': `${height}px`,
        '--rowHeight': `${rowHeight}px`,
        '--svgSize': `${svgSize}px`,
        '--numRows': numOfRows,
      }}
    >
      {rows.map(i => (
        <SingleRow key={i} icons={iconObject[i]} />
      ))}
    </StyledBackground>
  )
}

export default memo(Background)
