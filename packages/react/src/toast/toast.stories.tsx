import type { Story } from '@storylite/storylite'
import Button from '../button/button.js'
import Docs from './toast.docs.mdx'
import { useToasts } from './toast.hook.js'
import Toast from './toast.js'
import { ToastProvider } from './toast.provider.js'

type StoryType = Story<typeof Toast>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Toast',
  component: Toast,
  args: {
    position: 'bottom-center',
  },
  decorators: [
    (Story, context) => {
      return (
        <div className="story-wrapper">
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
    <Button type="button" onClick={clickAddToast}>
      Toast
    </Button>
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
