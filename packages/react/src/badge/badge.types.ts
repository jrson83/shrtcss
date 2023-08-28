export interface BadgeProps extends React.ComponentPropsWithoutRef<'div'> {
  color?: 'info' | 'success' | 'warning' | 'danger'
  disabled?: boolean
  fullWidth?: boolean
  size?: 'sm' | 'lg'
  uppercase?: boolean
}

export type BadgeType = React.FC<BadgeProps>
