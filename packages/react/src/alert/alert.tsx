import Button from '../button'
import Icon, { type IconData } from '../icon'
import type { SHRTColor, SHRTVariant } from '@shrtcss/core'
import { cx } from 'classix'
import type { ComponentPropsWithoutRef } from 'react'

export interface AlertProps
  extends Omit<ComponentPropsWithoutRef<'output'>, 'id'> {
  /** Alert color from theme */
  color?: SHRTColor

  /** Controls appearance */
  variant?: SHRTVariant

  /** Alert title */
  title?: string

  /** Disable icon before content */
  hasIcon?: boolean

  /** Adds close button  */
  closeBtn?: boolean
}

export default function Alert({
  children,
  className = 'alert',
  color = 'info',
  title,
  hasIcon = true,
  closeBtn = false,
  ...rest
}: AlertProps) {
  const handleDismiss = () => {
    console.log('dismiss')
  }

  return (
    <output
      role='status'
      className={cx(className, color && `alert-${color}`)}
      {...rest}
    >
      {hasIcon && (
        <Icon
          icon={color as IconData}
          title='Status'
          size={26}
          className={`alert__icon alert__icon-${color}`}
        />
      )}
      <div className='alert__content'>
        {title && <span className='alert__title'>{title}</span>}
        <div className='alert__message'>{children}</div>
      </div>
      {closeBtn && (
        <Button
          aria-label='Close'
          className='alert__btn-dismiss'
          type='button'
          onClick={handleDismiss}
        >
          <Icon icon={'close'} title='Close' />
        </Button>
      )}
    </output>
  )
}
