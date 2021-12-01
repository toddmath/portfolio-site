import styled from 'styled-components'
import styledTheme from './StyledTheme'

import theme from './theme'
import mixins from './mixins'

const { flat, easing } = theme

const backgroundColor = styledTheme([flat.dark.background, flat.dark.cardBackground])

const Main = styled.main`
  ${mixins.sidePadding};
  /* counter-reset: ${({ counter }) => counter || 'unset'}; */
  background-color: var(--background-primary);
  /* background-color: ${backgroundColor}; */
  transition: color 200ms ${easing}, background-color 200ms ${easing};
  /* transform: translateZ(0); */

  /* From #root globalStyles.js */
  ${
    '' /* min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
  grid-auto-rows: auto; */
  }
`

export const MainGrid = styled.div`
  counter-reset: ${({ counter }) => counter || 'unset'};
  background-color: var(--background-primary);
  /* background-color: ${backgroundColor}; */
  transition: color 200ms ${easing}, background-color 200ms ${easing};
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
`

export default Main
