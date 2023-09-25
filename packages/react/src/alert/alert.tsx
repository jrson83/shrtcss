import type { SHRTColor, SHRTVariant } from '@shrtcss/core'
import { cx } from 'classix'
import type { SHRTComponentProps } from '../../types'
import Button from '../button'
import Icon, { type IconData } from '../icon'

export interface AlertProps extends Omit<SHRTComponentProps<'output'>, 'id'> {
  /** Alert color from theme - Defaults to `info` */
  color?: SHRTColor

  /** Controls appearance */
  variant?: SHRTVariant

  /** Alert title */
  title?: string

  /** Disables icon - Defaults to `true` */
  hasIcon?: boolean

  /** Adds close button - Defaults to `false` */
  closeBtn?: boolean

  /** Used by toast component - Defaults to `false` */
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
