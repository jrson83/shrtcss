export interface LinkProps {
  activeClassName?: string
}

export type LinkType = React.FC<React.ComponentPropsWithoutRef<'a'> & LinkProps>
