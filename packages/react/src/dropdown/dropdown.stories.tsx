import Dropdown from '../dropdown'
import Icon from '../icon'
import { StoryComponent, StoryMeta } from '@storylite/storylite'

export default {
  title: 'Components',
} satisfies StoryMeta

const DropdownScreen: StoryComponent = () => {
  return (
    <div className='story-wrapper'>
      <h1>Dropdown</h1>
      <p>
        Displays a <code>&lt;button&gt;</code> or a component that looks like a
        button.
      </p>
      <h2>Basic</h2>
      <div className='example-wrapper'>
        <Dropdown label='Dropdown' />
        <Dropdown
          position={'bottom-right'}
          icon={<Icon title='Settings' icon={'ellipsis'} size={26} />}
        />
      </div>
    </div>
  )
}

DropdownScreen.storyTitle = 'Dropdown'

export { DropdownScreen }
