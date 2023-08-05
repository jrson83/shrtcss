export interface ButtonProps {
  color?: 'info' | 'success' | 'warning' | 'danger'
  fullWidth?: boolean
  size?: 'sm' | 'lg'
  uppercase?: boolean
  onClick?: (data: unknown) => void
}

export type ButtonType = React.FC<
  Omit<React.ComponentPropsWithRef<'button'>, 'onClick'> & ButtonProps
>
