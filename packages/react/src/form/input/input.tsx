import { cx } from 'classix'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string
}

export default function Input({
  className = 'form__field',
  ...rest
}: InputProps) {
  return <input className={cx(className)} {...rest} />
}
