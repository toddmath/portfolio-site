import styled, { css } from 'styled-components'
// import { motion } from 'framer-motion'

import { theme, mixins, media, mediaMin, Section } from '@styles'

const { transition } = theme
const { flexCenter, inlineLink, bigButton } = mixins

const titleStyles = css`
  margin: 0;
  color: var(--header-primary);
  transition: unset;
`

const subTitleStyles = css`
  margin: 0 0;
  margin-left: 0.5ch;
  color: var(--header-primary);

  ${media.tablet`margin: 0 auto 0 0.5rem;`};

  transition: unset;
  line-height: calc(var(--h2-line-height-min) * 0.9);

  ${mediaMin.phone`
      line-height: calc((var(--h3-line-height-min) * 1em) + (var(--h3-line-height-max) - var(--h3-line-height-min)) * ((100vw - (var(--bp-small) * 1em )) / (var(--bp-xlarge) - var(--bp-small))));
      font-size: calc((var(--h3-font-size-min) * 1em ) + (var(--h3-font-size-max) - var(--h3-font-size-min)) * ((100vw - (var(--bp-small) * 1em )) / (var(--bp-xlarge) - var(--bp-small))));
    `}

  ${mediaMin.bigDesktop`
      font-size: calc(var(--h3-font-size-max) * 1em);
      line-height: calc(var(--h3-line-height-max) * 0.8);
    `}
`

export const HeroContainer = styled(Section)`
  ${flexCenter};
  flex-direction: column;
  align-items: flex-start;
  gap: 2ch;
  min-height: 100vh;
  max-width: 70ch;
  width: 100%;
  /* width: 100vw; */

  ${media.tablet`
    padding-top: 150px;
  `};

  /* ${media.desktop`
    max-width: 60ch;
  `}; */

  ${media.desktop`
    max-width: 60ch;
    `}

  div {
    width: 100%;
  }

  /* h1 { */
  /*   ${titleStyles}; */
  /*   width: 100%; */
  /*   display: block; */
  /*   font-size: 3rem; */
  /*   font-weight: 500; */
  /* } */
  /**/
  /* p.subtitle { */
  /*   ${subTitleStyles}; */
  /* } */
  /**/
  /* .overline { */
  /*   width: 100%; */
  /*   display: block; */
  /*   font-size: 1.4rem; */
  /* } */

  h2 {
    ${titleStyles};
  }

  h3 {
    ${subTitleStyles};
  }
  /* ${titleStyles};
  ${subTitleStyles}; */
`

export const StyledOverline = styled.h1`
  color: var(--text-normal);
  font-weight: 570;
  font-size: 1.2rem;
  font-style: italic;
  margin: 0 0 1rem 0.3rem;
  text-transform: none;
  transition: color 400ms ease, background-color 400ms ease;
  /* transition: ${transition}; */

  ${media.tablet`
    margin: 0 auto 0.8rem 0.8rem;
  `}
`

export const StyledDescription = styled.div`
  margin-top: 1.5rem;
  width: 50%;
  max-width: 50ch;
  word-break: break-word;
  /* max-width: calc(var(--bp-small) * 1.4em); */
  /* transition: color 400ms ease, background-color 400ms ease; */
  /* transition: ${transition}; */

  a {
    ${inlineLink};
  }

  p {
    transition: color 400ms ease, background-color 400ms ease;
    /* margin-left: 0.3rem; */
  }
`

export const StyledEmailLink = styled.a`
  ${bigButton};
  margin-top: 50px;
  transition: ${transition};
`

export const StyledTitle = styled.h2`
  ${titleStyles};
`

export const StyledSubtitle = styled.h3`
  ${subTitleStyles};
`

export const ButtonContainer = styled.div`
  margin-top: 6ch;

  /* ${media.tablet`margin-top: 2rem;`} */
  /* ${media.thone`margin-top: 30px;`}
  ${media.phone`margin-top: 20px;`} */
`
