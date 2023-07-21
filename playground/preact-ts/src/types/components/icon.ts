import { icons } from '#/constants'

export interface IconProps extends JSX.HTMLAttributes<SVGAElement> {
  color?: string
  icon: keyof typeof icons
  size?: number
  title: string
}

export type IconType = FunctionComponent<IconProps>
