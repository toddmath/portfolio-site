import theme from 'styled-theming'

export const styledTheme = ([light, dark]) => theme('mode', { light, dark })

export default styledTheme
