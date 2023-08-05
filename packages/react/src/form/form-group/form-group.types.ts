export interface FormGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  label?: string
  ifta?: boolean
  helper?: string
  htmlFor?: string
}

export type FormGroupType = React.FC<FormGroupProps>
