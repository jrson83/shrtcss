import type { SHRTColor, SHRTSize, SHRTVariant } from '@shrtcss/core'
import { cx } from 'classix'
import { type ComponentPropsWithRef, forwardRef } from 'react'

export type ButtonProps = Omit<ComponentPropsWithRef<'button'>, 'onClick'> & {
  /** Button color from theme */
  color?: SHRTColor

  /** Controls appearance */
  variant?: SHRTVariant

  /** Predefined button size */
  size?: SHRTSize

  /** Disabled state */
  disabled?: boolean

  /** Sets button width to 100% of parent element*/
  fullWidth?: boolean

  /** Set text-transform to uppercase */
  uppercase?: boolean

  /** Set text-transform to uppercase */
  onClick?: (data: unknown) => void
}

export default forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = 'btn',
      color,
      size,
      fullWidth,
      uppercase,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={cx(
          className,
          size && `btn-${size}`,
          color && `bg-${color}`,
          fullWidth && `btn-fw`,
          uppercase && `uppercase`
        )}
        type={type}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

/* export default function Button({
  children,
  className = 'btn',
  color,
  size,
  fullWidth,
  uppercase,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cx(
        className,
        size && `btn-${size}`,
        color && `bg-${color}`,
        fullWidth && `btn-fw`,
        uppercase && `uppercase`
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
 */
