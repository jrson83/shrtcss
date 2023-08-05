import Icon from './icon'
import './icon.style.scss'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components',
} satisfies StoryDefault

export const IconScreen: Story = () => {
  return (
    <div className='story-wrapper'>
      <h1>Icon</h1>
      <p>
        Displays a <code>&lt;svg&gt;</code> or a component that looks like an
        icon.
      </p>
      <div className='example-wrapper'>
        <Icon title='Test' icon={'add'} />
        <Icon title='Test' icon={'arrowDown'} />
        <Icon title='Test' icon={'arrowLeft'} />
        <Icon title='Test' icon={'arrowRight'} />
        <Icon title='Test' icon={'calendar'} />
        <Icon title='Test' icon={'checkmark'} />
        <Icon title='Test' icon={'close'} />
        <Icon title='Test' icon={'ellipsis'} />
        <Icon title='Test' icon={'error'} />
        <Icon title='Test' icon={'exit'} />
        <Icon title='Test' icon={'expand'} />
        <Icon title='Test' icon={'file'} />
        <Icon title='Test' icon={'focus'} />
        <Icon title='Test' icon={'gamepad'} />
        <Icon title='Test' icon={'info'} />
        <Icon title='Test' icon={'ps4'} />
        <Icon title='Test' icon={'question'} />
        <Icon title='Test' icon={'settings'} />
        <Icon title='Test' icon={'statusError'} />
        <Icon title='Test' icon={'statusInfo'} />
        <Icon title='Test' icon={'statusQuestion'} />
        <Icon title='Test' icon={'statusSuccess'} />
        <Icon title='Test' icon={'success'} />
        <Icon title='Test' icon={'time'} />
        <Icon title='Test' icon={'user'} />
      </div>
      <small>
        Icons from{' '}
        <a
          href='https://github.com/ionic-team/ionicons'
          target='_blank'
          rel='noreferrer'
        >
          Ionicons
        </a>{' '}
        - Premium hand-crafted icons built by Ionic.
      </small>
    </div>
  )
}

IconScreen.storyName = 'Icon'
