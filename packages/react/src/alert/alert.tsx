import Button from '../button'
import Icon, { type IconData } from '../icon'
import { AlertType } from './alert.types'
import { cx } from 'classix'

const AlertIcon: React.FC<{ color: IconData }> = ({ color }) => {
  return (
    <Icon
      icon={color as IconData}
      title='Status'
      size={26}
      className={`alert__icon alert__icon-${color}`}
    />
  )
}

const AlertCloseButton: React.FC<{ handleDismiss: () => void }> = ({
  handleDismiss,
}) => {
  return (
    <Button
      aria-label='Close'
      className='toast__btn-dismiss'
      type='button'
      onClick={handleDismiss}
    >
      <Icon icon={'close'} title='Close' />
    </Button>
  )
}

const Alert: AlertType = ({
  children,
  className = 'alert',
  color = 'info',
  hasIcon = true,
  title,
  showCloseBtn = false,
}) => {
  const handleDismiss = () => {
    console.log('dismiss')
  }

  return (
    <output role='status' className={cx(className, color && `alert-${color}`)}>
      {hasIcon && <AlertIcon color={color} />}
      <div className='alert__content'>
        <span className='alert__title'>{title}</span>
        <div className='alert__message'>{children}</div>
      </div>
      {showCloseBtn && <AlertCloseButton handleDismiss={handleDismiss} />}
    </output>
  )
}

export default Alert
