// export default function createEnum(obj) {
//   return Object.freeze(obj)
// }

const isObject = obj => obj && typeof obj === 'object'
const getPropNames = obj => Object.getOwnPropertyNames(obj)
const getObjectPropObjects = obj => getPropNames(obj).filter(name => isObject(obj[name]))

export default function createEnum(obj) {
  if (!obj || typeof obj !== 'object') {
    throw Error(`createEnum must only be passed objects: ${obj}`)
  }

  // const propNames = getPropNames(obj)

  getObjectPropObjects(obj).forEach(prop => createEnum(obj[prop]))

  // getPropNames(obj).forEach(name => {
  //   const value = obj[name]
  //   if (isObject(value)) createEnum(value)
  // })

  return Object.freeze(obj)
}
