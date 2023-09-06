import Button from '../button'
import Divider from '../divider'
import Icon from '../icon'
import List, { ListItem } from '../list'
import { useOnClickOutside } from '@shrtcss/react-hooks'
import { cx } from 'classix'
import { useRef, useState } from 'react'

export interface DropdownProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Dropdown label */
  label?: string

  /** Available icons  */
  icon?: React.ReactNode

  /** Dropdown position **/
  position?: 'bottom-right' | 'top-left' | 'top-right'
}

export default function Dropdown({
  label,
  icon,
  position,
  ...rest
}: DropdownProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const ref = useOnClickOutside(() => {
    if (isOpen) {
      toggleDropdown()
    }
  })

  return (
    <div className='dropdown' {...rest}>
      <Button
        className={cx(
          'btn btn-dropdown',
          typeof icon !== 'undefined' && 'btn-icon'
        )}
        ref={buttonRef}
        onClick={toggleDropdown}
        aria-haspopup={true}
      >
        {icon ? icon : label}
      </Button>
      {isOpen && (
        <List
          className={cx('menu', position && `menu-${position}`)}
          role='list'
          ref={ref}
          aria-expanded={true}
        >
          {/* <ListItem className="menu__item menu__item-header">
            Test Header
          </ListItem> */}
          <ListItem className='menu__item'>
            {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href='#' onClick={toggleDropdown}>
              <Icon title='Games' icon={'ps4'} size={16} />
              <span>Games</span>
            </a>
          </ListItem>
          <Divider />
          <ListItem className='menu__item'>
            {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href='#' onClick={toggleDropdown}>
              <Icon title='Settings' icon={'settings'} size={16} />
              <span>Settings</span>
            </a>
          </ListItem>
        </List>
      )}
    </div>
  )
}
