import Badge from './badge'
import { StoryComponent, StoryMeta } from '@storylite/storylite'

export default {
  title: 'Components',
} satisfies StoryMeta

const BadgeScreen: StoryComponent = () => {
  return (
    <div className='story-wrapper wrap'>
      <h1>Badge</h1>
      <p>
        Displays a <code>&lt;badge&gt;</code>.
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

BadgeScreen.storyTitle = 'Badge'

export { BadgeScreen }
