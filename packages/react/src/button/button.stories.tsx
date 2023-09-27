import type { Story } from '@storylite/storylite'
import Button from './button'
import Docs from './button.docs.mdx'

type StoryType = Story<typeof Button>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Button',
  component: Button,
  args: {
    className: 'btn',
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
        <div className="story-wrapper story-wrapper-column">
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
