import { decoratorsTemplate } from '@/storylite/decorators'
import { Story } from '@storylite/storylite'
import { useState } from 'react'
import Button from '../button'
import Dialog from './dialog'
import Docs from './dialog.docs.mdx'

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

export const Main: StoryDocsType = {
  name: 'Docs',
  component: Docs,
  decorators: decoratorsTemplate(true),
  navigation: {
    icon: <span>📄</span>,
    order: 0,
  },
}

export const DefaultStory: StoryType = {
  name: 'Default',
  args: {
    children: undefined,
    name: 'Example Dialog',
    type: 'info',
    title: 'Hello, Im a Heading',
    useFocusTrap: true,
    fullScreen: false,
    position: undefined,
    showCloseButton: false,
    showDialogFooter: true,
    submitButton: {
      label: 'Submit',
      action: () => console.log('action'),
    },
    cancelButton: {
      label: 'Cancel',
    },
  },
  decorators: [
    (Story, context) => {
      const [isDialogVisible, setIsDialogVisible] = useState(true)
      const showDialog = () => setIsDialogVisible(true)
      const closeDialog = () => setIsDialogVisible(false)

      return (
        <div className="story-wrapper">
          <Button className="btn" onClick={showDialog}>
            Open Dialog
          </Button>

          <Story
            isDialogVisible={isDialogVisible}
            closeDialog={closeDialog}
            {...context?.args}
          >
            <p>I'm a placeholder.</p>
          </Story>
        </div>
      )
    },
  ],
}
