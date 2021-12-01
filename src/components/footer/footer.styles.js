import styled from 'styled-components'
import { motion } from 'framer-motion'

import { theme, mixins, media } from '@styles'

const {
  flat,
  fontSizes: { xs, md },
  fonts: { SFMono },
} = theme

const { flexCenter, flexBetween } = mixins

// const footerBorder = styledTheme([
//   `1px solid ${flat.dark.cardBackground}`,
//   `1px solid ${flat.dark.headerBorder}`,
// ])

// const footerBg = styledTheme([flat.dark.cardBackground, flat.dark.stroke])

export const StyledContainer = styled.footer`
  ${flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: var(--background-secondary-alt);
  color: var(--text-normal);
  /* background-color: ${flat.dark.cardBackground}; */
  /* color: ${flat.dark.background}; */
  text-align: center;
  height: auto;
  min-height: 70px;
`

export const StyledSocial = styled.div`
  color: var(--interactive-normal);
  /* color: ${flat.dark.cardHeadline}; */
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`

export const MotionSocialList = styled(motion.ul).attrs(({ whileHover }) => ({
  whileHover: whileHover || { scale: 1.2 },
}))`
  ${flexBetween};
`

export const StyledSocialLink = styled.a`
  padding: 10px;
  color: var(--text-normal);
  &:hover {
    color: var(--interactive-hover);
  }
  /* svg {
    width: 20px;
    height: 20px;
  } */
`

export const StyledMetadata = styled.div`
  margin: 10px 0;
  /* font-family: ${SFMono}; */
  /* font-size: ${xs}; */
  line-height: 1;
`

export const StyledGitHubLink = styled.a`
  color: var(--text-normal);
  /* color: ${flat.dark.cardHeadline}; */
  font-size: ${md};
  &:hover,
  &:focus,
  &:active {
    color: var(--text-normal);
    /* color: ${flat.dark.cardHeadline}; */
  }
`

export const StyledGitHubInfo = styled.div`
  margin-top: 10px;
  /* font-size: calc(var(--p-font-size-min) * 1em); */
  svg {
    color: var(--interactive-normal);
    /* color: var(--text-link); */
    display: inline-block;
    /* height: 15px; */
    /* width: auto; */
    margin-right: 5px;
  }
`

export const StyledGitHubInfoInner = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 7px;
  justify-content: space-between;
  /* font-size: calc(var(--p-font-size-min) * 1em); */
`
