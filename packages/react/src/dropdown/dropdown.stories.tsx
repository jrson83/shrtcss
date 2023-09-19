import { Story } from '@storylite/storylite'
import Icon from '../icon'
import Dropdown from './dropdown'
import Docs from './dropdown.docs.mdx'

type StoryType = Story<typeof Dropdown>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    label: 'Testing',
    icon: undefined,
    position: undefined,
  },
  decorators: [
    (Story, context) => {
      return (
        <div className="example-wrapper">
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

export const WithIconButton: StoryType = {
  args: {
    label: 'Testing',
    icon: <Icon title="Settings" icon={'ellipsis'} size={26} />,
  },
}
