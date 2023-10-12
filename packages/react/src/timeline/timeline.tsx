import type { SHRTColor } from '@shrtcss/core'
import { cx } from 'classix'
import type { SHRTComponentProps } from '../../types'
import Icon, { type IconData } from '../icon'

export type TimelineItemProps = Omit<TimeItem, 'id'> &
  Omit<SHRTComponentProps<'li'>, 'id'>

export function TimelineItem({
  completed = true,
  date,
  label,
  icon = 'ios-checkmark',
  color = 'success',
}: TimelineItemProps) {
  return (
    <li className="timeline__item">
      <span
        className={cx(
          'timeline__circle',
          completed && 'timeline__circle-completed',
          color && `timeline__circle-completed-${color}`
        )}
      >
        {completed ? (
          <Icon
            size={icon !== 'ios-checkmark' ? 24 : 32}
            title="test"
            iconId={icon}
            className={cx(
              'timeline__icon timeline__icon-completed'
              /* color && `timeline__icon-completed-${color}` */
            )}
          />
        ) : (
          <span className="timeline__icon"></span>
        )}
      </span>
      <div
        className={cx(
          'timeline__item-meta',
          color && `timeline__item-meta-${color}`
        )}
      >
        {date && <time className="timeline__date">{date}</time>}
        <span className="timeline__label">{label}</span>
      </div>
    </li>
  )
}

export interface TimeItem {
  /** Item color from theme */
  color?: SHRTColor

  /** Index of element */
  id?: number

  /** The event status */
  completed?: boolean

  /** A date to display for the timeline */
  date?: string

  /** The activity in the timeline */
  label?: string

  /** Accepts any icon from `IconData` */
  icon?: IconData
}

export interface TimelineProps {
  /** The time array of items */
  items?: TimeItem[]

  /** Labels the timeline root element */
  ariaLabel?: string

  /** Reverse the items order */
  reverse?: boolean
}

export default function Timeline({
  ariaLabel = 'timeline',
  items = [],
  reverse = false,
  ...props
}: TimelineProps) {
  /** https://bobbyhadz.com/blog/javascript-map-array-in-reverse-order#reverse-an-array-and-use-map-in-reverse-order-in-react */
  if (reverse) items = [...items].reverse()

  return (
    <ol role="list" className="timeline" aria-label={ariaLabel} {...props}>
      {items?.map((item) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </ol>
  )
}
