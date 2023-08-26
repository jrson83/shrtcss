import Button from '../button'
import List, { ListItem } from './list'
import { StoryComponent, StoryMeta } from '@storylite/storylite'

interface TestMapData {
  id: number
  title: string
  createdAt: string
}

const testMapData: TestMapData[] = [
  {
    id: 1,
    title: 'Title #1',
    createdAt: '12 minutes ago',
  },
  {
    id: 2,
    title: 'Title #2',
    createdAt: '52 minutes ago',
  },
  {
    id: 3,
    title: 'Title #3',
    createdAt: '4 days ago',
  },
]

export default {
  title: 'Components',
} satisfies StoryMeta

const ListScreen: StoryComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingBlock: '1rem',
      }}
    >
      <h1>List</h1>
      <p>
        Displays all kinds of HTML lists: <code>&lt;ul|ol|dl&gt;</code>.
      </p>
      <div className='example-wrapper column'>
        <List
          className={'list-group'}
          aria-label={'test-data-list'}
          items={testMapData}
          itemRenderer={({ id, title, createdAt }) => (
            <ListItem key={`test-data-list-${id}`}>
              <Button className='list-group__btn'>
                <span className='list-group__title'>{title}</span>
                <small className='list-group__desc'>{createdAt}</small>
              </Button>
            </ListItem>
          )}
        />
      </div>
    </div>
  )
}

ListScreen.storyTitle = 'List'

export { ListScreen }
