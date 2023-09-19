import type { Story } from '@storylite/storylite'
import Form from './form'

type StoryType = Story<typeof Form>

export default {
  title: 'Form',
  component: Form,
  args: {},
  decorators: [
    (Story, context) => {
      return (
        <div className="example-wrapper">
          <Story {...context?.args} />
        </div>
      )
    },
  ],
} satisfies StoryType

export const Main: StoryType = {
  name: 'Default',
}

export const EmptyFix: StoryType = {}
