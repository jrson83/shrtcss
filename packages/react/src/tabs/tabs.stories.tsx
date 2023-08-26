import Tabs, { Tab } from './tabs'
import { StoryComponent, StoryMeta } from '@storylite/storylite'

export default {
  title: 'Components',
} satisfies StoryMeta

const TabsScreen: StoryComponent = () => {
  return (
    <div className='story-wrapper wrap'>
      <h1>Tabs</h1>
      <p>Create a tabbed navigation.</p>
      <div className='example-wrapper'>
        <Tabs ariaLabel='Example Tabs' color={'accent'}>
          <Tab title='Tab #1'>
            <p>Example Text #1</p>
          </Tab>
          <Tab title='Tab #2'>
            <p>Example Text #2</p>
          </Tab>
          <Tab title='Tab #3'>
            <p>Example Text #3</p>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

TabsScreen.storyTitle = 'Tabs'

export { TabsScreen }
