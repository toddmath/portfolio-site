import styled from 'styled-components'

import { Article, Heading } from '@styles'

// const { easing } = theme

export const FeaturedHeading = styled(Heading)`
  position: sticky;
  z-index: 0;
  top: 80px;
  margin-bottom: 60px;
`

export const CardStack = styled(Article)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  perspective: 100em;
  /* margin-top: 100px; */

  & > section {
    top: 160px;
    /* bottom: -400px; */
  }
`

// export const StyledContainer = styled(Article)`
//   --projBenz: ${easing};
//   display: grid;
//   grid-template-columns: 100%;
//   grid-template-rows: repeat(auto-fill, 1fr);
//   align-items: start;
//   grid-row-gap: 40px;

//   @media print {
//     height: 8.5in;

//     @page {
//       size: 5.5in 8.5in portrait !important;
//       page-break-after: always !important;
//       page-break-before: always !important;
//       height: 8.5in;
//     }

//     page-break-after: always !important;
//     page-break-before: always !important;
//     size: A4 portrait !important;
//   }
// `
