export interface DividerProps extends React.ComponentPropsWithoutRef<'hr'> {
  label?: string
  direction?: 'vertical' | 'horizontal'
}

export type DividerType = React.FC<DividerProps>
