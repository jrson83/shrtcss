import { Story } from '@storylite/storylite'
import Blockquote from './blockquote'
import Docs from './blockquote.docs.mdx'

type StoryType = Story<typeof Blockquote>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Blockquote',
  component: Blockquote,
  args: {
    cite: undefined,
    children: 'First, solve the problem. Then, write the code.',
  },
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

export const WithCite: StoryType = {
  args: {
    children: 'First, solve the problem. Then, write the code.',
    cite: '— John Johnson',
  },
}
