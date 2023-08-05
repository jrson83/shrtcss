import { Button } from '../'
import { Icon } from '../'
import { List, ListItem } from '../'
import { icons } from '../icon/icon.data'
import { useCloseOnClickOutside } from '@shrtcss/react-hooks'
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

  const ref = useCloseOnClickOutside(() => {
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
          items={
            [
              {
                id: '1',
                title: 'Games',
                icon: 'ps4',
              },
              {
                id: '2',
                title: 'Settings',
                icon: 'settings',
              },
            ] as Array<{
              id: string
              title: string
              icon: keyof typeof icons
            }>
          }
          itemRenderer={({ id, title, icon }) => (
            <ListItem key={`test-data-menu-${id}`} className='menu__item'>
              <a href='#1'>
                <Icon title={title} icon={icon} size={16} />
                <span>{title}</span>
              </a>
            </ListItem>
          )}
        ></List>
      )}
    </div>
  )
}

export default Dropdown
