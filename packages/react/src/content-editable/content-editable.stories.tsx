import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import Docs from './content-editable.docs.mdx'
import ContentEditable from './content-editable.js'

type StoryType = Story<typeof ContentEditable>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'ContentEditable',
  component: ContentEditable,
  args: {
    content: '',
    'data-id': 0,
    onBlur: () => console.log('onBlur'),
    onInput: () => console.log('onInput'),
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
    content: 'Hello',
    'data-id': 1,
    onBlur: () => console.log('onBlur'),
    onInput: () => console.log('onInput'),
  },
  // @ts-expect-error
  decorators: decoratorsTemplate(),
}
