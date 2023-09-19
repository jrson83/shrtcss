import { Story } from '@storylite/storylite'
import Alert from './alert'

type StoryType = Story<typeof Alert>

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

export const Main: StoryType = {
  name: 'Default',
  navigation: {
    order: 0,
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

/* export const Main: StoryType = {
  name: 'Docs',
  component: () => (
    <>
      <h1>Alert</h1>
      <p>Display an alert component.</p>
      <h2>Basic</h2>
      <div className="example-wrapper column">
        <Alert>This is an info alert message.</Alert>
        <Alert color="success">This is a success alert message.</Alert>
        <Alert color="warning">This is a warning alert message.</Alert>
        <Alert color="danger">This is an error alert message.</Alert>
      </div>
      <h2>Title</h2>
      <p>Display an alert.</p>
      <div className="example-wrapper column">
        <Alert title="Info">This is an info alert message.</Alert>
        <Alert title="Success" color="success">
          This is a success alert message.
        </Alert>
        <Alert title="Warning" color="warning">
          This is a warning alert message.
        </Alert>
        <Alert title="Error" color="danger">
          This is an error alert message.
        </Alert>
      </div>
      <h2>Icon</h2>
      <p>Display an alert.</p>
      <div className="example-wrapper column">
        <Alert title="Info" hasIcon={false}>
          This is an info alert message.
        </Alert>
        <Alert title="Success" color="success" hasIcon={false}>
          This is a success alert message.
        </Alert>
        <Alert title="Warning" color="warning" hasIcon={false}>
          This is a warning alert message.
        </Alert>
        <Alert title="Error" color="danger" hasIcon={false}>
          This is an error alert message.
        </Alert>
      </div>
    </>
  ),
  navigation: {
    order: 0,
  },
}
 */
