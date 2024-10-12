import { cx } from 'classix'
import type { SHRTComponentPropsWithoutRef } from '../types.js'

export interface CardProps extends SHRTComponentPropsWithoutRef<'div'> {}

export default function Card({ children }: CardProps) {
  return <div className={cx('card')}>{children}</div>
}

export function CardHeader({ children }: CardProps) {
  return <div className={cx('card__header')}>{children}</div>
}

export function CardBody({ children, className }: CardProps) {
  return <div className={cx('card__body', className)}>{children}</div>
}

export interface CardFooterProps extends SHRTComponentPropsWithoutRef<'div'> {
  pagination?: boolean
}

export function CardFooter({
  children,
  pagination = false,
  ...rest
}: CardFooterProps) {
  return (
    <div
      className={cx('card__footer', pagination && 'card__footer-pagination')}
      {...rest}
    >
      {children}
    </div>
  )
}
