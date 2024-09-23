import { useContext } from 'react'
import { ToastContext } from './toast.context.js'

export function useToasts() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error(`useToasts must be used within a ToastProvider`)
  }
  return context
}
