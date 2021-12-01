export function memberIsWindup(member) {
  if (!Array.isArray(member)) {
    return false
  }

  if (member.length !== 3) {
    return false
  }

  if (!Array.isArray(member[0]) || !Array.isArray(member[1])) {
    return false
  }

  return true
}

// eslint-disable-next-line no-unused-vars
export function isFinished([_, remaining]) {
  return remaining.length === 0
}

export function lastPlayedElement(windup) {
  // eslint-disable-next-line no-use-before-define
  const lastPlayed = lastPlayedMember(windup)
  return memberIsWindup(lastPlayed) ? lastPlayedElement(lastPlayed) : lastPlayed
}

export function isUnplayed(windup) {
  const [played, remaining] = windup
  if (played.length > 0) return false

  return remaining.reduce((unplayed, member) => {
    if (memberIsWindup(member))
      if (memberIsWindup(windup) && unplayed) {
        return isUnplayed(member)
      }
    return unplayed
  }, true)
}

export function lastPlayedMember([played, remaining]) {
  const playedFromRemaining = remaining.reduce((playedEl, member) => {
    if (memberIsWindup(member)) {
      if (!isUnplayed(member)) {
        return lastPlayedElement(member)
      }
    }
    return playedEl
  }, undefined)

  if (playedFromRemaining) {
    return playedFromRemaining
  }

  const last = played[played.length - 1]
  return last
}

export function fastForward(windup) {
  // eslint-disable-next-line no-use-before-define
  const forwardedWindup = next(windup)
  if (isFinished(forwardedWindup)) {
    return forwardedWindup
  }
  return fastForward(forwardedWindup)
}

export function rewind(windup) {
  if (isUnplayed(windup)) return windup
  const [played, remaining, metadata] = windup

  const mapRewind = member => (memberIsWindup(member) ? rewind(member) : member)

  return [[], [...played.map(mapRewind), ...remaining.map(mapRewind)], metadata]
}

// eslint-disable-next-line no-unused-vars
export function nextElement([_played, remaining]) {
  const [nextVal] = remaining
  return memberIsWindup(nextVal) ? nextElement(nextVal) : nextVal
}

export function next(windup) {
  if (isFinished(windup)) return windup

  const [played, remaining, metadata] = windup
  const [firstRemaining, ...restRemaining] = remaining

  if (memberIsWindup(firstRemaining)) {
    const nextFirstRemaining = next(firstRemaining)

    if (isFinished(nextFirstRemaining)) {
      return [[...played, nextFirstRemaining], restRemaining, metadata]
    }

    return [played, [nextFirstRemaining, ...restRemaining], metadata]
  }

  return [[...played, firstRemaining], restRemaining, metadata]
}

export function windupFromString(str, metadata) {
  return [[], str.split(''), metadata]
}

export function isPlayedWindup(windup) {
  return windup.length === 2
}

export function isString(value) {
  return value && typeof value === 'string'
}

export function playedElements([played, remaining]) {
  const playedTransformed = played.map(member => {
    if (memberIsWindup(member)) {
      const [, , metadata] = member
      return [playedElements(member), metadata]
    }
    return member
  })

  const [firstRemaning] = remaining
  if (memberIsWindup(firstRemaning) && !isUnplayed(firstRemaning)) {
    const [, , metadata] = firstRemaning
    return [...playedTransformed, [playedElements(firstRemaning), metadata]]
  }

  return playedTransformed
}

export function renderStringWindup(windup) {
  const played = isPlayedWindup(windup) ? windup[0] : playedElements(windup)
  return played.reduce(
    (acc, playedEl) =>
      isString(playedEl) ? acc + playedEl : acc + renderStringWindup(playedEl),
    ''
  )
}
