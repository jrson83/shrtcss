import { cx } from 'classix'
import type { SHRTComponentProps } from '../../types.js'

export interface LabelProps extends SHRTComponentProps<'label'> {
  error?: string
}

export default function Label({
  children,
  className = 'form__label',
  error,
  htmlFor,
}: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={cx(className)}>
      {error ? error : children}
    </label>
  )
}
