import { cx } from 'classix'
import type { SHRTComponentPropsWithoutRef } from '../../types.js'

export interface InputProps extends SHRTComponentPropsWithoutRef<'input'> {
  className?: string
}

export default function Input({
  className = 'form__field',
  ...rest
}: InputProps) {
  return <input className={cx(className)} {...rest} />
}
