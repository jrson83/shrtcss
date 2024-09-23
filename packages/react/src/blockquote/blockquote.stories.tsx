import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import Docs from './blockquote.docs.mdx'
import Blockquote from './blockquote.js'

type StoryType = Story<typeof Blockquote>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Blockquote',
  component: Blockquote,
  args: {
    cite: undefined,
    children: 'First, solve the problem. Then, write the code.',
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
  decorators: decoratorsTemplate(),
}

export const WithCite: StoryType = {
  args: {
    children: 'First, solve the problem. Then, write the code.',
    cite: '— John Johnson',
  },
  decorators: decoratorsTemplate(),
}
