import { decoratorsTemplate } from '@/storylite/decorators'
import { Story } from '@storylite/storylite'
import Icon from './icon'
import Docs from './icon.docs.mdx'

type StoryType = Story<typeof Icon>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Icon',
  component: Icon,
  args: {
    className: undefined,
    color: undefined,
    icon: 'ps4',
    size: 32,
    title: 'Icon',
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
