import type { SHRTColor, SHRTSize, SHRTVariant } from '@shrtcss/core'
import { cx } from 'classix'
import type { SHRTComponentProps } from '../../types'

export interface BadgeProps extends SHRTComponentProps<'div'> {
  /** Badge color from theme */
  color?: SHRTColor

  /** Controls appearance */
  variant?: SHRTVariant

  /** Predefined badge size */
  size?: SHRTSize

  /** Disabled state */
  disabled?: boolean

  /** Sets badge width to 100% of parent element*/
  fullWidth?: boolean

  /** Set text-transform to uppercase */
  uppercase?: boolean
}

export default function Badge({
  children,
  className = 'bdg',
  color,
  size,
  disabled,
  fullWidth,
  uppercase,
  ...rest
}: BadgeProps) {
  return (
    <div
      className={cx(
        className,
        color && `bg-${color}`,
        size && `bdg-${size}`,
        disabled && `bdg-disabled`,
        fullWidth && `bdg-fw`,
        uppercase && `uppercase`
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
