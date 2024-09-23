import type { AlertProps } from '../alert/alert.js'

export interface ToastType extends AlertProps {
  id: number
}

export interface ActionAdd {
  type: 'ADD'
  payload: Omit<ToastType, 'id'>
}

export interface ActionRemove {
  type: 'REMOVE'
  payload: Pick<ToastType, 'id'>
}

export type ToastAction = ActionAdd | ActionRemove
export type ToastState = ToastType[]
