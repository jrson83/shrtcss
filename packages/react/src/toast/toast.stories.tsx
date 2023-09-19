import { Story } from '@storylite/storylite'
import Button from '../button'
import { Toast } from './toast'
import Docs from './toast.docs.mdx'
import { useToasts } from './toast.hook'
import { ToastProvider } from './toast.provider'

type StoryType = Story<typeof Toast>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Toast',
  component: Toast,
  args: {
    position: 'bottom-center',
    children: 'This is an info alert message.',
  },
  decorators: [
    (Story, context) => {
      return (
        <div className="story-wrapper wrap">
          <ToastProvider>
            <Story {...context?.args} />
          </ToastProvider>
        </div>
      )
    },
  ],
} satisfies StoryType

const ToastStoryScreen = () => {
  const { add } = useToasts()

  const clickAddToast = () => {
    add({
      color: 'info',
      title: 'This is a Title',
      children: 'Your changes has been saved',
    })
  }

  return (
    <div className="example-wrapper column">
      <Button type="button" onClick={clickAddToast}>
        Toast
      </Button>
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
  component: () => <ToastStoryScreen />,
}
