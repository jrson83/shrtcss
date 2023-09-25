import { decoratorsTemplate } from '@/storylite/decorators'
import { Story } from '@storylite/storylite'
import Alert from './alert'
import Docs from './alert.docs.mdx'

type StoryType = Story<typeof Alert>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Alert',
  component: Alert,
  args: {
    className: undefined,
    color: 'info',
    title: undefined,
    hasIcon: true,
    closeBtn: false,
    children: 'This is an info alert message.',
  },
  decorators: decoratorsTemplate(true),
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
    children: 'This is a danger alert message.',
  },
}

export const Success: StoryType = {
  args: {
    color: 'success',
    children: 'This is a Success alert message.',
  },
}

export const Warning: StoryType = {
  args: {
    color: 'warning',
    children: 'This is a warning alert message.',
  },
}

export const WithCloseButton: StoryType = {
  args: {
    closeBtn: true,
    children: 'This is an info alert message.',
  },
}

export const WithTitle: StoryType = {
  args: {
    title: 'Info',
    children: 'This is an info alert message.',
  },
}

export const WithoutIcon: StoryType = {
  args: {
    hasIcon: false,
    children: 'This is an info alert message.',
  },
}
