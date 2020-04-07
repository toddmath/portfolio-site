import ScrollReveal from 'scrollreveal'

const noWindow = typeof window === 'undefined'
const sr = noWindow ? null : ScrollReveal()

export default sr

// export default typeof window === 'undefined' ? null : ScrollReveal()
