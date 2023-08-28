import type { BlockquoteType } from './blockquote.types'

const Blockquote: BlockquoteType = ({ children, cite }) => {
  return (
    <blockquote>
      <p>{children}</p>
      {cite && <footer>{cite}</footer>}
    </blockquote>
  )
}

Blockquote.displayName = 'Blockquote'

export default Blockquote
