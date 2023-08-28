import Icon from '../icon'
import Button from './button'
import { StoryComponent, StoryMeta } from '@storylite/storylite'

export default {
  title: 'Components',
} satisfies StoryMeta

const ButtonScreen: StoryComponent = () => {
  return (
    <div className='story-wrapper'>
      <h1>Button</h1>
      <h2>Basic</h2>
      <p>
        Displays a <code>&lt;button&gt;</code> and use the utility class{' '}
        <code>.bg-*</code> to change the button <code>background-color</code> &{' '}
        <code>font-color</code>.
      </p>
      <div className='example-wrapper'>
        <Button className='btn'>Button</Button>
        <Button color={'info'}>Button</Button>
        <Button color={'success'}>Button</Button>
        <Button color={'warning'}>Button</Button>
        <Button color={'danger'}>Button</Button>
      </div>
      <h2>Icon</h2>
      <p>
        Use the utility class <code>.btn-icon </code> to align icon/svg/img
        inside buttons.
      </p>
      <div className='example-wrapper'>
        <Button className='btn btn-icon' aria-label='Icon-only Button'>
          <Icon title='test' icon={'ps4'} size={26} />
        </Button>
        <Button className='btn btn-icon bg-info' aria-label='Icon-only Button'>
          <Icon title='test' icon={'info'} size={26} />
        </Button>
        <Button
          className='btn btn-icon bg-success'
          aria-label='Icon-only Button'
        >
          <Icon title='test' icon={'success'} size={26} />
        </Button>
        <Button
          className='btn btn-icon bg-warning'
          aria-label='Icon-only Button'
        >
          <Icon title='test' icon={'question'} size={26} />
        </Button>
        <Button
          className='btn btn-icon bg-danger'
          aria-label='Icon-only Button'
        >
          <Icon title='test' icon={'error'} size={26} />
        </Button>
      </div>
      <h2>Icon & Label</h2>
      <p>
        Place an <code>Icon</code> (SVG) inside a buttons content and wrap the
        label with <code>&lt;span&gt;</code> element.
      </p>
      <div className='example-wrapper'>
        <Button className='btn' aria-label='Icon-only Button'>
          <Icon title='test' icon={'time'} size={20} />
          <span>Label</span>
        </Button>
      </div>
      <h2>Size Variants</h2>
      <p>
        Use the modifier classes <code>.btn-sm .btn-lg</code> to change the
        button size (scale).
      </p>
      <div className='example-wrapper'>
        <Button size={'lg'}>Large</Button>
        <Button>Normal</Button>
        <Button size={'sm'}>Small</Button>
      </div>
      <h2>Disabled</h2>
      <p>
        Use the <code>disabled</code> attribute to keep a user from clicking on
        the button.
      </p>
      <div className='example-wrapper'>
        <Button disabled>Disabled</Button>
        <Button color={'info'} disabled>
          Disabled
        </Button>
        <Button color={'success'} disabled>
          Disabled
        </Button>
        <Button color={'warning'} disabled>
          Disabled
        </Button>
        <Button color={'danger'} disabled>
          Disabled
        </Button>
      </div>
      <h2>Full-Width</h2>
      <p>
        Use the modifier class <code>.btn-fw</code> to change the button width.
      </p>
      <div className='example-wrapper'>
        <Button fullWidth>Button</Button>
      </div>
    </div>
  )
}

ButtonScreen.storyTitle = 'Button'

export { ButtonScreen }
