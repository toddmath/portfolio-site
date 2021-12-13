import styled, { css } from 'styled-components'
/* import { motion } from 'framer-motion' */

import { theme, media, styledTheme } from '@styles'

const { flat } = theme

const titleGradient = styledTheme([
  `linear-gradient(to left, rgba(74, 131, 255, 1) 4%, ${flat.dark.paragraph} 85%)`,
  `linear-gradient(to left, rgba(74, 131, 255, 1) 4%, ${theme.mode.dark.header} 85%)`,
])

export const StyledHeroTitleContainer = styled.div`
  --maskX: 0;
  --maskY: 0;
`

export const StyledTextContainer = styled.div`
  position: relative;
  cursor: default;
  user-select: none;
  transition: all 200ms ease-in-out;
  text-align: start;
`

const titleStyles = css`
  line-height: 1;
  font-weight: 500;
  overflow-wrap: break-word;
  word-wrap: break-word;
  line-break: strict;
  hyphens: auto;
  perpsective: 40rem;
`

const textTitleStyles = css`
  ${titleStyles};
  font-size: 68px;
  margin: 0;

  ${media.desktop`font-size: 68px;`};
  ${media.tablet`font-size: 56px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 46px;`};
`

const textSubtitleStyles = css`
  ${titleStyles};
  font-size: 56px;
  margin: 0 0;
  letter-spacing: -0.048rem;

  ${media.desktop`font-size: 52px;`};
  ${media.tablet`font-size: 48px;`};
  ${media.phablet`font-size: 44px;`};
  ${media.phone`font-size: 40px;`};
`

const titleGradientStyles = css`
  height: 100%;
  width: 100%;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const StyledTextTitleContent = styled.h2`
  ${textTitleStyles};
  ${titleGradientStyles};
  background-image: ${titleGradient};
`

export const StyledTextSubtitleContent = styled.h3`
  ${textSubtitleStyles};
  ${titleGradientStyles};
  background-image: ${titleGradient};
  line-height: 1.2;
`

const titleCloneStyles = css`
  ${titleGradientStyles};
  background-image: ${theme.gradTrans};
  position: absolute;
  left: 0;
  top: 0;
  perspective: 40rem;
  clip-path: polygon(
    0 0,
    calc(var(--maskX) * 1.2% + (var(--maskY) - 50) * 0.4%) 0,
    calc(var(--maskX) * 0.52% + (var(--maskY) - 50) * -0.4%) 100%,
    0 100%
  );
`

export const StyledTextTitleContentClone = styled.h2`
  ${textTitleStyles};
  ${titleCloneStyles};
`

export const StyledTextSubtitleContentClone = styled.h3`
  ${textSubtitleStyles};
  ${titleCloneStyles};
  line-height: 1.2;
`

// export const StyledTextTitleContentClone = styled.h2`
//   ${textTitleStyles};
//   color: ${theme.flat.dark.button};
//   position: absolute;
//   left: 0;
//   top: 0;
//   height: 100%;
//   width: 100%;
//   clip-path: polygon(
//     0 0,
//     calc(var(--maskX) * 1.2% + (var(--maskY) - 50) * 0.4%) 0,
//     calc(var(--maskX) * 0.52% + (var(--maskY) - 50) * -0.4%) 100%,
//     0 100%
//   );
// `

/*
import styled, { css } from 'styled-components'
import { theme, media } from '@styles'

const { flat } = theme

export const StyledTextWrapper = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  min-height: 20vh;
  padding: 0 1rem;
  background-color: ${flat.dark.link};
`

export const StyledTextContainer = styled.div`
  --maskX: 0;
  --maskY: 0;
  position: relative;
  cursor: default;
  user-select: none;
  transition: all 200ms ease-in-out;
  text-align: start;
`

const textTitleStyles = css`
  font-size: 68px;
  line-height: 1;
  margin: 0;
  font-weight: 500;
  overflow-wrap: break-word;
  word-wrap: break-word;
  line-break: strict;
  hyphens: auto;
  perpsective: 40rem;
  ${media.desktop`font-size: 68px;`};
  ${media.tablet`font-size: 56px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 46px;`};
`

const textSubtitleStyles = css`
  font-size: 56px;
  line-height: 1;
  margin: 0 0;
  letter-spacing: -0.048rem;
  font-weight: 500;
  overflow-wrap: break-word;
  word-wrap: break-word;
  line-break: strict;
  hyphens: auto;
  perpsective: 40rem;
  ${media.desktop`font-size: 52px;`};
  ${media.tablet`font-size: 48px;`};
  ${media.phablet`font-size: 44px;`};
  ${media.phone`font-size: 40px;`};
`

export const StyledTextTitleContent = styled.h2`
  ${textTitleStyles};
  color: ${theme.flat.dark.paragraph};
`

export const StyledTextSubtitleContent = styled.h3`
  --blackColor: ${flat.dark.paragraph};
  ${textSubtitleStyles};
  height: 100%;
  width: 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(to left, rgba(74, 131, 255, 1) 4%, var(--blackColor) 85%);
  -webkit-text-fill-color: transparent;
`

export const StyledTextTitleContentClone = styled.h2`
  ${textTitleStyles};
  color: transparent;
  -webkit-background-clip: text;
  background-image: ${theme.gradTrans};
  -webkit-text-fill-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  clip-path: polygon(
    0 0,
    calc(var(--maskX) * 1.2% + (var(--maskY) - 50) * 0.4%) 0,
    calc(var(--maskX) * 0.52% + (var(--maskY) - 50) * -0.4%) 100%,
    0 100%
  );
  perspective: 40rem;
`

export const StyledTextSubtitleContentClone = styled.h3`
  ${textSubtitleStyles};
  color: transparent;
  -webkit-background-clip: text;
  background-image: ${theme.gradAlt};
  -webkit-text-fill-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  line-height: 1.2;
  clip-path: polygon(
    0 0,
    calc(var(--maskX) * 1.2% + (var(--maskY) - 50) * 0.4%) 0,
    calc(var(--maskX) * 0.52% + (var(--maskY) - 50) * -0.4%) 100%,
    0 100%
  );
  perspective: 40rem;
`
*/
