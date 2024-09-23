import type { SHRTComponentPropsWithoutRef } from '../types.js'

export interface BlockquoteProps
  extends SHRTComponentPropsWithoutRef<'blockquote'> {
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
