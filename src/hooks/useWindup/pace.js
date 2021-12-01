import { memberIsWindup, isFinished } from './windup'

const paceMap = {
  '—': 200,
  '…': 200,
  '.': 150,
  ',': 150,
  '-': 0,
  ' ': 0,
  '\n': 0,
}

export function defaultGetPace(lastChar, nextChar) {
  const specialChar = ['?', '!']

  if (nextChar && specialChar.includes(lastChar) && !specialChar.includes(nextChar)) {
    return 150
  }

  if (lastChar in paceMap) {
    return paceMap[lastChar]
  }

  return 20
}

export function paceFromWindup(windup) {
  if (isFinished(windup)) return undefined
  // eslint-disable-next-line no-unused-vars
  const [_first, remaining, metadata] = windup
  const [firstRemaining] = remaining
  if (firstRemaining && memberIsWindup(firstRemaining)) {
    return paceFromWindup(firstRemaining)
  }

  return metadata.pace
}
