import { cx } from 'classix'
import type { SHRTComponentPropsWithoutRef } from '../types.js'

export type DividerType<T extends string | undefined = undefined> =
  T extends string
    ? SHRTComponentPropsWithoutRef<'div'>
    : SHRTComponentPropsWithoutRef<'hr'>

export type DividerProps<T extends string | undefined = undefined> = {
  /** Divider label */
  label?: T

  /** Divider orientation */
  orientation?: 'vertical' | 'horizontal'
} & DividerType<T>

export default function Divider<T extends string | undefined = undefined>({
  label,
  orientation = 'horizontal',
  ...rest
}: DividerProps<T>) {
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
