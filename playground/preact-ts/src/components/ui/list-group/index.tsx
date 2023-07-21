import type { ListItemType, ListProps } from '#/types'
import { h } from 'preact'

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

const ListItem: ListItemType = ({ children }) => {
  return <li className='list-group__item'>{children}</li>
}

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

List.displayName = 'List'

export { List as default, ListItem }
