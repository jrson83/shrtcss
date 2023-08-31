import type { IconData } from '../icon'

export interface TimelineItemProps {
  id: number
  date: string
  label: string
  color?: string
  icon?: IconData
  completed?: boolean
}

export type TimelineItemType = React.FC<TimelineItemProps>
