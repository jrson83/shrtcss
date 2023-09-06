import { type ComponentPropsWithRef, forwardRef } from 'react'

export type ButtonProps = Omit<ComponentPropsWithRef<'button'>, 'onClick'> & {
  /** Button color from theme */
  color?: string

  /** Set text-transform to uppercase */
  onClick?: (data: unknown) => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = 'btn', color, type = 'button', ...rest }, ref) => {
    return (
      <button type={type} ref={ref} {...rest}>
        {children}
      </button>
    )
  }
)

export default Button
