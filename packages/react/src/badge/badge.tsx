import type { SHRTColor, SHRTSize, SHRTVariant } from '@shrtcss/core'
import { cx } from 'classix'
import Icon, { type IconData } from '../icon/icon.js'
import type { SHRTComponentProps } from '../types.js'

export interface BadgeProps extends SHRTComponentProps<'span'> {
  /** Badge color from theme */
  color?: SHRTColor

  /** Controls appearance */
  variant?: SHRTVariant

  /** Predefined badge size */
  size?: SHRTSize

  /** Add icon to left side */
  leftIcon?: IconData

  /** Add icon to right side */
  rightIcon?: IconData

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
  variant,
  size,
  leftIcon,
  rightIcon,
  disabled,
  fullWidth,
  uppercase,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cx(
        className,
        leftIcon && !children && 'bdg-icon',
        variant && variant,
        color && variant
          ? `${variant}-${color}`
          : color && !variant && `filled filled-${color}`,
        size && `scale-${size}`,
        disabled && `bdg-disabled`,
        fullWidth && `bdg-fw`,
        uppercase && `uppercase`
      )}
      {...rest}
    >
      {leftIcon && <Icon title="Test" iconId={leftIcon} size={20} />}
      {children}
      {rightIcon && <Icon title="Test" iconId={rightIcon} size={20} />}
    </span>
  )
}
