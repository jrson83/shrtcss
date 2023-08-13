import type { LabelType } from './label.types'
import { cx } from 'classix'

const Label: LabelType = ({ children, className, error, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cx(className ? className : 'form__label')}
    >
      {error ? error : children}
    </label>
  )
}

Label.displayName = 'Label'

export default Label
