import Button from '../button'
import Divider from '../divider'
import Icon from '../icon'
import List, { ListItem } from '../list'
import Link from '../router/link'
import { DropdownType } from './dropdown.types'
import { useOnClickOutside } from '@shrtcss/react-hooks'
import { cx } from 'classix'
import { useRef, useState } from 'react'

const Dropdown: DropdownType = ({ icon, label, position }) => {
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
            <Link href='/' onClick={toggleDropdown}>
              <Icon title='Games' icon={'ps4'} size={16} />
              <span>Games</span>
            </Link>
          </ListItem>
          <Divider />
          <ListItem className='menu__item'>
            <Link href='/settings' onClick={toggleDropdown}>
              <Icon title='Settings' icon={'settings'} size={16} />
              <span>Settings</span>
            </Link>
          </ListItem>
        </List>
      )}
    </div>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown
