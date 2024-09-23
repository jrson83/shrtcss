import { cx } from 'classix'
import type { SHRTComponentProps } from '../../types.js'
import Label from '../label/label.js'

export interface FormGroupProps extends SHRTComponentProps<'div'> {
  label?: string
  ifta?: boolean
  helper?: string
  htmlFor?: string
}

export default function FormGroup({
  children,
  className,
  helper,
  htmlFor,
  label,
  ifta = true,
}: FormGroupProps) {
  return (
    <div className={cx('form__group', className)}>
      {label && (
        <Label htmlFor={htmlFor} className={cx(ifta && 'form__label-ifta')}>
          {label}
        </Label>
      )}
      {children}
      {helper && <span className="form__helper">{helper}</span>}
    </div>
  )
}
