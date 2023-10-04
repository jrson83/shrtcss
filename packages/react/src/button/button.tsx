import type { SHRTColor, SHRTSize, SHRTVariant } from '@shrtcss/core'
import { cx } from 'classix'
import { forwardRef } from 'react'
import { Children, type ReactElement, isValidElement } from 'react'
import type { SHRTComponentProps } from '../../types'
import Icon, { type IconProps } from '../icon'

export type ButtonProps = Omit<SHRTComponentProps<'button'>, 'onClick'> & {
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

  /** Button onClick event */
  onClick?: (data: unknown) => void
}

export default forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = 'btn',
      color,
      variant = 'default',
      size,
      fullWidth,
      uppercase,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const IconChildren = Children.toArray(children)
      .filter(isValidElement)
      .filter((child) => child.type === Icon) as ReactElement<IconProps>[]

    const isIcon =
      Array.isArray(IconChildren) &&
      IconChildren.length > 0 &&
      Children.toArray(children).length < 2

    return (
      <button
        className={cx(
          className,
          isIcon && 'btn-icon',
          variant !== 'default' && variant,
          color && variant !== 'default' && `${variant}-${color}`,
          size && `scale-${size}`,
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
} */
