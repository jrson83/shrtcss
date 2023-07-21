/** include missing types from: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3c9701a7e54a1bd553cf66ebcaca5ac7f91d0f99/types/react/index.d.ts#L819C5-L823C74 */
export type PropsWithoutRef<P> = P extends any
  ? 'ref' extends keyof P
    ? Omit<P, 'ref'>
    : P
  : P

/** include missing types from: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3c9701a7e54a1bd553cf66ebcaca5ac7f91d0f99/types/react/index.d.ts#L851 */
export type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<
  ComponentProps<T>
>

export type ListItemType = FunctionComponent

export interface BaseListProps<Item, As extends ElementType> {
  as?: As
  items: Item[]
  itemRenderer: (item: Item) => VNode<unknown>
}

export type ListProps<Item, As extends ElementType> = BaseListProps<Item, As> &
  Omit<ComponentPropsWithoutRef<As>, keyof BaseListProps<Item, As>>
