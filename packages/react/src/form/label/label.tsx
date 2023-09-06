import { cx } from 'classix'

export interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  error?: string
}

export default function Label({
  children,
  className,
  error,
  htmlFor,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cx(className ? className : 'form__label')}
    >
      {error ? error : children}
    </label>
  )
}
