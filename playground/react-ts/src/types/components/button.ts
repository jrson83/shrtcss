export interface ButtonProps {
  scale?: 'base' | 'lg' | 'sm'
  uppercase?: boolean
  onClick?: (data: unknown) => void
}

export type ButtonType = React.FC<
  Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'> & ButtonProps
>
