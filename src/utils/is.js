const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === undefined,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,
  equ(a, b) {
    if (typeof a !== typeof b) return false
    if (is.str(a) || is.num(a)) return a === b
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) {
      return true
    }

    Object.keys(a).forEach(k => {
      if (!(k in b)) return false
    })

    Object.keys(b).forEach(k => {
      if (a[k] !== b[k]) return false
    })

    return true

    // let i
    // for (i in a) if (!(i in b)) return false
    // for (i in b) if (a[i] !== b[i]) return false
    // return is.und(i) ? a === b : true
  },
}

export default is
