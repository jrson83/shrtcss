import type { SHRTColor, SHRTVariant } from '@shrtcss/core'
import { cx } from 'classix'
import type { ComponentPropsWithoutRef } from 'react'
import Button from '../button'
import Icon, { type IconData } from '../icon'

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

  isToast?: boolean
}

export default function Alert({
  children,
  className = 'alert',
  color = 'info',
  title,
  hasIcon = true,
  closeBtn = false,
  isToast = false,
  ...rest
}: AlertProps) {
  const handleDismiss = () => {
    console.log('dismiss')
  }

  const alertOrToast = isToast ? 'toast' : 'alert'

  return (
    <output
      role="status"
      className={cx(
        isToast ? 'toast' : className ? className : 'toast',
        color && `${alertOrToast}-${color}`
      )}
      {...rest}
    >
      {hasIcon && (
        <Icon
          icon={color as IconData}
          title="Status"
          size={26}
          className={`${alertOrToast}__icon ${alertOrToast}__icon-${color}`}
        />
      )}
      <div className={`${alertOrToast}__content`}>
        {title && <span className={`${alertOrToast}__title`}>{title}</span>}
        <div className={`${alertOrToast}__message`}>{children}</div>
      </div>
      {closeBtn && (
        <Button
          aria-label="Close"
          className={`${alertOrToast}__btn-dismiss`}
          type="button"
          onClick={handleDismiss}
        >
          <Icon icon={'close'} title="Close" />
        </Button>
      )}
    </output>
  )
}
