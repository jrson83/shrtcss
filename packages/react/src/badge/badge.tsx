import type { BadgeType } from './badge.types'
import { cx } from 'classix'

const Badge: BadgeType = ({
  children,
  className = 'badge ',
  color,
  size = 'xs',
}) => {
  return (
    <div
      className={cx(className, size && `btn-${size}`, color && `bg-${color}`)}
    >
      {children}
    </div>
  )
}

Badge.displayName = 'Badge'

export default Badge
