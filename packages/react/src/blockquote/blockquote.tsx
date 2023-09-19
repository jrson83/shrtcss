import type { ComponentPropsWithoutRef } from 'react'

export interface BlockquoteProps
  extends ComponentPropsWithoutRef<'blockquote'> {
  /** Blockquote footer cite */
  cite?: string
}

export default function Blockquote({
  children,
  cite,
  ...rest
}: BlockquoteProps) {
  return (
    <blockquote role="blockquote" {...rest}>
      <p>{children}</p>
      {cite && <footer>{cite}</footer>}
    </blockquote>
  )
}
