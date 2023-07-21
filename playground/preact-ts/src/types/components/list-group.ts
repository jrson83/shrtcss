import type { ComponentPropsWithoutRef } from '#/types'

export type ListItemType = FunctionComponent

export interface BaseListProps<Item, As extends ElementType> {
  as?: As
  items: Item[]
  itemRenderer: (item: Item) => VNode<unknown>
}

export type ListProps<Item, As extends ElementType> = BaseListProps<Item, As> &
  Omit<ComponentPropsWithoutRef<As>, keyof BaseListProps<Item, As>>
