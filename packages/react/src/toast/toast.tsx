import Alert from '../alert'
import { useToasts } from './toast.context'
import type { ToastType } from './toast.types'
import { useEffect, useRef, useState } from 'react'

export interface ToastAlertProps extends ToastType {
  autoDismiss?: boolean
  dismissDelay?: number
}

export interface ToastProps {
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
}

export function ToastAlert({
  children,
  id,
  color,
  title,
  closeBtn = false,
  autoDismiss = true,
  dismissDelay = 3150,
  ...rest
}: ToastAlertProps) {
  const { remove } = useToasts()
  const [willDismiss, setWillDismiss] = useState(false)

  const timerID = useRef<NodeJS.Timeout>()

  const handleDismiss = () => {
    if (!willDismiss) setWillDismiss(true)
  }

  const onAnimationEnd = () => {
    if (willDismiss) remove({ id })
  }

  useEffect(() => {
    if (!willDismiss && autoDismiss) {
      timerID.current = setTimeout(() => {
        handleDismiss()
      }, dismissDelay)

      return () => {
        clearTimeout(timerID.current)
      }
    }
  }, [])

  return (
    <Alert
      color={color}
      title={title}
      className={`toast__item toast__item-${color} ${
        willDismiss ? 'close' : 'open'
      }`}
      onAnimationEnd={onAnimationEnd}
      {...rest}
    >
      {children}
    </Alert>
  )
}

export function Toast({ position = 'bottom-center' }: ToastProps) {
  const pos = position.split('-')
  const { toasts } = useToasts()
  return (
    <section
      className={`toast toast-${pos[0]} toast-${pos[1]}`}
      aria-label='Toast Container'
    >
      {toasts.map((toast) => (
        <ToastAlert key={toast.id} {...toast} />
      ))}
    </section>
  )
}
