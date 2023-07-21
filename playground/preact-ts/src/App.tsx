import {
  Button,
  Dialog,
  Divider,
  Heading,
  Icon,
  List,
  ListItem,
} from '#/components/ui'
import { testMapData } from '#/constants'
import { useState } from 'preact/hooks'

type AppType = FunctionComponent

const App: AppType = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const showDialog = () => setIsDialogVisible(true)
  const closeDialog = () => setIsDialogVisible(false)

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
            <Button className='list-group__btn'>
              <span className='list-group__title'>{title}</span>
              <small className='list-group__desc'>{createdAt}</small>
            </Button>
          </ListItem>
        )}
      />
      <Divider />
      <Button className='btn-float' onClick={showDialog}>
        <Icon title='Add Item' icon={'question'} />
      </Button>
      <Dialog
        name='test'
        type='info'
        title='Test Heading'
        submitButton={{
          label: 'Submit',
          action: () => console.log('action'),
        }}
        cancelButton={{ label: 'Cancel' }}
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
      >
        <p>Please confirm to placeholder.</p>
      </Dialog>
    </div>
  )
}

export default App
