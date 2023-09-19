import { Story } from '@storylite/storylite'
import Badge from './badge'
import Docs from './badge.docs.mdx'

type StoryType = Story<typeof Badge>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Badge',
  component: Badge,
  args: {
    className: 'bdg',
    color: undefined,
    size: undefined,
    disabled: false,
    fullWidth: false,
    uppercase: false,
    children: 'Default',
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
  navigation: {
    order: 1,
  },
}

export const Danger: StoryType = {
  args: {
    color: 'danger',
    children: 'Danger',
  },
  navigation: {
    order: 2,
  },
}

export const Success: StoryType = {
  args: {
    color: 'success',
    children: 'Success',
  },
  navigation: {
    order: 3,
  },
}

export const Warning: StoryType = {
  args: {
    color: 'warning',
    children: 'Warning',
  },
  navigation: {
    order: 4,
  },
}

export const Disabled: StoryType = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
  navigation: {
    order: 5,
  },
}

export const FullWidth: StoryType = {
  args: {
    fullWidth: true,
    children: 'FullWidth',
  },
  navigation: {
    order: 6,
  },
}

export const Uppercase: StoryType = {
  args: {
    uppercase: true,
    children: 'Uppercase',
  },
  navigation: {
    order: 7,
  },
}
