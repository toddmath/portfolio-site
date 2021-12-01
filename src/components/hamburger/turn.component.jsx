import React from 'react'
import T from 'prop-types'
import { Burger, BurgerC } from './burger.component'

import styled, { css } from 'styled-components'

function handleTransform({ isToggled, isLeft, move }, isTop = true) {
  return isTop
    ? css`
        transform: ${isToggled
          ? `rotate(${45 * (isLeft ? -1 : 1)}deg) translate(${
              move * (isLeft ? -1 : 1)
            }px, ${move}px)`
          : 'none'};
      `
    : css`
        transform: ${isToggled
          ? `rotate(${45 * (isLeft ? 1 : -1)}deg) translate(${
              move * (isLeft ? -1 : 1)
            }px, ${move * -1}px)`
          : 'none'};
      `
}

const TurnWrapper = styled.div`
  ${props => props.burgerStyles};
`

const TopTurn = styled.div`
  ${props => props.barStyles}
  top: ${props => props.topOffset}px;
  transition: ${props => `${props.time}s ${props.timing}`};
  ${props => handleTransform(props, true)};
`

const MidTurn = styled.div`
  ${props => props.barStyles}
  top: ${props => props.topOffset + props.barHeight + props.margin}px;
  transition: ${props => `${props.time / 2}s ${props.timing}`};
  transform: ${props => (props.isToggled ? 'scaleX(0)' : 'none')};
`

const BottomTurn = styled.div`
  ${props => props.barStyles}
  top: ${props => `${props.topOffset + props.barHeight * 2 + props.margin * 2}px`};
  transition: ${props => `${props.time}s ${props.timing}`};
  ${props => handleTransform(props, false)};
`

export function Turn(props) {
  return (
    <Burger
      {...props}
      render={o => (
        <TurnWrapper
          burgerStyles={o.burgerStyles}
          className='hamburger'
          aria-label={o.label}
          data-testid='turn'
          onClick={o.handler}
          onKeyUp={e => (e.key === 'Enter' || e.keyCode === 13) && o.handler()}
          role='button'
          tabIndex={0}
        >
          <TopTurn
            barStyles={o.barStyles}
            topOffset={o.topOffset}
            time={o.time}
            timing={o.timing}
            isToggled={o.isToggled}
            isLeft={o.isLeft}
            move={o.move}
          />
          <MidTurn
            barStyles={o.barStyles}
            topOffset={o.topOffset}
            barHeight={o.barHeight}
            margin={o.margin}
            time={o.time}
            timing={o.timing}
            isToggled={o.isToggled}
          />
          <BottomTurn
            barStyles={o.barStyles}
            topOffset={o.topOffset}
            barHeight={o.barHeight}
            margin={o.margin}
            time={o.time}
            timing={o.timing}
            isToggled={o.isToggled}
            isLeft={o.isLeft}
            move={o.move}
          />
        </TurnWrapper>
      )}
    />
  )
}

export function TurnC(props) {
  const handleKeyUp = ({ key, keyCode }, cb) => {
    if (key === 'Enter' || keyCode === 13) {
      cb()
    }
  }

  return (
    <BurgerC {...props}>
      {o => (
        <TurnWrapper
          burgerStyles={o.burgerStyles}
          className='hamburger'
          aria-label={o.label}
          data-testid='turn'
          onClick={o.handler}
          onKeyUp={e => handleKeyUp(e, o.handler)}
          role='button'
          tabIndex={0}
        >
          <TopTurn
            barStyles={o.barStyles}
            topOffset={o.topOffset}
            time={o.time}
            timing={o.timing}
            isToggled={o.isToggled}
            isLeft={o.isLeft}
            move={o.move}
          />
          <MidTurn
            barStyles={o.barStyles}
            topOffset={o.topOffset}
            barHeight={o.barHeight}
            margin={o.margin}
            time={o.time}
            timing={o.timing}
            isToggled={o.isToggled}
          />
          <BottomTurn
            barStyles={o.barStyles}
            topOffset={o.topOffset}
            barHeight={o.barHeight}
            margin={o.margin}
            time={o.time}
            timing={o.timing}
            isToggled={o.isToggled}
            isLeft={o.isLeft}
            move={o.move}
          />
        </TurnWrapper>
      )}
    </BurgerC>
  )
}

Turn.propTypes = {
  toggled: T.bool,
  toggle: T.func,
  size: T.number,
  direction: T.oneOf(['left', 'right']),
  duration: T.number,
  distance: T.oneOf(['sm', 'md', 'lg']),
  color: T.string,
  onToggle: T.func,
  rounded: T.bool,
  label: T.string,
  hideOutline: T.bool,
}

TurnC.propTypes = {
  toggled: T.bool,
  toggle: T.func,
  size: T.number,
  direction: T.oneOf(['left', 'right']),
  duration: T.number,
  distance: T.oneOf(['sm', 'md', 'lg']),
  color: T.string,
  onToggle: T.func,
  rounded: T.bool,
  label: T.string,
  hideOutline: T.bool,
}

// export interface RenderOptions {
//   barHeight: number;
//   barStyles: CSSProperties;
//   burgerStyles: CSSProperties;
//   handler: () => void;
//   isLeft: boolean;
//   isToggled: boolean;
//   label: string | undefined;
//   margin: number;
//   move: number;
//   /** CSS transition-duration property (in seconds). */
//   time: number;
//   /** CSS transition-timing-function property. */
//   timing: string;
//   /** CSS top property (in pixels). */
//   topOffset: number;
// }
