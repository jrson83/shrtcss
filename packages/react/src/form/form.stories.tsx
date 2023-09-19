import type { Story } from '@storylite/storylite'
import Form from './form'
import Docs from './form.docs.mdx'

type StoryType = Story<typeof Form>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Form',
  component: Form,
  args: {},
  decorators: [
    (Story, context) => {
      return (
        <div className="story-wrapper">
          <Story {...context?.args} />
        </div>
      )
    },
  ],
} satisfies StoryType

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
}
