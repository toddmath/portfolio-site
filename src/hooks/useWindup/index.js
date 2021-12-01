import { useRef, useEffect, useCallback, useReducer, useMemo } from 'react'
import { defaultGetPace, paceFromWindup } from './pace'
import {
  isFinished,
  lastPlayedElement,
  next,
  fastForward,
  rewind,
  nextElement,
  windupFromString,
  renderStringWindup,
} from './windup'
import { onCharsFromWindup } from './onChar'

function initWindupState(windup) {
  return { windup, didFinishOnce: false }
}

function windupReducer(state, action) {
  switch (action.type) {
    case 'replace': {
      return initWindupState(action.windup)
    }
    case 'next': {
      const nextWindup = next(state.windup)
      return { ...state, windup: nextWindup }
    }
    case 'rewind': {
      const nextWindup = rewind(state.windup)
      return { windup: nextWindup, didFinishOnce: false }
    }
    case 'fast-forward': {
      const nextWindup = fastForward(state.windup)
      return { ...state, windup: nextWindup }
    }
    case 'finish': {
      return { ...state, didFinishOnce: true }
    }
    default: {
      return state
    }
  }
}

export function useWindup(windupInit, options) {
  const [{ windup, didFinishOnce }, dispatch] = useReducer(
    windupReducer,
    windupInit,
    initWindupState
  )

  const timeoutRef = useRef(null)
  const windupIsFinished = isFinished(windup)

  const cleanTimeout = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  const { onFinished, skipped } = options

  const skip = useCallback(() => {
    if (windupIsFinished) return
    // if (timeoutRef.current) {
    //   clearTimeout(timeoutRef.current)
    // }
    cleanTimeout()
    dispatch({
      type: 'fast-forward',
    })
  }, [windupIsFinished, dispatch, cleanTimeout])

  const rewind = useCallback(() => {
    // if (timeoutRef.current) {
    //   clearTimeout(timeoutRef.current)
    // }
    cleanTimeout()

    dispatch({ type: 'rewind' })
  }, [dispatch, cleanTimeout])

  // If windup arg changes, we should reset
  useEffect(() => {
    dispatch({ type: 'replace', windup: windupInit })
  }, [windupInit, dispatch])

  // If skipped is changes to true, we should skip
  // And if it's changed to false, we should restart
  useEffect(() => {
    // if (timeoutRef.current) {
    //   clearTimeout(timeoutRef.current)
    // }
    cleanTimeout()

    if (skipped) {
      dispatch({
        type: 'fast-forward',
      })
    }
    if (skipped === false) {
      dispatch({ type: 'rewind' })
    }
  }, [skipped, dispatch, cleanTimeout])

  // When the windup changes, onChar should fire
  useEffect(() => {
    const onChars = onCharsFromWindup(windup)
    const lastEl = lastPlayedElement(windup)

    if (onChars.length > 0 && lastEl) {
      onChars.forEach(onChar => onChar(lastEl))
    }
  }, [windup])

  // If windup finishes, the onFinished should fire
  useEffect(() => {
    // Put this in a new context so that the windup finishes visually before firing this
    if (didFinishOnce === false && windupIsFinished) {
      const timeout = setTimeout(() => {
        if (onFinished) onFinished()
        dispatch({ type: 'finish' })
      }, 0)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [didFinishOnce, windupIsFinished, onFinished])

  // the windup effect itself
  useEffect(() => {
    if (!windupIsFinished) {
      const getPace = paceFromWindup(windup) || defaultGetPace
      const lastEl = lastPlayedElement(windup)
      const nextEl = nextElement(windup)
      timeoutRef.current = setTimeout(
        () => {
          dispatch({ type: 'next' })
        },
        lastEl ? getPace(lastEl, nextEl) : 0
      )

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }
  }, [windup, windupIsFinished, dispatch])

  return {
    windup,
    skip,
    rewind,
    isFinished: windupIsFinished,
  }
}

const OPTIONS = {}

export default function useWindupString(text, options = OPTIONS) {
  const windupInit = useMemo(() => windupFromString(text, options), [text])

  const { windup, skip, rewind, isFinished } = useWindup(windupInit, options)

  return [renderStringWindup(windup), { skip, rewind, isFinished }]
}
