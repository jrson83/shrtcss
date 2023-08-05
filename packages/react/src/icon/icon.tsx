import { icons } from './icon.data'
import type { IconType } from './icon.types'

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

Icon.displayName = 'Icon'

export default Icon
