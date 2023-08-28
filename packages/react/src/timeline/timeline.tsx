import Icon from '../icon'
import type { TimelineItemType } from './timeline.types'

export const TimelineItem: TimelineItemType = ({
  completed = true,
  date,
  label,
  icon = 'checkmark',
  color = 'success',
}) => {
  return (
    <li className='timeline__item'>
      {completed ? (
        <Icon
          title='test'
          icon={icon}
          className={`timeline__icon timeline__icon-completed ${
            color && `bg-color-${color}`
          }`}
        />
      ) : (
        <span className='timeline__icon'></span>
      )}
      <div className='timeline__item-meta'>
        <time className='timeline__date'>{date}</time>
        <span className='timeline__label'>{label}</span>
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

const Timeline: React.FC = () => {
  return (
    <ol className='timeline' role='list'>
      {lines.map((item) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </ol>
  )
}

export default Timeline
