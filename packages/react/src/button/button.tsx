import type { SHRTColor, SHRTSize, SHRTVariant } from '@shrtcss/core'
import { cx } from 'classix'
import { forwardRef } from 'react'
import Icon, { type IconData } from '../icon/icon.js'
import type { SHRTComponentPropsWithRef } from '../types.js'

export interface ButtonProps extends SHRTComponentPropsWithRef<'button'> {
  /** Button color from theme */
  color?: SHRTColor

  /** Controls appearance */
  variant?: SHRTVariant

  /** Predefined button size */
  size?: SHRTSize

  /** Add icon to left side */
  leftIcon?: IconData

  /** Add icon to right side */
  rightIcon?: IconData

  /** Disabled state */
  disabled?: boolean

  /** Sets button width to 100% of parent element*/
  fullWidth?: boolean

  /** Set text-transform to uppercase */
  uppercase?: boolean
}

export default forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = 'btn',
      color,
      variant,
      size,
      leftIcon,
      rightIcon,
      fullWidth,
      uppercase,
      type = 'button',
      onClick,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={cx(
          className,
          leftIcon && !children && 'btn-icon',
          variant && variant,
          color && variant
            ? `${variant}-${color}`
            : color && !variant && `filled filled-${color}`,
          size && `scale-${size}`,
          fullWidth && `btn-fw`,
          uppercase && `uppercase`
        )}
        type={type}
        ref={ref}
        onClick={onClick}
        {...rest}
      >
        {leftIcon && (
          <Icon
            title="Test"
            iconId={leftIcon}
            size={leftIcon && !children ? 26 : 20}
          />
        )}
        {children}
        {rightIcon && (
          <Icon
            title="Test"
            iconId={rightIcon}
            size={leftIcon && !children ? 26 : 20}
          />
        )}
      </button>
    )
  }
)
