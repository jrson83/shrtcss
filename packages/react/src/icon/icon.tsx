import type { SHRTComponentPropsWithoutRef } from '../types.js'
import { icons } from './icon.data.js'

export type IconData = (typeof icons)[number]

export interface IconProps
  extends Omit<SHRTComponentPropsWithoutRef<'svg'>, 'title'> {
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
  ...rest
}: IconProps) {
  return (
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
      {...rest}
    >
      {title && <title>{title}</title>}
      <use href={`/assets/ion-spritemap.svg#${iconId}`} />
    </svg>
  )
}
