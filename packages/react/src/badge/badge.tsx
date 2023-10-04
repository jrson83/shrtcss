import type { SHRTColor, SHRTSize, SHRTVariant } from '@shrtcss/core'
import { cx } from 'classix'
import { Children, type ReactElement, isValidElement } from 'react'
import type { SHRTComponentProps } from '../../types'
import Icon, { type IconProps } from '../icon'

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
  variant = 'default',
  size,
  disabled,
  fullWidth,
  uppercase,
  ...rest
}: BadgeProps) {
  const IconChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((child) => child.type === Icon) as ReactElement<IconProps>[]

  const isIcon =
    Array.isArray(IconChildren) &&
    IconChildren.length > 0 &&
    Children.toArray(children).length < 2

  return (
    <div
      className={cx(
        className,
        isIcon && 'bdg-icon',
        variant !== 'default' && variant,
        color && variant !== 'default' && `${variant}-${color}`,
        size && `scale-${size}`,
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
