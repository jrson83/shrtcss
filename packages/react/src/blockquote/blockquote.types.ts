export interface BlockquoteProps
  extends React.ComponentPropsWithoutRef<'blockquote'> {
  cite?: string
}

export type BlockquoteType = React.FC<BlockquoteProps>
