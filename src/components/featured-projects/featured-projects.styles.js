import styled from 'styled-components'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'

import { theme, mixins, media } from '@styles'

const { colors, flat, fontSizes, borderRadius, margin, easing } = theme

export const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 8;
  grid-row: 1 / -1;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 1rem;

  padding: 2rem;

  ${media.tablet`
    grid-column: 1 / 10;
  `}

  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `};

  ${media.phablet`
    padding: 30px 25px 20px;
  `};
`

export const StyledProjectName = styled.h4`
  z-index: 100;
  font-size: 24px;
  /* margin: 0 0 0.5rem; */
  margin: 0;
  padding: 0;
  /* color: var(--header-secondary); */
  transition: color 200ms ${easing};
  ${media.thone`
    color: ${flat.dark.headline};
  `};

  --wght: 'wght' 444;
  --opsz: 'opsz' 19;
  --yaxs: 'YAXS' 422;
  --grad: 'GRAD' 422;

  & > a {
    color: var(--interactive-normal);
    font-size: 28px;
    line-height: 1.4;
    ${media.tablet`
      display: block;
    `};

    &:hover,
    &:active {
      color: inherit;
    }
  }
`

export const StyledDescription = styled.div`
  box-shadow: var(--elevation-medium);
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: var(--background-secondary);
  color: var(--text-normal);
  font-size: ${fontSizes.lg};
  border-radius: ${borderRadius};
  transition: border-color 1000ms ${easing}, background-color 1000ms ${easing};

  ${media.thone`
    background-color: ${flat.dark.semiCardBackground};
    padding: 20px;
    box-shadow: none;
    width: 100%;

    &:hover {
      box-shadow: none;
    }
  `};

  p {
    margin: 0;
  }

  a {
    ${mixins.linkCenterUL};
  }
`

export const StyledTechList = styled.ul`
  font-family: var(--font-sys);
  font-variant-ligatures: normal;
  font-style: normal;
  font-weight: 500;
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  /* margin: 25px 0 10px !important; */
  background: transparent;
  /* TODO: dial this is: */
  mix-blend-mode: multiply;

  li {
    font-family: var(--font-sys);
    font-size: ${fontSizes.md};
    color: var(--text-normal);
    transition: color 200ms ${easing};
    margin-bottom: 7px;
    white-space: nowrap;

    &:not(:last-of-type) {
      margin-right: ${margin};
    }

    ${media.thone`
      /* color: ${colors.lightestSlate}; */
      margin-right: 10px;
    `};
  }

  ${media.thone`
    li {
      margin-bottom: 0;
      margin: 0 !important;

      &:not(:last-of-type) {
        margin-right: ${margin} !important;
        margin-left: 0 !important;
      }
    }
  `}
`

export const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  /* margin-top: 10px; */
  margin-top: 0;
  margin-left: -10px;
  color: var(--text-link);
  transition: unset;

  a {
    padding: 10px;
  }

  ${media.thone`
    margin: 0;
  `}
`

export const StyledFeaturedImg = styled(Img)`
  vertical-align: middle;
  border-radius: ${borderRadius};
  ${mixins.img};
  max-height: 340px;

  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
  `};

  img {
    border-radius: ${borderRadius};
  }
`

export const MotionImgContainer = styled(motion.a)`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  box-shadow: var(--elevation-high);
  ${mixins.willow};
  transition: box-shadow 300ms ease;

  ${media.tablet`
      /* height: 80%; */
      grid-column: 13 / 4;
      align-self: end;
    `}

  ${media.thone`
    grid-column: 1 / 13;
  `};

  &:hover {
    box-shadow: var(--elevation-medium);
  }
`

export const StyledProject = styled.section`
  position: sticky;
  /* top: 0px; */
  z-index: 0;
  transition: inherit;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  perspective: 100em;
  background-color: var(--background-semi-transparent);
  backdrop-filter: blur(3px);
  margin-bottom: 128px;

  ${media.thone`
    ${StyledContent} {
      width: 100%;
      display: block;
      padding: 0;
      text-align: unset;
    }

    ${StyledDescription} {
      padding: 2em;
    }

    /* ${StyledLinkWrapper} {
      margin-top: 0;
    } */
  `};

  ${media.tablet`align-items: start;`};

  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 6 / -1;
      text-align: right;

      ${media.tablet`
        grid-column: -10 / -1;
      `}

      ${media.thone`
        grid-column: 1 / -1;
        text-align: unset;
      `};

      ${media.phablet`padding: 30px 25px 20px;`};
    }

    ${StyledTechList} {
      justify-content: flex-end;

      li {
        margin-left: ${margin};
        margin-right: 0;
      }

      ${media.thone`
        justify-content: flex-start;
      `}
    }

    /* ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    } */

    ${MotionImgContainer} {
      grid-column: 1 / 8;

      ${media.tablet`
        /* height: 80%; */
        grid-column: 1 / 9;
        align-self: end;
      `};

      ${media.thone`
        grid-column: 1 / -1;
      `};
    }
  }
`
