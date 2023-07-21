import { h } from 'preact'

/** include missing types from: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3c9701a7e54a1bd553cf66ebcaca5ac7f91d0f99/types/react/index.d.ts#L819C5-L823C74 */
type PropsWithoutRef<P> = P extends any
  ? 'ref' extends keyof P
    ? Omit<P, 'ref'>
    : P
  : P

/** include missing types from: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3c9701a7e54a1bd553cf66ebcaca5ac7f91d0f99/types/react/index.d.ts#L851 */
type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<
  ComponentProps<T>
>

/**
 * fix preact wrong types!!! (4 year open preact issue) https://github.com/preactjs/preact/issues/1930
 *
 * Line 43:
 * Type 'string' is not assignable to type 'PropsWithoutRef<ComponentProps<As>>[string]'.ts(2322)
 *
 * Line: 66
 * No overload matches this call.
 * The last overload gave the following error.
 * Argument of type 'ElementType' is not assignable to parameter of type 'ComponentType<any>'.
 * Type 'string' is not assignable to type 'ComponentType<any>'.ts(2769)
 */
declare module 'preact' {
  export function h<P extends {}, T extends HTMLElement>(
    type: string,
    props: P & Omit<JSX.HTMLAttributes<T>, keyof P>,
    ...children: ComponentChildren[]
  ): VNode<unknown>
}

type ListItemType = FunctionComponent

const ListItem: ListItemType = ({ children }) => {
  return <li className='list-group__item'>{children}</li>
}

export interface BaseListProps<Item, As extends ElementType> {
  as?: As
  items: Item[]
  itemRenderer: (item: Item) => VNode<unknown>
}

export type ListProps<Item, As extends ElementType> = BaseListProps<Item, As> &
  Omit<ComponentPropsWithoutRef<As>, keyof BaseListProps<Item, As>>

const List = <Item, As extends ElementType>({
  as,
  items = [],
  itemRenderer,
  ...props
}: ListProps<Item, As>) => {
  const ListComponent = as
    ? typeof as === 'string'
      ? as.toLowerCase()
      : as
    : 'ul'

  return h(
    ListComponent as string,
    { role: 'list', ...props },
    items.map(itemRenderer)
  )
}

export { List as default, ListItem }
