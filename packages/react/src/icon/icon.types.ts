import { icons } from './icon.data'

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  color?: string
  icon: keyof typeof icons
  size?: number
  title: string
}

export type IconType = React.FC<IconProps>
