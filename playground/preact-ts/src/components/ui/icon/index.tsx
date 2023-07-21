import { icons } from '#/constants'

interface IconProps extends JSX.HTMLAttributes<SVGAElement> {
  color?: string
  icon: keyof typeof icons
  size?: number
  title: string
}

type IconType = FunctionComponent<IconProps>

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
