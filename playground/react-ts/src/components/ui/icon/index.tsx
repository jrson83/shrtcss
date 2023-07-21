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

const Icon: IconType = ({ className, color, icon, size = 32, title }) => {
  return (
    <svg
      aria-hidden='true'
      role='img'
      fill={
        color
          ? color.startsWith('#')
            ? color
            : `var(--${color})`
          : 'currentColor'
      }
      fillRule='evenodd'
      className={className}
      focusable='false'
      width={`${size}px`}
      height={`${size}px`}
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 512 512'
    >
      <title>{title}</title>
      <path d={icons[icon]}></path>
    </svg>
  )
}

export default Icon
