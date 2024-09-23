import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
} from 'react'

export type SHRTComponentPropsWithRef<E extends ElementType> =
  ComponentPropsWithRef<E>
export type SHRTComponentPropsWithoutRef<E extends ElementType> =
  ComponentPropsWithoutRef<E>
