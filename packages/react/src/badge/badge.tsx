import type { BadgeType } from './badge.types'
import { cx } from 'classix'

const Badge: BadgeType = ({
  children,
  className = 'bdg',
  color,
  disabled,
  fullWidth,
  size,
  uppercase,
}) => {
  return (
    <div
      className={cx(
        className,
        size && `bdg-${size}`,
        color && `bg-${color}`,
        disabled && `bdg-disabled`,
        fullWidth && `bdg-fw`,
        uppercase && `uppercase`
      )}
    >
      {children}
    </div>
  )
}

Badge.displayName = 'Badge'

export default Badge
