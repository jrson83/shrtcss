import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import Docs from './ic.docs.mdx'
import Icon from './icon.js'

type StoryType = Story<typeof Icon>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Icon',
  component: Icon,
  args: {
    iconId: undefined,
    title: undefined,
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
  args: {
    iconId: 'ios-settings',
    title: 'Icon',
    width: '32',
    height: '32',
  },
}
