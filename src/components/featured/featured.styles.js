import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import Section from '../section/section.component'
import { theme, mixins, media, Heading } from '@styles'

const { flexCenter, linkCenterUL, img, willow } = mixins
const {
  colors,
  fontSizes: { smish },
  borderRadius,
  margin,
  easing,
} = theme

export const FeaturedHeading = styled(Heading)`
  position: ;
`

export const FeaturedContainer = styled(Section)`
  --projBenz: ${easing};
  ${flexCenter};
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  max-width: unset !important;
  /* transition: transform 0.25s var(--projBenz), background 0s var(--projBenz); */
`

export const FeaturedContent = styled.div`
  position: relative;
  grid-column: 1 / 8;
  grid-row: 1 / -1;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'title' 'desc' 'tech' 'link';
  gap: 2ch;

  max-inline-size: 35ch;

  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `};

  ${media.phablet`
    padding: 30px 25px 20px;
  `};

  .projects-container {
    position: relative;
  }
`

export const StyledProjectName = styled.h3`
  grid-area: title;
  z-index: 1;
  font-size: 2rem;
  font-weight: 600;
  font-style: normal;
  margin: 0;
  margin-bottom: 1ch;
  line-height: 1;
  color: var(--header-secondary);

  ${media.tablet`
    font-size: 24px;
  `};
  ${media.thone`
    color: var(--header-secondary);
  `};

  a {
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
  grid-area: desc;
  box-shadow: var(--elevation-medium);
  position: relative;
  z-index: 2;
  padding: 2ch;
  background-color: var(--background-semi-transparent);
  backdrop-filter: blur(5px);
  color: var(--text-normal);
  font-size: 1rem;
  border-radius: ${borderRadius};

  ${media.thone`
    background-color: var(--background-semi-transparent);
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
    ${linkCenterUL};
  }
`

export const StyledTechList = styled.ul`
  grid-area: tech;
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  /* margin: 25px 0 10px; */
  /* background-color: var(--background-semi-transparent);
  background-filter: blur(5px); */

  li {
    font-size: ${smish};
    font-weight: 520;
    color: var(--text-normal);
    margin-bottom: 2ch;
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
  grid-area: link;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
  /* margin-top: 10px;
  margin-left: -10px; */
  color: var(--text-link);

  a {
    padding: 0 1ch;
    /* padding: 10px; */

    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${media.thone`
    margin: 0;
  `}
`

export const StyledFeaturedImg = styled(GatsbyImage)`
  vertical-align: middle;
  border-radius: ${borderRadius};
  ${img};

  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
  `};

  img {
    border-radius: ${borderRadius};
  }
`

export const StyledImgContainer = styled.a`
  /* ${mixins.boxShadow}; */
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  ${willow};

  ${media.tablet`
      height: 80%;
      grid-column: 13 / 4;
      align-self: end;
  `};

  ${media.thone`
    grid-column: 1 / 13;
  `};
`

export const Project = styled.article`
  /* scroll-snap-align: start; */
  position: sticky;
  top: 12ch;
  background-color: var(--background-secondary-semi-transparent);
  backdrop-filter: blur(10px);
  padding: 2ch;
  border-radius: ${borderRadius};
  box-shadow: var(--elevation-medium);

  transition: inherit;

  max-inline-size: 75ch;
  margin-inline: auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 8rem;
  }

  ${media.thone`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-around;

    & > * {
      width: 100%;
      display: block;
    }

    ${FeaturedContent} {
      width: 100%;
      display: block;
      padding: 0;
      text-align: unset;
    }

    ${StyledDescription} {
      padding: 2ch;
      /* padding: 2em; */
    }

    ${StyledLinkWrapper} {
      margin-top: 0;
    }
  `};

  ${media.tablet`
    align-items: start;
  `};

  &:nth-of-type(odd) {
    ${FeaturedContent} {
      grid-column: -1 / -8;
      justify-self: end;
      /* grid-column: 6 / -1; */
      text-align: right;

      ${media.thone`
        grid-column: 1 / -1;
        text-align: unset;
      `};

      ${media.phablet`
        padding: 30px 25px 20px;
      `};
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

    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }

    ${StyledImgContainer} {
      grid-column: 1 / 8;

      ${media.tablet`
        height: 80%;
        grid-column: 1 / 9;
        align-self: end;
      `};

      ${media.thone`
        grid-column: 1 / -1;
      `};
    }
  }
`

// export const StyledProject = styled.section`
//   transition: inherit;
//   display: grid;
//   grid-gap: 10px;
//   grid-template-columns: repeat(12, 1fr);
//   align-items: center;
//   &:not(:last-of-type) {
//     margin-bottom: 100px;
//   }
//   ${media.thone`
//     margin-bottom: 70px;
//     align-items: end;
//   `};
//   ${media.tablet`align-items: start;`};
//   &:nth-of-type(odd) {
//     ${StyledContent} {
//       grid-column: 6 / -1;
//       text-align: right;
//       ${media.thone`
//         grid-column: 1 / -1;
//         padding: 40px 40px 30px;
//       `};
//       ${media.phablet`padding: 30px 25px 20px;`};
//     }
//     ${StyledTechList} {
//       justify-content: flex-end;
//       li {
//         margin-left: ${margin};
//         margin-right: 0;
//       }
//     }
//     ${StyledLinkWrapper} {
//       justify-content: flex-end;
//       margin-left: 0;
//       margin-right: -10px;
//     }
//     ${StyledImgContainer} {
//       grid-column: 1 / 8;
//       ${media.tablet`
//         height: 80%;
//         grid-column: 1 / 9;
//         align-self: end;
//         `};
//       ${media.thone`
//         grid-column: 1 / -1;
//       `};
//     }
//   }
// `
