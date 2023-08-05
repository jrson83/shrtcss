import type {
  ListItemType,
  ListType,
  PolymorphicRef,
  TextProps,
} from './list.types'
import { cx } from 'classix'
import { forwardRef } from 'react'

const ListItem: ListItemType = ({ children, className }) => {
  return (
    <li className={cx(className ? className : 'list-group__item')}>
      {children}
    </li>
  )
}

const List: ListType = forwardRef(
  <Item, C extends React.ElementType = 'ul'>(
    { as, className, items, itemRenderer, ...props }: TextProps<Item, C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'ul'

    return (
      <Component
        role='list'
        className={cx(className ? className : 'list-group')}
        ref={ref}
        {...props}
      >
        {items.map(itemRenderer)}
      </Component>
    )
  }
)

ListItem.displayName = 'ListItem'

export { List as default, ListItem }
