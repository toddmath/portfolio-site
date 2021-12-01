import { memberIsWindup, lastPlayedMember, isUnplayed } from './windup'

export function onCharsFromWindup(windup) {
  // eslint-disable-next-line no-unused-vars
  const [_, remaining, metadata] = windup
  const lastPlayed = lastPlayedMember(windup)
  const [firstRemaining] = remaining

  const onChars = []

  if (lastPlayed && memberIsWindup(lastPlayed)) {
    onChars.push(...onCharsFromWindup(lastPlayed))
  }

  if (firstRemaining && memberIsWindup(firstRemaining) && !isUnplayed(firstRemaining)) {
    onChars.push(...onCharsFromWindup(firstRemaining))
  }

  if (metadata.onChar) {
    onChars.push(metadata.onChar)
  }

  return onChars
}
