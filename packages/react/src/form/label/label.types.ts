export interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  error?: string
}

export type LabelType = React.FC<LabelProps>
