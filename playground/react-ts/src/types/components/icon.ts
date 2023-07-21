import { icons } from '#/constants'

export interface IconProps {
  color?: string
  icon: keyof typeof icons
  size?: number
  title: string
}

export type IconType = React.FC<
  React.ComponentPropsWithoutRef<'svg'> & IconProps
>
