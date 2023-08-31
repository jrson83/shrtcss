import Alert from './alert'
import { StoryComponent, StoryMeta } from '@storylite/storylite'

export default {
  title: 'Components',
} satisfies StoryMeta

const AlertScreen: StoryComponent = () => {
  return (
    <div className='story-wrapper wrap'>
      <h1>Alert</h1>
      <h2>Basic</h2>
      <p>Display an alert.</p>
      <div className='example-wrapper column'>
        <Alert showCloseBtn>This is an info alert message.</Alert>
        <Alert color='success'>This is a success alert message.</Alert>
        <Alert color='warning'>This is a warning alert message.</Alert>
        <Alert color='danger'>This is an error alert message.</Alert>
      </div>
      <h2>Title</h2>
      <p>Display an alert.</p>
      <div className='example-wrapper column'>
        <Alert title='Info'>This is an info alert message.</Alert>
        <Alert title='Success' color='success'>
          This is a success alert message.
        </Alert>
        <Alert title='Warning' color='warning'>
          This is a warning alert message.
        </Alert>
        <Alert title='Error' color='danger'>
          This is an error alert message.
        </Alert>
      </div>
      <h2>Icon</h2>
      <p>Display an alert.</p>
      <div className='example-wrapper column'>
        <Alert title='Info' hasIcon={false}>
          This is an info alert message.
        </Alert>
        <Alert title='Success' color='success' hasIcon={false}>
          This is a success alert message.
        </Alert>
        <Alert title='Warning' color='warning' hasIcon={false}>
          This is a warning alert message.
        </Alert>
        <Alert title='Error' color='danger' hasIcon={false}>
          This is an error alert message.
        </Alert>
      </div>
    </div>
  )
}

AlertScreen.storyTitle = 'Alert'

export { AlertScreen }
