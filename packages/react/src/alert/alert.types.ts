export type AlertVariants = 'light' | 'filled' | 'outlined'

export interface AlertProps
  extends Omit<React.ComponentPropsWithoutRef<'output'>, 'id'> {
  color?: 'info' | 'success' | 'warning' | 'danger'
  hasIcon?: boolean
  title?: string
  variant?: AlertVariants
  autoDismiss?: boolean
  dismissAfter?: number
  showCloseBtn?: boolean
}

export type AlertType = React.FC<AlertProps>
