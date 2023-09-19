import type { Story } from '@storylite/storylite'
import Button from './button'

type StoryType = Story<typeof Button>

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
        <div className="example-wrapper">
          <Story {...context?.args} />
        </div>
      )
    },
  ],
} satisfies StoryType

export const Main: StoryType = {
  name: 'Default',
  navigation: {
    order: 0,
  },
}

export const Danger: StoryType = {
  args: {
    color: 'danger',
    children: 'Danger',
  },
  navigation: {
    order: 1,
  },
}

export const Success: StoryType = {
  args: {
    color: 'success',
    children: 'Success',
  },
  navigation: {
    order: 2,
  },
}

export const Warning: StoryType = {
  args: {
    color: 'warning',
    children: 'Warning',
  },
  navigation: {
    order: 3,
  },
}

export const Disabled: StoryType = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
  navigation: {
    order: 4,
  },
}

export const FullWidth: StoryType = {
  args: {
    fullWidth: true,
    children: 'FullWidth',
  },
  navigation: {
    order: 5,
  },
}

export const Uppercase: StoryType = {
  args: {
    uppercase: true,
    children: 'Uppercase',
  },
  navigation: {
    order: 6,
  },
}
