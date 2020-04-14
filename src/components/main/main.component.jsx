import React from 'react'
import Measure from 'react-measure'

// import { useScroll } from '@context/scroll.context'
import { Nav, Social, Email, Footer, ProgressBar } from '@components'
import { Main as StyledMain } from '@styles'

const Main = ({ children }) => {
  // const [size, setSize] = useState({ width: -1, height: -1 })
  // const [scrollAmount, setScrollAmount] = useScroll()
  // const [height, setHeight] = useState(-1)

  // const handleSize = contentRect => {
  // setHeight(contentRect.offset.height)
  // const { top, bottom, height } = contentRect.bounds
  // setScrollAmount(contentRect)
  // }
  // const handleSize = contentRect =>
  //   setSize({ width: contentRect.client.width, height: contentRect.client.height })

  return (
    <>
      <Measure offset>
        {({ measureRef }) => (
          <>
            {/* <Background height={height} /> */}
            <StyledMain ref={measureRef} id='root' counter='section' title='Home'>
              <ProgressBar />
              {/* <CSSDebugger /> */}
              <Nav />
              <Social />
              <Email />
              {children}
              <Footer />
            </StyledMain>
          </>
        )}
      </Measure>
    </>
  )
}

export default Main
