import type { Story } from '@storylite/storylite'
import Spinner from '../spinner'
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
    variant: undefined,
    size: undefined,
    disabled: false,
    fullWidth: false,
    uppercase: false,
    children: 'Default',
  },
} satisfies StoryType

export const Main: StoryDocsType = {
  name: 'Docs',
  component: Docs,
  decorators: [
    (Story, context) => {
      return (
        <div className="story-wrapper story-wrapper-column">
          <Story {...context?.args} />
        </div>
      )
    },
  ],
  navigation: {
    icon: <span>📄</span>,
    order: 0,
  },
}

export const DefaultStory: StoryType = {
  name: 'Default',
  decorators: [
    (Story, context) => {
      return (
        <div className="story-wrapper">
          <Story {...context?.args} />
        </div>
      )
    },
  ],
  navigation: {
    order: 1,
  },
}

export const Danger: StoryType = {
  args: {
    variant: 'filled',
    color: 'danger',
    children: 'Danger',
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
  navigation: {
    order: 2,
  },
}

export const Success: StoryType = {
  args: {
    variant: 'filled',
    color: 'success',
    children: 'Success',
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
  navigation: {
    order: 3,
  },
}

export const Warning: StoryType = {
  args: {
    variant: 'filled',
    color: 'warning',
    children: 'Warning',
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
  navigation: {
    order: 4,
  },
}

export const Disabled: StoryType = {
  args: {
    disabled: true,
    children: 'Disabled',
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
  navigation: {
    order: 5,
  },
}

export const FullWidth: StoryType = {
  args: {
    fullWidth: true,
    children: 'FullWidth',
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
  navigation: {
    order: 6,
  },
}

export const Uppercase: StoryType = {
  args: {
    uppercase: true,
    children: 'Uppercase',
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
  navigation: {
    order: 7,
  },
}

export const LoadingSpinner: StoryType = {
  args: {
    uppercase: true,
    children: <Spinner size={'sm'} />,
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
  navigation: {
    order: 8,
  },
}
