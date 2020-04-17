/**
 * Helper function to debounce calling specified function.
 * @param {Function} func Function to debounce.
 * @param {number} wait Amount of time to wait.
 * @param {boolean} immediate Should function run immediately.
 * @see {@link https://davidwalsh.name/javascript-debounce-function}
 */
function debounce(func, wait, immediate) {
  let timeout

  return function executedFunction(...args) {
    const context = this

    // eslint-disable-next-line func-names
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}

export default debounce
