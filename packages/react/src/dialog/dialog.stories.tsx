import Button from '../button'
import Dialog from './dialog'
import { StoryComponent, StoryMeta } from '@storylite/storylite'
import { useState } from 'react'

export default {
  title: 'Components',
} satisfies StoryMeta

const DialogScreen: StoryComponent = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const showDialog = () => setIsDialogVisible(true)
  const closeDialog = () => setIsDialogVisible(false)

  return (
    <div className='story-wrapper wrap'>
      <h1>Dialog</h1>
      <p>
        Displays a <code>&lt;dialog&gt;</code> or a component that looks like a
        dialog.
      </p>
      <div className='example-wrapper'>
        <Button className='btn' onClick={showDialog}>
          Open Dialog
        </Button>
      </div>
      <Dialog
        name='test'
        type='info'
        title='Hello, Im a Heading'
        submitButton={{
          label: 'Submit',
          action: () => console.log('action'),
        }}
        cancelButton={{ label: 'Cancel' }}
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
      >
        <p>Please confirm placeholder.</p>
      </Dialog>
    </div>
  )
}

DialogScreen.storyTitle = 'Dialog'

export { DialogScreen }
