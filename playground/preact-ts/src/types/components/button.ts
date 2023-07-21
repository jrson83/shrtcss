import type { ComponentPropsWithoutRef } from '#/types'

export interface ButtonProps {
  scale?: 'base' | 'lg' | 'sm'
  uppercase?: boolean
  onClick?: (data: unknown) => void
}

export type ButtonType = FunctionComponent<
  Omit<ComponentPropsWithoutRef<'button'>, 'onClick'> & ButtonProps
>
