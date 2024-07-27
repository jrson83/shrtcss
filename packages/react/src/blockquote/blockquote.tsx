import type { SHRTComponentProps } from '../../types'

export interface BlockquoteProps extends SHRTComponentProps<'blockquote'> {
  /** Blockquote footer cite */
  cite?: string
}

export default function Blockquote({
  children,
  cite,
  ...rest
}: BlockquoteProps) {
  return (
    <blockquote {...rest}>
      <p>{children}</p>
      {cite && <footer>{cite}</footer>}
    </blockquote>
  )
}
