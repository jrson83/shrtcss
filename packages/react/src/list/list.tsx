import type {
  ListItemType,
  ListType,
  PolymorphicRef,
  TextProps,
} from './list.types'
import { cx } from 'classix'
import { forwardRef } from 'react'

const ListItem: ListItemType = ({ children, className, role, ...props }) => {
  return (
    <li
      role={role}
      className={cx(className ? className : 'list-group__item')}
      {...props}
    >
      {children}
    </li>
  )
}

const List: ListType = forwardRef(
  <Item, C extends React.ElementType = 'ul'>(
    {
      as,
      children,
      className,
      items,
      itemRenderer,
      ...props
    }: TextProps<Item, C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'ul'

    if (Array.isArray(items) && items.length > 0 && children) {
      throw new Error('Error in List component')
    }

    return (
      <Component
        role='list'
        className={cx(className ? className : 'list-group')}
        ref={ref}
        {...props}
      >
        {items && itemRenderer ? items.map(itemRenderer) : children}
      </Component>
    )
  }
)

ListItem.displayName = 'ListItem'

export { List as default, ListItem }
