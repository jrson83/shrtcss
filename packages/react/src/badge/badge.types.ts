export interface BadgeProps extends React.ComponentPropsWithoutRef<'div'> {
  color?: 'info' | 'success' | 'warning' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export type BadgeType = React.FC<BadgeProps>
