import Divider from './divider'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components',
} satisfies StoryDefault

export const DividerScreen: Story = () => {
  return (
    <div className='story-wrapper wrap'>
      <h1>Divider</h1>
      <h2>Horizontal</h2>
      <p>
        Display a simple but usefull horizontal divider{' '}
        <code>&#x3C;hr&#x3E;</code> with <small>100%</small> of parent width.
      </p>
      <div className='example-wrapper column'>
        <Divider />
      </div>
      <h2>Horizontal with Text</h2>
      <p>
        Display a divider with text (<code>&#x3C;div&#x3E;</code>).
      </p>
      <div className='example-wrapper column'>
        <Divider label={'Example Text'} />
      </div>
    </div>
  )
}

DividerScreen.storyName = 'Divider'
