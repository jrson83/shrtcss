export interface DividerProps extends React.ComponentPropsWithoutRef<'hr'> {
  label?: string
}

export type DividerType = React.FC<DividerProps>
