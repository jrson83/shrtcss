import { cx } from 'classix'
import type { ComponentPropsWithoutRef } from 'react'

export interface DividerProps extends ComponentPropsWithoutRef<'hr'> {
  /** Divider label */
  label?: string

  /** Divider orientation */
  orientation?: 'vertical' | 'horizontal'
}

export default function Divider({
  label,
  orientation = 'horizontal',
  ...rest
}: DividerProps) {
  if (label) {
    return (
      <div className="divider" {...rest}>
        {label}
      </div>
    )
  }
  return (
    <hr className={cx(orientation === 'vertical' && 'vertical')} {...rest} />
  )
}
