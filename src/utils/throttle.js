const throttle = (func, wait = 100) => {
  let timer
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        func(...args)
        timer = null
      }, wait)
    }
  }
}

export default throttle
