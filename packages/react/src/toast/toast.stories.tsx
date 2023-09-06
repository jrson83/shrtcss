import Button from '../button'
import { Toast } from './toast'
import { ToastProvider } from './toast.context'
import { useToasts } from './toast.context'
import { Story } from '@storylite/storylite'

type StoryType = Story<typeof Toast>

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
        <div className='story-wrapper wrap'>
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
    <div className='example-wrapper column'>
      <Button type='button' onClick={clickAddToast}>
        Toast
      </Button>
    </div>
  )
}

export const Main: StoryType = {
  name: 'Default',
  component: () => <ToastStoryScreen />,
}

export const EmptyFix: StoryType = {}
