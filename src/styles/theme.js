import { createEnum } from '@utils'

const theme = createEnum({
  colors: {
    dark: '#000007',
    darkestNavy: '#01050b',
    darkNavy: '#020c1b',
    navy: 'rgb(34, 51, 77)',
    lightNavy: '#172a45',
    darkGrey: '#333f58',
    mediumGrey: '#2d3952',
    grey: '#4c5772',
    lightGrey: '#606a86',
    slate: '#8892b0',
    lightSlate: '#a8b2d1',
    lightestSlate: '#ccd6f6',
    offWhite: '#dce7ff',
    white: '#e6f1ff',
    pink: '#FF647F',
    yellow: '#FFC464',
    orange: '#FF9E64',
    green: '#64ffda',
    blue: '#71AFFF',
    darkBlue: '#1D7FFC',
    highlight: 'rgba(41, 61, 90, 0.99)',
    transGreen: 'rgba(100, 255, 218, 0.07)',
    transNavy: 'rgba(10, 25, 47, 0.7)',
    shadowNavy: 'rgba(2, 12, 27, 0.7)',
  },

  mode: {
    light: {
      background: 'rgba(247, 248, 255, 1)',
      cardBG: 'hsl(73, 49.7%, 98%)',
      semiBG: 'rgba(96, 96, 89, 0.5)',
      semiCardBG: 'rgba(43, 61, 80, 0.75)',
      text: 'rgba(96, 96, 89, 1)',
      header: 'rgba(96, 102, 140, 1)',
      particles: {
        polygon: 'rgb(43, 61, 80)',
        stroke: 'rgb(43, 61, 80)',
        linkedLine: 'rgb(76, 87, 114)',
      },
    },
    dark: {
      background: 'rgba(43, 61, 80, 1)',
      cardBG: 'hsl(211, 14.9%, 18.3%)',
      semiBG: 'rgba(255, 251, 237, 0.2)',
      semiCardBG: 'rgba(43, 61, 80, 0.75)',
      text: 'rgba(169, 189, 204, 1)',
      header: 'rgba(131, 146, 158, 1)',
      particles: {
        polygon: 'rgba(247, 248, 255, 0.5)',
        stroke: 'rgba(247, 248, 255, 0.2)',
      },
      headerPrimary: '#fff',
      headerSecondary: '#b9bbbe',
      textNormal: '#dcddde',
      textMuted: '#72767d',
      textLink: '#00b0f4',
      navDefault: '#8e9297',
      interactive: {
        noraml: '#b9bbbe',
        hover: '#dcddde',
        active: '#fff',
        muted: '#4f545c',
      },
      bg: {
        primary: '#36393f',
        secondary: '#2f3136',
        alt: '#292b2f',
        tertiary: '#202225',
        accent: '#4f545c',
        floating: '#18191c',
        mobilePrimary: '#36393f',
        mobileSecondary: '#2f3136',
        modifierHover: 'rgba(79,84,92,0.16)',
        modifierActive: 'rgba(79,84,92,0.24)',
        modifierSelected: 'rgba(79,84,92,0.32)',
        modifierAccent: 'hsla(0,0%,100%,0.06)',
        mentioned: 'rgba(250,166,26,0.05)',
        mentionedHover: 'rgba(250,166,26,0.08)',
        messageHover: 'rgba(4,4,5,0.07)',
      },
    },
  },

  flat: {
    dark: {
      graphite: 'hsl(211, 14.9%, 18.3%)',
      background: 'rgba(247, 248, 255, 1)',
      semiBackground: 'rgba(247, 248, 255, 0.7)',
      headline: 'rgba(96, 102, 140, 1)',
      paragraph: 'rgba(96, 96, 89, 1)',
      strong: 'rgba(56, 56, 52, 1)',
      shadow: 'rgba(96, 96, 89, 0.8)',
      headerShadow: 'rgba(96, 96, 89, 0.5)',
      headerBorder: 'rgba(194, 199, 204, 1)',
      link: 'rgba(74, 131, 255, 1)',
      transLink: 'rgba(74, 131, 255, 0.5)',
      iconLink: 'rgba(74, 131, 255, 0.85)',
      progressBg: 'rgba(74, 131, 255, 0.5)',
      imgBackground: 'rgba(255, 251, 237, 0.2)',
      cardBackground: 'rgba(43, 61, 80, 1)',
      semiCardBackground: 'rgba(43, 61, 80, 0.75)',
      cardHeadline: 'rgba(247, 248, 255, 1)',
      cardParagraph: 'rgba(169, 189, 204, 1)',
      cardTagBackground: 'rgba(74, 131, 255, 1)',
      button: 'rgba(74, 131, 255, 1)',
      buttonText: 'rgba(247, 248, 255, 1)',
      stroke: '#010101',
      main: '#fffffe',
      highlight: 'rgba(74, 131, 255, 1)',
      secondary: 'rgba(169, 189, 204, 1)',
      tertiary: 'rgba(74, 131, 255, 1)',
      formInput: 'rgba(169, 189, 204, 1)',
      label: '#2b2c34',
      formButton: 'rgba(74, 131, 255, 1)',
      formButtonText: '#fffffe',
      grey: 'rgba(76, 87, 114, 1)',
      teal: 'rgba(0, 242, 254, 1)',
    },
    light: {
      background: 'rgba(247, 248, 255, 1)',
      headline: '#2b2c34',
      paragragh: '#2b2c34',
      button: '#6246ea',
      buttonText: '#fffffe',
      stroke: '#2b2c34',
      main: '#fffffe',
      highlight: '#6246ea',
      secondary: '#d1d1e9',
      tertiary: '#e45858',
    },
  },

  /** Theme helper that takes an alpha value  and creates a rgba main color with it. */
  link: (alpha = '1') => `rgba(74, 131, 255, ${alpha})`,

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono:
      'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
    Montserrat:
      'Montserrat, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  lineHeights: {
    grid: '19.8px',
    body: '20.8px',
    subtitle: '22.88px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  loadEase: 'cubic-bezier(.65,.28,.46,.85)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '0.2em',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,
  grad: `linear-gradient(to right, rgba(74, 131, 255, 1) 0%, rgba(74, 131, 255, 1) 5%, #00f2fe)`,
  gradTL: `linear-gradient(to left, rgba(74, 131, 255, 1) 0%, rgba(74, 131, 255, 1) 5%, #00f2fe)`,
  gradTrans: `linear-gradient(to right, rgba(74, 131, 255, 1) 4%, transparent 85%, transparent 95%, #00f2fe 96%)`,
  gradAlt: `linear-gradient(to right, transparent 4%, rgba(74, 131, 255, 1))`,

  grads: {
    rad: `radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)`,
    rads: `radial-gradient(circle 248px at center, rgba(74, 131, 255, 1) 0%, #30c7ec 47%, rgba(74, 131, 255, 1) 100%)`,
  },

  mainGradient: (
    dir = 'to bottom',
    colors = ['#B721FF', '#2AF598', '#fec051', '#FEE140', '#FA709A']
  ) => `linear-gradient(${dir}, ${colors.join()})`,

  gradients: {
    blueTeal: `background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);`,
    blueGreen: `background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);`,
    lightBlue: `background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);`,
    purpleBlue: `background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);`,
    grey: `background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;`,
    silver: `background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);`,
    brightBlue: `background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);`,
    blueGrey: `background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);`,
    black: `background-image: linear-gradient(to right, #434343 0%, black 100%);`,
    darkGrey: `background-image: linear-gradient(to right, #868f96 0%, #596164 100%);`,
  },

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
  hamBefore2: `top 0.1s cubic-bezier(.55,.06,.68,.19), opacity 0.1s cubic-bezier(.55,.06,.68,.19)`,
  hamBeforeActive2: `top 0.1s cubic-bezier(.22,.61,.36,1), opacity 0.1s cubic-bezier(.22,.61,.36,1) 0.12s`,
  hamAfter2: `bottom 0.1s cubic-bezier(.55,.06,.68,.19) 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19)`,
  hamAfterActive2: `bottom 0.1s cubic-bezier(.22,.61,.36,1) 0.25s, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
  easeInCirc: `cubic-bezier(.64,.15,.55,.52)`,
  easeOutCirc: `cubic-bezier(.22,.25,.34,.84)`,
})

export default theme
