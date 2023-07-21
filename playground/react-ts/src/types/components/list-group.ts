export interface BaseListProps<Item, As extends React.ElementType> {
  as?: As
  items: Item[]
  itemRenderer: (item: Item) => React.ReactNode
}

export type ListProps<Item, As extends React.ElementType> = BaseListProps<
  Item,
  As
> &
  Omit<React.ComponentPropsWithoutRef<As>, keyof BaseListProps<Item, As>>

export type ListItemType = React.FC<React.PropsWithChildren>
