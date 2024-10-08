import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import Icon from '../icon/icon.js'
import Docs from './dropdown.docs.mdx'
import Dropdown from './dropdown.js'

type StoryType = Story<typeof Dropdown>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    label: 'Dropdown',
    icon: undefined,
    position: undefined,
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

export const WithIconButton: StoryType = {
  args: {
    label: 'Dropdown',
    icon: <Icon title="Settings" iconId={'ellipsis-vertical'} size={26} />,
  },
  decorators: decoratorsTemplate(),
}
