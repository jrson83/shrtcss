import { useEffect, useRef, useState } from 'react'
import Alert from '../alert/alert.js'
import { useToasts } from './toast.hook.js'
import type { ToastType } from './toast.types.js'

export interface ToastAlertProps extends ToastType {
  /** Auto dismiss after `dismissDelay` - Defaults to `true` */
  autoDismiss?: boolean

  /** Number of milliseconds to wait when closing - Defaults to `3150` */
  dismissDelay?: number
}

export interface ToastProps {
  /** ToastProvider position on screen */
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

    // Return a no-op function if the condition is not met
    return () => {}
  }, [willDismiss, autoDismiss, dismissDelay])

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

export default function Toast({ position = 'bottom-center' }: ToastProps) {
  const pos = position.split('-')
  const { toasts } = useToasts()
  return (
    <section
      className={`toast toast-${pos[0]} toast-${pos[1]}`}
      aria-label="Toast Container"
    >
      {toasts.map((toast) => (
        <ToastAlert key={toast.id} {...toast} />
      ))}
    </section>
  )
}
