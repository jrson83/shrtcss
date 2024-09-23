import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react'

export type ListItemType = FC<HTMLAttributes<HTMLLIElement>>

export type AsProp<C extends ElementType> = {
  as?: C
}

export type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P)

export type PolymorphicComponentProp<
  C extends ElementType,
  Props = Record<string, never>,
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = Record<string, never>,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> }

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>['ref']

export type ListProps<
  Item,
  C extends ElementType,
> = PolymorphicComponentPropWithRef<
  C,
  {
    header?: string
    items?: Item[]
    itemRenderer?: (item: Item) => ReactNode
  }
>

export type ListType = <Item, C extends ElementType = 'ul'>(
  props: ListProps<Item, C>
) => ReactNode
