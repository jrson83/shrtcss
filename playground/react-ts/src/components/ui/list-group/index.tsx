interface BaseListProps<Item, As extends React.ElementType> {
  as?: As
  items: Item[]
  itemRenderer: (item: Item) => React.ReactNode
}

type ListProps<Item, As extends React.ElementType> = BaseListProps<Item, As> &
  Omit<React.ComponentPropsWithoutRef<As>, keyof BaseListProps<Item, As>>

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

type ListItemType = React.FC<React.PropsWithChildren>

const ListItem: ListItemType = ({ children }) => {
  return <li className='list-group__item'>{children}</li>
}

export { List as default, ListItem }
