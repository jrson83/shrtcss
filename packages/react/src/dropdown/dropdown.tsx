import { Button, Divider } from '../'
import { Icon } from '../'
import { List, ListItem } from '../'
import { useOnClickOutside } from '@shrtcss/react-hooks'
import { cx } from 'classix'
import { useRef, useState } from 'react'

export interface DropdownProps extends React.ComponentPropsWithoutRef<'div'> {
  label?: string
  icon?: React.ReactNode
  position?: 'bottom-right' | 'top-left' | 'top-right'
}

const Dropdown: React.FC<DropdownProps> = ({ icon, label, position }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const ref = useOnClickOutside(() => {
    if (isOpen) {
      toggleDropdown()
    }
  })

  return (
    <div className='dropdown'>
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
          <ListItem className='menu__item'>
            <a href='#1'>
              <Icon title='Games' icon={'ps4'} size={16} />
              <span>Games</span>
            </a>
          </ListItem>
          <Divider />
          <ListItem className='menu__item'>
            <a href='#1'>
              <Icon title='Settings' icon={'settings'} size={16} />
              <span>Settings</span>
            </a>
          </ListItem>
        </List>
      )}
    </div>
  )
}

export default Dropdown
