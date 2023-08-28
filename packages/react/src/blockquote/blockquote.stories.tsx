import Blockquote from './blockquote'
import { StoryComponent, StoryMeta } from '@storylite/storylite'

export default {
  title: 'Components',
} satisfies StoryMeta

const BlockquoteScreen: StoryComponent = () => {
  return (
    <div className='story-wrapper wrap'>
      <h1>Blockquote</h1>
      <p>
        Display a <code>&lt;blockquote&gt;</code>. Use <code>&lt;p&gt;</code> or{' '}
        <code>&lt;q&gt;</code> for inline quotations.
      </p>
      <div className='example-wrapper column'>
        <Blockquote cite='— John Johnson'>
          First, solve the problem. Then, write the code.
        </Blockquote>
      </div>
    </div>
  )
}

BlockquoteScreen.storyTitle = 'Blockquote'

export { BlockquoteScreen }
