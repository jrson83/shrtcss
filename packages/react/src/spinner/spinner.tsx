import type { SHRTColor, SHRTSize } from '@shrtcss/core'
import { cx } from 'classix'
import type { SHRTComponentProps } from '../../types'

export interface SpinnerProps extends SHRTComponentProps<'span'> {
  /** Spinner color from theme */
  color?: SHRTColor

  /** Predefined spinner size */
  size?: SHRTSize

  /** An accessible label for the spinner */
  label?: string
}

export default function Spinner({
  className = 'spinner',
  color,
  size,
  label,
  ...rest
}: SpinnerProps) {
  return (
    <span
      className={cx(
        className,
        color && `spinner-${color}`,
        size && `scale-${size}`
      )}
      {...(label && { 'aria-label': label })}
      {...rest}
    ></span>
  )
}
