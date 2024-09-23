import { useAnimate } from '@shrtcss/react-hooks'
import { useEffect, useRef, useState } from 'react'
import Button from '../button/button.js'
import type { SHRTComponentProps } from '../types.js'

export interface DrawerProps extends SHRTComponentProps<'aside'> {
  headerTitle?: string
  isOpen?: boolean
  closeDrawer?: () => void
}

export default function Drawer({
  headerTitle,
  isOpen = false,
  closeDrawer,
  children,
}: DrawerProps) {
  const drawerRef = useRef<HTMLElement>(null)
  const [animate, setAnimate] = useState<boolean>(isOpen)

  useAnimate({
    animate,
    elementRef: drawerRef,
    animationOptions: {
      easing: 'ease-in-out',
      duration: 150,
      fill: 'forwards',
    },
    animations: {
      start: [
        {
          visibility: 'visible',
          transform: 'translateX(0%)',
        },
      ],
      end: [
        {
          transform: 'translateX(100%)',
          visibility: 'hidden',
        },
      ],
    },
  })

  useEffect(() => {
    if (isOpen) {
      setAnimate(true)
    } else {
      setAnimate(false)
    }
  }, [isOpen])

  return (
    <aside className="drawer" ref={drawerRef}>
      <div className="drawer__content">
        <header className="drawer__header">
          <h3 id="drawer_title" className="drawer__title">
            {headerTitle}
          </h3>
          <Button
            leftIcon={'ios-close'}
            variant={'transparent'}
            aria-label="Close Drawer"
            onClick={closeDrawer}
          />
        </header>
        <main className="drawer__main">{children}</main>
        <footer className="drawer__footer">
          <Button>Test</Button>
        </footer>
      </div>
    </aside>
  )
}
