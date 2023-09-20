import type { SHRTColor } from '@shrtcss/core'
import { cx } from 'classix'
import {
  Children,
  type ComponentPropsWithoutRef,
  type ReactElement,
  isValidElement,
  useState,
} from 'react'

export interface TabProps extends ComponentPropsWithoutRef<'div'> {
  /** Tab display title */
  title: string
}

export interface TabsProps extends ComponentPropsWithoutRef<'div'> {
  /** Tabs color from theme */
  color?: SHRTColor | 'accent'

  /** Labels the tabs root element */
  ariaLabel?: string
}

export function Tab({ children, ...rest }: TabProps) {
  return (
    <div
      className="tab__panel"
      id={`panel-${1}`}
      role="tabpanel"
      aria-labelledby={`tab-${2}`}
      {...rest}
    >
      {children}
    </div>
  )
}

export default function Tabs({ ariaLabel, children, ...rest }: TabsProps) {
  const [currentIdx, setCurrentIdx] = useState(0)

  const btnOnClick = (idx: number) => {
    if (currentIdx !== idx) setCurrentIdx(idx)
  }

  const TabChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((child) => child.type === Tab) as ReactElement<TabProps>[]

  return (
    <>
      <div role="tablist" aria-label={ariaLabel} className="tabs" {...rest}>
        {TabChildren?.map((child, idx) => (
          <button
            key={idx}
            type="button"
            className={cx(
              'tab',
              idx === currentIdx && 'is-active'
            )} /* {`tab ${idx === currentIdx ? 'is-active' : ''}`} */
            role="tab"
            aria-selected={idx === currentIdx}
            aria-controls={`panel-${idx}`}
            id={`tab-${idx}`}
            onClick={() => btnOnClick(idx)}
          >
            <span>{child.props.title}</span>
          </button>
        ))}
      </div>
      {TabChildren[currentIdx]}
    </>
  )
}
