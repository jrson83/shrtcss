import type { SHRTColor, SHRTVariant } from '@shrtcss/core'
import { cx } from 'classix'
import Button from '../button/button.js'
import Icon, { type IconData } from '../icon/icon.js'
import type { SHRTComponentPropsWithoutRef } from '../types.js'

export interface AlertProps
  extends Omit<SHRTComponentPropsWithoutRef<'output'>, 'id'> {
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
      className={cx(
        isToast ? 'toast' : className ? className : 'toast',
        color && `${alertOrToast}-${color}`
      )}
      {...rest}
    >
      {hasIcon && (
        <Icon
          iconId={
            `ios-${
              color === 'info'
                ? 'information-circle'
                : color === 'success'
                  ? 'checkmark-circle'
                  : color === 'danger'
                    ? 'close-circle'
                    : 'warning'
            }` as IconData
          }
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
          <Icon iconId={'ios-close'} title="Close" />
        </Button>
      )}
    </output>
  )
}
