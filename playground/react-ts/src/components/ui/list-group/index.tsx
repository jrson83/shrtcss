import type { ListItemType, ListProps } from '#/types'

const ListItem: ListItemType = ({ children }) => {
  return <li className='list-group__item'>{children}</li>
}

const List = <Items, As extends React.ElementType>({
  as,
  items = [],
  itemRenderer,
  className,
  ...props
}: ListProps<Items, As>) => {
  const ListComponent = as
    ? typeof as === 'string'
      ? as.toLowerCase()
      : as
    : 'ul'

  return (
    <ListComponent
      role='list'
      className={className ? className : 'list-group'}
      {...props}
    >
      {items.map(itemRenderer)}
    </ListComponent>
  )
}

List.displayName = 'List'

export { List as default, ListItem }
