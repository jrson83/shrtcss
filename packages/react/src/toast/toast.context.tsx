import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react'
import { Toast } from './toast'
import { toastReducer } from './toast.reducer'
import type { ToastType } from './toast.types'

interface ToastProviderProps {
  children?: React.ReactNode
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
}

interface ToastContextStore {
  add: (data: Omit<ToastType, 'id'>) => void
  remove: (data: Pick<ToastType, 'id'>) => void
  toasts: ToastType[]
}

const ToastContext = createContext({} as ToastContextStore)

export function useToasts() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error(`useToasts must be used within a ToastProvider`)
  }
  return context
}

export function ToastProvider({ children, position }: ToastProviderProps) {
  const [toasts, dispatch] = useReducer(toastReducer, [])

  const remove = useCallback((data: Pick<ToastType, 'id'>) => {
    dispatch({
      type: 'REMOVE',
      payload: {
        id: data.id,
      },
    })
  }, [])

  const add = useCallback(
    (data: Omit<ToastType, 'id'>) => {
      dispatch({
        type: 'ADD',
        payload: {
          color: data.color,
          title: data.title,
          children: data.children,
        },
      })
    },
    [remove]
  )

  const store: ToastContextStore = useMemo(
    () => ({
      add,
      remove,
      toasts,
    }),
    [add, remove, toasts]
  )

  return (
    <ToastContext.Provider value={store}>
      {children}
      <Toast position={position} />
    </ToastContext.Provider>
  )
}
