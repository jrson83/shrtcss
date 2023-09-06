import type { ToastAction, ToastState, ToastType } from './toast.types'

function nextToastId(toasts: ToastType[]): number {
  const maxId = toasts.reduce((maxId, toast) => Math.max(toast.id, maxId), -1)
  return maxId + 1
}

export function toastReducer(
  state: ToastState,
  { payload, type }: ToastAction
) {
  switch (type) {
    case 'ADD':
      return [
        ...state,
        {
          id: nextToastId(state),
          color: payload.color,
          title: payload.title,
          children: payload.children,
        },
      ]
    case 'REMOVE':
      return state.filter((toast) => toast.id !== payload.id)
    default:
      throw new Error(`Unknown action type: ${type}`)
  }
}
