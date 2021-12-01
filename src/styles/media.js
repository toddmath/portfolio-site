import { css } from 'styled-components'

/**
 * @type {object} sizes
 * @property {number} sizes.giant 1440px or 90em.
 * @property {number} sizes.bigDesktop 1200px or 75em.
 * @property {number} sizes.desktop 1000px or 62.5em.
 * @property {number} sizes.tablet 768px or 48em.
 * @property {number} sizes.thone 600px or 37.5em.
 * @property {number} sizes.phablet 480px or 30em.
 * @property {number} sizes.phone 376px or 23.5em.
 * @property {number} sizes.tiny 330px 20.62em.
 */
export const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
}

export const toBreakpoint = query => {
  if (!sizes[query]) {
    throw Error(`Query ${query} is not an available size.`)
  }
  return sizes[query] / 16
}

// eslint-disable-next-line prefer-template
export const toEm = px => `${(Number(px) / 16).toFixed(2)}em`

/**
 * Advnaced media query builder. Allows different media types and max / min-width queries.
 * @param {string} [type='screen'] media type supplied to media query - ie `screen`, `print`.
 * @param {boolean} [max=true] If true, `max-width` media query, if false `min-width`.
 * @returns {Object.<string, string>} Supplied CSS rules wrapped inside styled components `css` function.
 * @example
 * ```javascript
 * // Inside a styled component:
 * display: flex;
 * align-content: center;
 * ...
 * ${mediaType('screen', true).desktop`
 *   color: white;
 * `}
 * ...
 * `;
 * ```
 */
export const mediaType = (type = 'screen', max = true) =>
  Object.keys(sizes).reduce((acc, key) => {
    acc[key] = (...args) => css`
      @media ${type.length > 0 && `${type} and`} (${max ? 'max' : 'min'}-width: ${toEm(
          sizes[key]
        )}) {
        ${css(...args)};
      }
    `
    return acc
  }, {})

const SCREEN = 'screen'
const PRINT = 'print'

export const media = mediaType(SCREEN, true)
export const mediaPrint = mediaType(PRINT, true)
export const mediaMin = mediaType(SCREEN, false)

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
