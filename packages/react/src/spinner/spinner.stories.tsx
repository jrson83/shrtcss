import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import Docs from './spinner.docs.mdx'
import Spinner from './spinner.js'

type StoryType = Story<typeof Spinner>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Spinner',
  component: Spinner,
  args: {
    color: undefined,
    size: undefined,
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

export const WithLabel: StoryType = {
  args: {
    label: 'Loading, please wait',
  },
  decorators: decoratorsTemplate(true),
}

export const Size: StoryType = {
  args: {
    size: 'xl',
  },
  decorators: decoratorsTemplate(true),
}
