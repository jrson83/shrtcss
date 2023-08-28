import Timeline from './timeline'
import { StoryComponent, StoryMeta } from '@storylite/storylite'

export default {
  title: 'Components',
} satisfies StoryMeta

const TimelineScreen: StoryComponent = () => {
  return (
    <div className='story-wrapper wrap'>
      <h1>Timeline</h1>
      <p>Create a timeline.</p>
      <div className='example-wrapper'>
        <Timeline />
      </div>
    </div>
  )
}

TimelineScreen.storyTitle = 'Timeline'

export { TimelineScreen }
