import type { SHRTComponentProps } from '../../types'
import { icons } from './icon.data'

export type IconData = typeof icons[number]

export interface IconProps extends Omit<SHRTComponentProps<'svg'>, 'title'> {
  /** Available icons  */
  iconId?: IconData

  /** Color-var from theme or any color  */
  color?: string

  /** SVGElement title content */
  title?: string

  /** Predefined icon size */
  size?: number
}

export default function Icon({
  className,
  iconId,
  color,
  title,
  size = 32,
  ...props
}: IconProps) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      aria-hidden={true}
      role="img"
      focusable="false"
      width={size}
      height={size}
      className={className}
      fill={
        color
          ? color.startsWith('#')
            ? color
            : `var(--${color})`
          : 'currentColor'
      }
      {...props}
    >
      {title && <title>{title}</title>}
      <use href={`/assets/ion-spritemap.svg#${iconId}`} />
    </svg>
  )
}
