import { createContext } from 'react'
import type { ToastType } from './toast.types.js'

export interface ToastContextStore {
  add: (data: Omit<ToastType, 'id'>) => void
  remove: (data: Pick<ToastType, 'id'>) => void
  toasts: ToastType[]
}

export const ToastContext = createContext({} as ToastContextStore)
