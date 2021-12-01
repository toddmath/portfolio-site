// @ts-nocheck
import { css } from 'styled-components'

/**
 * @readonly
 * @enum {{ giant: number, bigDesktop: number, desktop: number, tablet: number, thone: number, phablet: number, phone: number, tiny: number }} sizes
 * @description
 * |//| giant        1440px    90em
 * |//| bigDesktop   1200px    75em
 * |//| desktop      1000px    62.5em
 * |//| tablet       768px     48em
 * |//| thone        600px     37.5em
 * |//| phablet      480px     30em
 * |//| phone        376px     23.5em
 * |//| tiny         330px     20.62em |//|
 */
export const sizes = Object.freeze({
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
})

/**
 * Helper function to query and convert breakpoint to em.
 * @param {'giant'|'bigDesktop'|'desktop'|'tablet'|'thone'|'phablet'|'phone'|'tiny'} query Breakpoint value.
 * @returns {number?} Coverted pixel to em value
 */
export const toBreakpoint = query => {
  if (!sizes[query]) {
    throw new Error(`Query ${query} is not an available size.`)
  }
  return sizes[query] / 16
}

/**
 * @param {number|string} px Pixels value to covert / parse.
 * @returns {string} Coverted em string.
 */
export const toEm = px => `${(+px / 16).toFixed(2)}em`

/**
 * Advnaced media query builder. Allows different media types and max / min-width queries.
 * @param {string} [type='screen'] media type supplied to media query - ie `screen`, `print`.
 * @param {boolean} [max=true] If true, `max-width` media query, if false `min-width`.
 * @returns {string} Suplied CSS rules wrapped inside styled components `css` function.
 * @example
 * // Inside a styled component:
 * display: flex;
 * align-content: center;
 * ...
 * ${mediaType('screen', true).desktop`
 *   color: white;
 * `}
 * ...
 * `;
 */
export const mediaType = (type = 'screen', max = true) =>
  Object.entries(sizes).reduce((acc, [key, px]) => {
    acc[key] = (...args) => css`
      @media ${type.length > 0 && `${type} and`} (${max ? 'max' : 'min'}-width: ${toEm(
      px
    )}) {
        ${css(...args)};
      }
    `
    return acc
  }, {})

const [SCREEN, PRINT] = ['screen', 'print']

export const media = mediaType(SCREEN, true)
export const mediaPrint = mediaType(PRINT, true)
export const mediaMin = mediaType(SCREEN, false)

export const mediaQuery = (query = '') => (...args) =>
  css`@media screen and(${query}) {${css(...args)}}`

export const mediaReducedMotion = mediaQuery('prefers-reduced-motion: reduce')
export const mediaRetina = mediaQuery('min-resolution: 2ppx')

// export const media = Object.keys(sizes).reduce((acc, key) => {
//   if (key in sizes) {
//     acc[key] = (...args) => css`
//       @media (max-width: ${toEm(sizes[key])}) {
//         ${css(...args)};
//       }
//     `
//   }
//   return acc
// }, {})

// export const minMedia = Object.keys(sizes).reduce((acc, key) => {
//   if (key in sizes) {
//     acc[key] = (...args) => css`
//       @media (min-width ${toEm(sizes[key])}) {
//         ${css(...args)};
//       }
//     `
//   }
//   return acc
// }, {})

export default media
