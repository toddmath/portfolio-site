import styled from 'styled-components'
import { motion } from 'framer-motion'

import { theme, mixins, media } from '@styles'

const {
  fontSizes,
  fonts: { SFMono },
} = theme

const { flexCenter, flexBetween } = mixins

export const StyledContainer = styled.footer`
  ${flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: var(--background-secondary-alt);
  color: var(--text-normal);
  text-align: center;
  height: auto;
  min-height: 70px;
`

export const StyledSocial = styled.div`
  color: var(--interactive-normal);
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

// export const StyledSocialList = styled.ul`
//   ${flexBetween};
// `

export const StyledSocialLink = styled.a`
  padding: 10px;
  color: var(--text-normal);

  &:hover {
    color: var(--text-interactive-hover);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

export const Metadata = styled.div`
  margin: 10px 0;
  /* font-family: ${SFMono}; */
  /* font-size: ${fontSizes.md}; */
  line-height: 1;
`

export const GitHubLink = styled.a`
  color: var(--text-normal);
  font-size: ${fontSizes.md};

  &:hover,
  &:focus,
  &:active {
    color: var(--text-normal);
  }
`

export const StyledGitHubInfo = styled.div`
  margin-top: 10px;

  svg {
    color: var(--interactive-normal);
    display: inline-block;
    /* height: 15px;
    width: auto; */
    margin-right: 5px;
  }
`

export const StyledGitHubInfoInner = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 7px;
  justify-content: space-between;
`
