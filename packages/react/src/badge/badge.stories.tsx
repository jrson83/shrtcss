import Badge from './badge'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components',
} satisfies StoryDefault

export const BadgeScreen: Story = () => {
  return (
    <div className='story-wrapper wrap'>
      <h1>Dialog</h1>
      <p>
        Displays a <code>&lt;dialog&gt;</code> or a component that looks like a
        dialog.
      </p>
      <div className='example-wrapper'>
        <Badge>Test</Badge>
        <Badge color={'info'}>Test</Badge>
        <Badge color={'success'}>Test</Badge>
        <Badge color={'warning'}>Test</Badge>
        <Badge color={'danger'}>Test</Badge>
      </div>
    </div>
  )
}

BadgeScreen.storyName = 'Badge'
