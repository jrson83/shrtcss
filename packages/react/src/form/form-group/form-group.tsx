import Label from '../label'
import type { FormGroupType } from './form-group.types'
import { cx } from 'classix'

const FormGroup: FormGroupType = ({
  children,
  className,
  helper,
  htmlFor,
  label,
  ifta = true,
}) => {
  return (
    <div className={cx('form__group', className)}>
      {label && (
        <Label htmlFor={htmlFor} className={cx(ifta && 'form__label-ifta')}>
          {label}
        </Label>
      )}
      {children}
      {helper && <span className='form__helper'>{helper}</span>}
    </div>
  )
}

export default FormGroup
