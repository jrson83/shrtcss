import type { ButtonType } from '#/types'

const Button: ButtonType = ({ children, type = 'button', ...props }) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
