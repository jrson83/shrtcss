export interface DropdownProps extends React.ComponentPropsWithoutRef<'div'> {
  label?: string
  icon?: React.ReactNode
  position?: 'bottom-right' | 'top-left' | 'top-right'
}

export type DropdownType = React.FC<DropdownProps>
