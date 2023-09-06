import { icons } from './icon.data'
import type { ComponentPropsWithoutRef } from 'react'

export type IconData = keyof typeof icons

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  /** Available icons  */
  icon?: IconData

  /** Color-var from theme or any color  */
  color?: string

  /** Predefined icon size */
  size?: number

  /** SVGElement title content */
  title?: string
}

export default function Icon({
  className,
  color,
  icon,
  size = 32,
  title,
  ...props
}: IconProps) {
  if (!icon) return null

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
      {...props}
    >
      <title>{title}</title>
      <path d={icons[icon]}></path>
    </svg>
  )
}
