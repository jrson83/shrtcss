import { cx } from 'classix'
import type { SHRTComponentProps } from '../../../types'

export interface InputProps extends SHRTComponentProps<'input'> {
  className?: string
}

export default function Input({
  className = 'form__field',
  ...rest
}: InputProps) {
  return <input className={cx(className)} {...rest} />
}
