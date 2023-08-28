import { icons } from '../icon/icon.data'

export interface TimelineItemProps {
  id: number
  date: string
  label: string
  color?: string
  icon?: keyof typeof icons
  completed?: boolean
}

export type TimelineItemType = React.FC<TimelineItemProps>
