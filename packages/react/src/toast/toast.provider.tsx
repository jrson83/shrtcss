import React, { useCallback, useMemo, useReducer } from 'react'
import { Toast } from './toast'
import { ToastContext, type ToastContextStore } from './toast.context'
import { toastReducer } from './toast.reducer'
import type { ToastType } from './toast.types'

export interface ToastProviderProps {
  children?: React.ReactNode
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
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
