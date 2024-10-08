import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import Docs from './badge.docs.mdx'
import Badge from './badge.js'

type StoryType = Story<typeof Badge>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Badge',
  component: Badge,
  args: {
    className: 'bdg',
    color: 'info',
    variant: 'default',
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
  decorators: decoratorsTemplate(true),
  navigation: {
    icon: <span>📄</span>,
    order: 0,
  },
}

export const DefaultStory: StoryType = {
  name: 'Default',
  decorators: decoratorsTemplate(),
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
  decorators: decoratorsTemplate(),
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
  decorators: decoratorsTemplate(),
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
  decorators: decoratorsTemplate(),
  navigation: {
    order: 4,
  },
}

export const Disabled: StoryType = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
  decorators: decoratorsTemplate(),
  navigation: {
    order: 5,
  },
}

export const FullWidth: StoryType = {
  args: {
    fullWidth: true,
    children: 'FullWidth',
  },
  decorators: decoratorsTemplate(),
  navigation: {
    order: 6,
  },
}

export const Uppercase: StoryType = {
  args: {
    uppercase: true,
    children: 'Uppercase',
  },
  decorators: decoratorsTemplate(),
  navigation: {
    order: 7,
  },
}
