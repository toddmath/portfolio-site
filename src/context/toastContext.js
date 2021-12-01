import React, { createContext, useReducer, useContext } from 'react'

export const ToastContext = createContext(null)

function toastReducer(state, { type, payload }) {
  switch (type) {
    case 'add': {
      const { id, content } = payload
      return [...state, { id, content }]
    }
    case 'remove': {
      return state.filter(({ id }) => id !== payload.id)
    }
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be called inside of ToastProvider')
  }
  return context
}

export function ToastProvider() {
  const [state, dispatch] = useReducer(toastReducer, [])

  return <ToastContext.Provider value={{ state, dispatch }} />
}

export default ToastContext
