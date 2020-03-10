import React, { createContext, useReducer } from 'react'

export const ToastContext = createContext(null)

function toastReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { id, content } = action.payload
      return [...state, { id, content }]
    }
    case 'remove': {
      return state.filter(t => t.id !== action.payload.id)
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export function ToastProvider() {
  const [state, dispatch] = useReducer(toastReducer, [])

  return <ToastContext.Provider value={{ state, dispatch }} />
}

export default ToastContext
