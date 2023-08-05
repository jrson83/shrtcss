import type { TabProps, TabType, TabsType } from './tabs.types'
import { cx } from 'classix'
import { Children, isValidElement, useState } from 'react'

const Tab: TabType = ({ children }) => {
  return <>{children}</>
}

const Tabs: TabsType = ({ ariaLabel, children }) => {
  const [currentIdx, setCurrentIdx] = useState(0)

  const btnOnClick = (idx: number) => {
    if (currentIdx !== idx) setCurrentIdx(idx)
  }

  const TabChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((child) => child.type === Tab) as React.ReactElement<TabProps>[]

  return (
    <>
      <div role='tablist' aria-label={ariaLabel} className='tabs'>
        {TabChildren?.map((child, idx) => (
          <button
            key={idx}
            type='button'
            className={cx(
              'tab',
              idx === currentIdx && 'is-active'
            )} /* {`tab ${idx === currentIdx ? 'is-active' : ''}`} */
            role='tab'
            aria-selected={idx === currentIdx}
            aria-controls={`panel-${idx}`}
            id={`tab-${idx}`}
            onClick={() => btnOnClick(idx)}
          >
            <span>{child.props.title}</span>
          </button>
        ))}
      </div>
      <div
        className='tab__panel'
        id={`panel-${currentIdx}`}
        role='tabpanel'
        aria-labelledby={`tab-${currentIdx}`}
      >
        {TabChildren[currentIdx]}
      </div>
    </>
  )
}

export { Tabs as default, Tab }
