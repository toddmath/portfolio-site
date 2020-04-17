import { useCallback } from 'react'

import useIsClient from './useIsClient'

const useNotification = (title, options) => {
  const isClient = useIsClient()

  const fireNotify = useCallback(() => {
    if (!isClient || !('Notification' in window)) {
      return
    }

    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          Notification(title, options)
        }
      })
    } else {
      Notification(title, options)
    }
  }, [])

  if (!isClient || !('Notification' in window)) {
    return
  }

  return fireNotify
}

export default useNotification
