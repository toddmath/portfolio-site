import React, { useState } from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'

import { theme, mixins, media } from '@styles'

const area = 48
const timing = 'cubic-bezier(0, 0, 0, 1)'

export function Burger({
  color = 'currentColor',
  direction = 'left',
  distance = 'md',
  duration = 0.4,
  hideOutline = true,
  label,
  onToggle,
  render,
  rounded = false,
  size = 32,
  toggle,
  toggled,
  _lines = 3,
}) {
  const [toggledInternal, toggleInternal] = useState(false)

  const width = Math.max(12, Math.min(area, size))
  const room = Math.round((area - width) / 2)

  const barHeightRaw = width / 12
  const barHeight = Math.round(barHeightRaw)

  const space = distance === 'lg' ? 0.25 : distance === 'sm' ? 0.75 : 0.5
  const marginRaw = width / (_lines * (space + (_lines === 3 ? 1 : 1.25)))
  const margin = Math.round(marginRaw)

  const height = barHeight * _lines + margin * (_lines - 1)
  const topOffset = Math.round((area - height) / 2)

  const translate =
    _lines === 3
      ? distance === 'lg'
        ? 4.0425
        : distance === 'sm'
        ? 5.1625
        : 4.6325
      : distance === 'lg'
      ? 6.7875
      : distance === 'sm'
      ? 8.4875
      : 7.6675
  const deviation =
    (barHeightRaw - barHeight + (marginRaw - margin)) / (_lines === 3 ? 1 : 2)
  const move = parseFloat((width / translate - deviation / (4 / 3)).toFixed(2))
  const time = Math.max(0, duration)

  const burgerStyles = css`
    cursor: pointer;
    height: ${area}px;
    position: relative;
    transition: ${time}s ${timing};
    user-select: none;
    width: ${area}px;
    outline: ${hideOutline ? 'none' : 'unset'};
  `

  const barStyles = css`
    background: ${color};
    height: ${barHeight}px;
    left: ${room}px;
    position: absolute;
    width: ${width}px;
    border-radius: ${rounded ? '9em' : 'unset'};
  `

  const isExternal = typeof toggle === 'function' && typeof toggled === 'boolean'
  const isInternal = typeof toggle !== 'function' && typeof toggled !== 'boolean'

  const toggleFunction = isExternal ? toggle : isInternal ? toggleInternal : undefined
  const toggleCallback =
    typeof onToggle === 'function' && (isExternal || isInternal) ? onToggle : undefined

  const isToggled = typeof toggled === 'boolean' ? toggled : toggledInternal

  const handler = () => {
    if (toggleCallback) {
      toggleCallback(!isToggled)
    }
    if (toggleFunction) {
      toggleFunction(!isToggled)
    }
  }

  return render({
    barHeight,
    barStyles,
    burgerStyles,
    handler,
    isLeft: direction === 'left',
    isToggled,
    label,
    margin,
    move,
    time,
    timing,
    topOffset,
  })
}

Burger.propTypes = {
  color: T.string,
  direction: T.oneOf(['left', 'right']),
  distance: T.oneOf(['sm', 'md', 'lg']),
  duration: T.number,
  hideOutline: T.bool,
  label: T.string,
  onToggle: T.func,
  rounded: T.bool,
  size: T.number,
  toggle: T.func,
  toggled: T.bool,
  _lines: T.number,
  render: T.func,
}

export const HamburgerWrapper = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  /* transition: opacity 150ms linear, filter 150ms linear; */
  text-transform: none;
  /* color: inherit; */
  /* color: var(--text-link); */
  border: 0;
  background-color: transparent;
  display: none;
  z-index: 500;
  ${media.tablet`display: flex;`};
`

export function BurgerC({
  color = 'currentColor',
  direction = 'left',
  distance = 'md',
  duration = 0.4,
  hideOutline = true,
  label,
  onToggle,
  children,
  rounded = false,
  size = 32,
  toggle,
  toggled,
  _lines = 3,
}) {
  const [toggledInternal, toggleInternal] = useState(false)

  const width = Math.max(12, Math.min(area, size))
  const room = Math.round((area - width) / 2)

  const barHeightRaw = width / 12
  const barHeight = Math.round(barHeightRaw)

  const space = distance === 'lg' ? 0.25 : distance === 'sm' ? 0.75 : 0.5
  const marginRaw = width / (_lines * (space + (_lines === 3 ? 1 : 1.25)))
  const margin = Math.round(marginRaw)

  const height = barHeight * _lines + margin * (_lines - 1)
  const topOffset = Math.round((area - height) / 2)

  const translate =
    _lines === 3
      ? distance === 'lg'
        ? 4.0425
        : distance === 'sm'
        ? 5.1625
        : 4.6325
      : distance === 'lg'
      ? 6.7875
      : distance === 'sm'
      ? 8.4875
      : 7.6675
  const deviation =
    (barHeightRaw - barHeight + (marginRaw - margin)) / (_lines === 3 ? 1 : 2)
  const move = parseFloat((width / translate - deviation / (4 / 3)).toFixed(2))
  const time = Math.max(0, duration)

  const burgerStyles = css`
    cursor: pointer;
    height: ${area}px;
    position: relative;
    display: inline-block;
    transition: ${time}s ${timing};
    user-select: none;
    width: ${area}px;
    outline: ${hideOutline ? 'none' : 'unset'};
    z-index: 200;
  `

  const barStyles = css`
    background: ${color};
    height: ${barHeight}px;
    left: ${room}px;
    position: absolute;
    width: ${width}px;
    border-radius: ${rounded ? '9em' : 'unset'};
  `

  const isExternal = typeof toggle === 'function' && typeof toggled === 'boolean'
  const isInternal = typeof toggle !== 'function' && typeof toggled !== 'boolean'

  const toggleFunction = isExternal ? toggle : isInternal ? toggleInternal : undefined
  const toggleCallback =
    typeof onToggle === 'function' && (isExternal || isInternal) ? onToggle : undefined

  const isToggled = typeof toggled === 'boolean' ? toggled : toggledInternal

  const handler = () => {
    if (toggleCallback) {
      toggleCallback(!isToggled)
    }
    if (toggleFunction) {
      toggleFunction(!isToggled)
    }
  }

  return (
    <HamburgerWrapper>
      {children({
        barHeight,
        barStyles,
        burgerStyles,
        handler,
        isLeft: direction === 'left',
        isToggled,
        label,
        margin,
        move,
        time,
        timing,
        topOffset,
      })}
    </HamburgerWrapper>
  )
}

BurgerC.propTypes = {
  color: T.string,
  direction: T.oneOf(['left', 'right']),
  distance: T.oneOf(['sm', 'md', 'lg']),
  duration: T.number,
  hideOutline: T.bool,
  label: T.string,
  onToggle: T.func,
  rounded: T.bool,
  size: T.number,
  toggle: T.func,
  toggled: T.bool,
  _lines: T.number,
  children: T.func.isRequired,
}
