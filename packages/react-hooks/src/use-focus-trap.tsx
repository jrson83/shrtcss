// Based on https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
import {
  type FC,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
} from 'react'

interface ConditionalWrapperProps {
  wrap: boolean
  wrapper: (children: ReactNode) => ReactElement
}

export const ConditionalWrapper: FC<
  PropsWithChildren & ConditionalWrapperProps
> = ({ wrap, wrapper, children }) =>
  wrap ? wrapper(children) : <>{children}</>

function useFocusTrap() {
  const elRef = useRef<HTMLDivElement | null>(null)

  function handleFocus(e: KeyboardEvent) {
    const focusableEls = elRef.current?.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )

    if (!focusableEls || typeof focusableEls === 'undefined') return

    const firstFocusableEl = focusableEls[0] as HTMLElement
    const lastFocusableEl = focusableEls[focusableEls.length - 1] as HTMLElement

    const isTabPressed = e.key === 'Tab' || e.keyCode === 9

    if (!isTabPressed) {
      return
    }

    if (e.shiftKey) {
      /* shift + tab */ if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus()
        e.preventDefault()
      }
    } /* tab */ else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus()
        e.preventDefault()
      }
    }
  }

  useEffect(() => {
    elRef.current?.addEventListener('keydown', handleFocus)

    return () => {
      elRef.current?.removeEventListener('keydown', handleFocus)
    }
  }, [])

  return elRef
}

type FocusTrapType = FC<
  PropsWithChildren & {
    enabled?: boolean
  }
>

const FocusTrap: FocusTrapType = ({ children, enabled = true }) => {
  const elRef = useFocusTrap()

  return (
    <ConditionalWrapper
      wrap={enabled}
      wrapper={(children) => (
        <div className={'trap'} ref={elRef}>
          {children}
        </div>
      )}
    >
      {children}
    </ConditionalWrapper>
  )
}

export { FocusTrap }
