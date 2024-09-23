import { useOnClickOutside } from '@shrtcss/react-hooks'
import { cx } from 'classix'
import { type ReactNode, useRef, useState } from 'react'
import Button from '../button/button.js'
import Divider from '../divider/divider.js'
import Icon from '../icon/icon.js'
import List, { ListItem } from '../list/list.js'
import type { SHRTComponentPropsWithoutRef } from '../types.js'

export interface DropdownProps extends SHRTComponentPropsWithoutRef<'div'> {
  /** Dropdown label */
  label?: string

  /** Available icons  */
  icon?: ReactNode

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
    <div className="dropdown" {...rest}>
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
          role="list"
          ref={ref}
          aria-expanded={true}
        >
          {/* <ListItem className="menu__item menu__item-header">
            Test Header
          </ListItem> */}
          <ListItem className="menu__item">
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#" onClick={toggleDropdown}>
              <Icon title="Games" iconId={'playstation'} size={16} />
              <span>Games</span>
            </a>
          </ListItem>
          <Divider />
          <ListItem className="menu__item">
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#" onClick={toggleDropdown}>
              <Icon title="Settings" iconId={'ios-settings'} size={16} />
              <span>Settings</span>
            </a>
          </ListItem>
        </List>
      )}
    </div>
  )
}
