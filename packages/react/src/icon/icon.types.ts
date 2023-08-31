import { icons } from './icon.data'

export type IconData = keyof typeof icons

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  color?: string
  icon: IconData
  size?: number
  title: string
}

export type IconType = React.FC<IconProps>
