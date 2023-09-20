import type { SHRTColor } from '@shrtcss/core'
import { cx } from 'classix'
import type { ComponentPropsWithoutRef } from 'react'
import Icon, { type IconData } from '../icon'

export type TimelineItemProps = Omit<TimeItem, 'id'> &
  Omit<ComponentPropsWithoutRef<'li'>, 'id'>

export function TimelineItem({
  completed = true,
  date,
  label,
  icon = 'checkmark',
  color = 'success',
}: TimelineItemProps) {
  return (
    <li className="timeline__item">
      {completed ? (
        <Icon
          title="test"
          icon={icon}
          className={cx(
            'timeline__icon timeline__icon-completed',
            color && `bg-color-${color}`
          )}
        />
      ) : (
        <span className="timeline__icon"></span>
      )}
      <div className="timeline__item-meta">
        <time className="timeline__date">{date}</time>
        <span className="timeline__label">{label}</span>
      </div>
    </li>
  )
}

export interface TimeItem {
  id?: number
  completed?: boolean
  date?: string
  label?: string
  color?: SHRTColor
  icon?: IconData
}

export interface TimelineProps {
  /** The time array of items */
  items?: TimeItem[]

  /** Labels the timeline root element */
  ariaLabel?: string
}

export default function Timeline({
  ariaLabel = 'timeline',
  items,
  ...props
}: TimelineProps) {
  return (
    <ol className="timeline" aria-label={ariaLabel} {...props}>
      {items?.map((item) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </ol>
  )
}
