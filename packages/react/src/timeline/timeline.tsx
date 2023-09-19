import { cx } from 'classix'
import type { ComponentPropsWithoutRef } from 'react'
import Icon, { type IconData } from '../icon'

export interface TimelineItemProps
  extends Omit<ComponentPropsWithoutRef<'li'>, 'id'> {
  id: number
  completed?: boolean
  date: string
  label: string
  color?: string
  icon?: IconData
}

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

const lines = [
  {
    id: 1,
    completed: false,
    date: '17:00 PM',
    label: 'Test',
    type: 'success',
  },
  {
    id: 2,
    completed: true,
    date: '13:00 PM',
    label: 'Test',
    type: 'success',
  },
  {
    id: 3,
    completed: true,
    date: '12:00 PM',
    label: 'Test',
    type: 'success',
  },
  {
    id: 4,
    completed: true,
    date: '11:00 PM',
    label: 'Test',
    type: 'success',
  },
]

export default function Timeline() {
  return (
    <ol className="timeline">
      {lines.map((item) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </ol>
  )
}
