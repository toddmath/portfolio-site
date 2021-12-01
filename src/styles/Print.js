import { css } from 'styled-components'

const printStyles = css`
  @media print and (color) {
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }
  @media print {
    body {
      font: 12pt Georgia, 'Times New Roman', Times, serif;
      line-height: 1.3;
      color: #000 !important;
      background: #fff !important;
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;

      h1 {
        color: #000 !important;
        background: none !important;
        font-size: 24pt;
      }

      h2 {
        font-size: 14pt;
      }

      main {
        article {
          color: #000 !important;
          background: #fff !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;

          a,
          button {
            font-weight: bolder !important;
            text-decoration: none !important;

            &[href^='http'] {
              font-variation-settings: 'wght' 725;
              &:after {
                font-variation-settings: 'wght' 800;
                font-size: 90% !important;
                content: ' <' attr(href) '> ';
                display: block;
                word-wrap: break-word;
              }
            }

            &[href^='#'] {
              font-weight: bold !important;
              font-variation-settings: 'wght' 725;
              &:after {
                content: '';
              }
            }
          }
        }

        aside {
          display: none !important;
        }

        header {
          display: none !important;

          & > nav {
            display: none !important;
          }
        }
      }
    }

    @page {
      margin: 0.5cm !important;
      size: A4 portrait;

      @bottom-center {
        content: counter(page) !important;
      }
    }

    h2,
    h3,
    p {
      orphans: 3;
      widows: 3;
    }

    main {
      article:not(:first-of-type) ~ h3 {
        page-break-before: always !important;
      }
      article {
        page-break-after: always !important;
        ${'' /* height: 100vh; */}
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      page-break-after: avoid !important;
    }

    img {
      max-width: 100% !important;
    }

    table,
    figure,
    ul,
    img,
    a,
    button,
    div {
      page-break-inside: avoid !important;
    }
  }
`

export default printStyles
