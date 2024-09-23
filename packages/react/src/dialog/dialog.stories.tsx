import type { Story } from '@storylite/storylite'
import { useState } from 'react'
import Button from '../button/button.js'
import Docs from './dialog.docs.mdx'
import Dialog from './dialog.js'

type StoryType = Story<typeof Dialog>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Dialog',
  component: Dialog,
  args: {
    name: undefined,
    type: 'info',
    title: undefined,
    isDialogVisible: false,
    useFocusTrap: true,
    fullScreen: false,
    position: undefined,
    showCloseButton: false,
    showDialogFooter: true,
    submitButton: {
      label: 'Submit',
    },
    cancelButton: {
      label: 'Cancel',
    },
    closeDialog: undefined,
  },
} satisfies StoryType

const DialogStoryScreen = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const showDialog = () => setIsDialogVisible(true)
  const closeDialog = () => setIsDialogVisible(false)

  return (
    <div className="story-wrapper">
      <Button className="btn" onClick={showDialog}>
        Open Dialog
      </Button>

      <Dialog
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
        name={'Example Dialog'}
        type={'info'}
        title={'Hello, Im a Title'}
        useFocusTrap={true}
        fullScreen={false}
        submitButton={{
          label: 'Submit',
          action: () => {
            console.log('action')
            closeDialog()
          },
        }}
        cancelButton={{
          label: 'Cancel',
        }}
      >
        <p>I'm a placeholder.</p>
      </Dialog>
    </div>
  )
}
export const Main: StoryDocsType = {
  name: 'Docs',
  component: Docs,
  navigation: {
    icon: <span>📄</span>,
    order: 0,
  },
}

export const DefaultStory: StoryType = {
  name: 'Default',
  component: () => <DialogStoryScreen />,
}
