module.exports = {
  siteTitle: 'Todd Matheson | Front End Web Developer',
  siteShortName: 'Todd Matheson',
  siteDescription:
    'Todd Matheson is a web developer based in the bay area, CA who specializes in developing exceptional, high-quality websites and web apps.',
  siteKeywords:
    'Todd Matheson, Todd, Matheson, toddmath, web developer, front-end dev, web developer, javascript, portfolio',
  siteUrl: 'https://toddmath.com',
  startUrl: '/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Todd Matheson',
  location: 'San Mateo, CA',
  email: 'tmatheson11186@gmail.com',
  github: 'https://github.com/toddmath',
  twitterHandle: '@tM0Nk3y',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/toddmath',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/todd-matheson-bb5b90178',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/toddmath',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/toddmatheson11/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/tM0Nk3y',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',
  main: '#4a83ff',
  background: '#f7f8ff',
  srConfig: (delay = 200, distance = '20px', opacity = 0.22, duration = 500) => ({
    origin: 'bottom',
    distance,
    duration,
    delay,
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    },
    opacity,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    desktop: true,
    mobile: true,
    reset: true,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
