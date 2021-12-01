import styled from 'styled-components'
import { motion } from 'framer-motion'

import { theme, mixins, media, Button, styledTheme } from '@styles'

const {
  flat,
  fontSizes: { h3, xxl, xs },
  fonts: { SFMono },
  borderRadius,
  transition,
  easing,
} = theme

const { linkCenterUL, boxShadow, flexBetween } = mixins

const textShadow = `0 0 0 var(--textFG), 0 0 0 var(--highlite),
0.0025em 0.0025em 0 var(--highlite), 0.005em 0.005em 0 var(--highlite),
0.0075em 0.0075em 0 var(--highlite), 0.01em 0.01em 0 var(--highlite),
0.0125em 0.0125em 0 var(--highlite), 0.015em 0.015em 0 var(--highlite),
0.0175em 0.0175em 0 var(--highlite), 0.02em 0.02em 0 var(--highlite),
0.0225em 0.0225em 0 var(--highlite), 0.025em 0.025em 0 var(--highlite),
0.0275em 0.0275em 0 var(--highlite), 0.03em 0.03em 0 var(--highlite),
0.0325em 0.0325em 0 var(--highlite), 0.035em 0.035em 0 var(--highlite),
0.0375em 0.0375em 0 var(--highlite), 0.04em 0.04em 0 var(--highlite),
0.0425em 0.0425em 0 var(--highlite), 0.045em 0.045em 0 var(--highlite),
0.0475em 0.0475em 0 var(--highlite), 0.05em 0.05em 0 var(--highlite),
0.0525em 0.0525em 0 var(--highlite), 0.055em 0.055em 0 var(--highlite),
0.0575em 0.0575em 0 var(--highlite), 0.06em 0.06em 0 var(--highlite),
0.0625em 0.0625em 0 var(--highlite), 0.065em 0.065em 0 var(--highlite),
0.0675em 0.0675em 0 var(--highlite), 0.07em 0.07em 0 var(--highlite),
0.0725em 0.0725em 0 var(--highlite), 0.075em 0.075em 0 var(--highlite),
0.0775em 0.0775em 0 var(--highlite), 0.08em 0.08em 0 var(--highlite),
0.0825em 0.0825em 0 var(--highlite), 0.085em 0.085em 0 var(--highlite),
0.0875em 0.0875em 0 var(--highlite), 0.09em 0.09em 0 var(--highlite),
0.0925em 0.0925em 0 var(--highlite), 0.095em 0.095em 0 var(--highlite),
0.0975em 0.0975em 0 var(--highlite), 0.1em 0.1em 0 var(--highlite)`

const headingColor = styledTheme([flat.dark.headline, flat.dark.background])
const headingShadow = styledTheme(['none', textShadow])

export const StyledTitle = styled.h3`
  --highlite: ${flat.dark.highlight};
  --textFG: ${flat.dark.paragraph};
  margin: 0 auto;
  font-size: ${h3};
  color: ${headingColor};
  text-shadow: ${headingShadow};
  transition: color 200ms ${easing};
  line-height: 1.2;
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`

export const MotionGrid = styled(motion.div)`
  margin-top: 50px;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(250px, 325px));
  grid-auto-columns: 100%;
  grid-auto-rows: minmax(300px, 1fr);
  gap: 2em 0;
  position: relative;
  /* place-items: stretch stretch; */
  justify-items: center;
  justify-content: space-around;
  width: 100%;
  > section {
    grid-column: span 1;
  }
  /* ${media.desktop`
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  `}; */
  ${media.phablet`
    grid-template-columns: repeat(auto-fit, 100%);
    justify-content: stretch;
  `}
  ${media.thone`
    /* grid-template-columns: auto; */
    gap: 2em;
  `}
`

// export const StyledGrid = styled(motion.div)`
//   margin-top: 50px;
//   .projects {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//     /* grid-gap: 15px; */
//     grid-gap: 2vw;
//     position: relative;
//     ${media.desktop`
//       grid-gap: 3vw;
//       grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//     `};
//     ${media.thone`
//       grid-template-columns: auto;
//       grid-gap: 2em;
//     `}
//   }
// `

const projectBorderColor = styledTheme([
  `2px solid ${flat.dark.cardBackground}`,
  `2px solid ${flat.dark.headline}`,
])

export const StyledProjectInner = styled.div`
  box-sizing: border-box;
  ${boxShadow};
  ${flexBetween};
  flex-direction: column;
  align-items: start;
  position: relative;
  /* padding: 2rem 1.75rem; */
  /* padding: 1.5em 1.7em; */
  padding: 2em;
  height: 100%;
  border-radius: ${borderRadius};
  transition: ${transition};
  background-color: ${flat.dark.cardBackground};
  border: ${projectBorderColor};
`

export const MotionProject = styled(motion.section)`
  cursor: default;
`

export const StyledProjectHeader = styled.div`
  ${flexBetween};
  margin-bottom: 30px;
`

const folderColors = styledTheme([flat.dark.paragraph, flat.dark.cardParagraph])

export const StyledFolder = styled.div`
  color: ${folderColors};
  /* svg {
    width: 40px;
    height: 40px;
  } */
`

export const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: ${flat.dark.background};
`

export const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  &:hover,
  &:focus {
    color: ${flat.dark.background};
  }
  svg {
    width: 20px;
    height: 20px;
  }
`

export const StyledProjectName = styled.h4`
  margin: 0 0 10px;
  font-size: ${xxl};
  color: ${flat.dark.cardHeadline};
`

export const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: ${flat.dark.cardParagraph};
  a {
    ${linkCenterUL};
  }
`

export const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-top: 20px;
  li {
    font-family: ${SFMono};
    font-size: ${xs};
    color: ${flat.dark.secondary};
    line-height: 1.75;
    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
`

export const StyledMoreButton = styled(Button)`
  margin: 100px auto 0;
`
