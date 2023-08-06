import type { ButtonType } from './button.types'
import { cx } from 'classix'
import { forwardRef } from 'react'

const Button: ButtonType = forwardRef(
  (
    {
      children,
      className = 'btn',
      color,
      fullWidth,
      size,
      uppercase,
      type = 'button',
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
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
