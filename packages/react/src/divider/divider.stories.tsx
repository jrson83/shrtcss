import { Story } from '@storylite/storylite'
import Divider from './divider'
import Docs from './divider.docs.mdx'

type StoryType = Story<typeof Divider>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Divider',
  component: Divider,
  args: {
    orientation: 'horizontal',
    label: undefined,
  },
} satisfies StoryType

export const Main: StoryDocsType = {
  name: 'Docs',
  component: Docs,
  decorators: [
    (Story, context) => {
      return (
        <div className="story-wrapper">
          <Story {...context?.args} />
        </div>
      )
    },
  ],
  navigation: {
    icon: <span>📄</span>,
    order: 0,
  },
}

export const DefaultStory: StoryType = {
  name: 'Default',
  decorators: [
    (Story, context) => {
      return (
        <div className="example-wrapper">
          <Story {...context?.args} />
        </div>
      )
    },
  ],
}

export const Vertical: StoryType = {
  name: 'Vertical',
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story, context) => {
      return (
        <div className="example-wrapper">
          Text <Story {...context?.args} /> Text
        </div>
      )
    },
  ],
}

export const WithLabel: StoryType = {
  args: {
    label: 'Label',
  },
  decorators: [
    (Story, context) => {
      return (
        <div className="example-wrapper column">
          <Story {...context?.args} />
        </div>
      )
    },
  ],
}
