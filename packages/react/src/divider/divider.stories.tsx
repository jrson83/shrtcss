import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import Docs from './divider.docs.mdx'
import Divider from './divider.js'

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
  decorators: decoratorsTemplate(true),
  navigation: {
    icon: <span>📄</span>,
    order: 0,
  },
}

export const DefaultStory: StoryType = {
  name: 'Default',
}

export const Vertical: StoryType = {
  name: 'Vertical',
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story, context) => {
      return (
        <div className="story-wrapper">
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
  decorators: decoratorsTemplate(true),
}
