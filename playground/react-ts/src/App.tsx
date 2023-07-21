import { Divider, Heading, List, ListItem } from '#/components/ui'
import { testMapData } from '#/constants'

type AppType = React.FC

const App: AppType = () => {
  return (
    <div>
      <Heading level={'h1'}>
        Heading <small>h1</small>
      </Heading>
      <Heading level={'h2'}>
        Heading <small>h2</small>
      </Heading>
      <Heading level={'h3'}>
        Heading <small>h3</small>
      </Heading>
      <Heading level={'h4'}>
        Heading <small>h4</small>
      </Heading>
      <Heading level={'h5'}>
        Heading <small>h5</small>
      </Heading>
      <Heading level={'h6'}>
        Heading <small>h6</small>
      </Heading>
      <Divider />
      <List
        as={'ol'}
        className={'list-group'}
        aria-label={'test-data-list'}
        items={testMapData}
        itemRenderer={({ id, title, createdAt }) => (
          <ListItem key={`test-data-list-${id}`}>
            <button type='button' className='list-group__btn'>
              <span className='list-group__title'>{title}</span>
              <small className='list-group__desc'>{createdAt}</small>
            </button>
          </ListItem>
        )}
      />
    </div>
  )
}

export default App
