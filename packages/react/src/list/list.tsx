import { cx } from 'classix'
import { forwardRef } from 'react'
import type { ListItemType, ListType } from './list.types.js'

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
  (
    { as, children, className, header, items, itemRenderer, ...props }: any,
    ref?: any
  ) => {
    const Component = as || 'ul'

    if (Array.isArray(items) && items.length > 0 && children) {
      throw new Error('Error in List component')
    }

    return (
      <Component
        role="list"
        className={cx(className ? className : 'list-group')}
        ref={ref}
        {...props}
      >
        {header && items && items.length > 0 && (
          <ListItem className="list-group__header">{header}</ListItem>
        )}
        {items && itemRenderer ? items.map(itemRenderer) : children}
      </Component>
    )
  }
)

ListItem.displayName = 'ListItem'

export { List as default, ListItem }
