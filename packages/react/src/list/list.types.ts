export type ListItemType = React.FC<React.HTMLAttributes<HTMLLIElement>>

export type AsProp<C extends React.ElementType> = {
  as?: C
}

export type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

// This is the first reusable type utility we built
export type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

// This is a new type utitlity with ref!
export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> }

// This is the type for the "ref" only
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
export type ListProps<
  Item,
  C extends React.ElementType
> = PolymorphicComponentPropWithRef<
  C,
  {
    header?: string
    items?: Item[]
    itemRenderer?: (item: Item) => React.ReactNode
  }
>

/**
 * This is the type used in the type annotation for the component
 */
export type ListType = <Item, C extends React.ElementType = 'ul'>(
  props: ListProps<Item, C>
) => React.ReactNode
