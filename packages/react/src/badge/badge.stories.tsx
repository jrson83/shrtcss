import Icon from '../icon'
import Badge from './badge'
import { StoryComponent, StoryMeta } from '@storylite/storylite'

export default {
  title: 'Components',
} satisfies StoryMeta

const BadgeScreen: StoryComponent = () => {
  return (
    <div className='story-wrapper wrap'>
      <h1>Badge</h1>
      <h2>Basic</h2>
      <p>
        Displays a <code>&lt;badge&gt;</code> and use the utility class{' '}
        <code>.bg-*</code> to change the button <code>background-color</code> &{' '}
        <code>font-color</code>.
      </p>
      <div className='example-wrapper'>
        <Badge>Test</Badge>
        <Badge color={'info'}>Test</Badge>
        <Badge color={'success'}>Test</Badge>
        <Badge color={'warning'}>Test</Badge>
        <Badge color={'danger'}>Test</Badge>
      </div>
      <h2>Icon</h2>
      <p>
        Use the utility class <code>.bdg-icon</code> to align{' '}
        <code>icon/svg/img</code> inside badges.
      </p>
      <div className='example-wrapper'>
        <Badge>
          <Icon title='test' icon={'ps4'} size={20} />
        </Badge>
        <Badge className='bdg bdg-icon bg-info' aria-label='Icon-only Badge'>
          <Icon title='test' icon={'info'} size={20} />
        </Badge>
        <Badge className='bdg bdg-icon bg-success' aria-label='Icon-only Badge'>
          <Icon title='test' icon={'success'} size={20} />
        </Badge>
        <Badge className='bdg bdg-icon bg-warning' aria-label='Icon-only Badge'>
          <Icon title='test' icon={'question'} size={20} />
        </Badge>
        <Badge className='bdg bdg-icon bg-danger' aria-label='Icon-only Badge'>
          <Icon title='test' icon={'error'} size={20} />
        </Badge>
      </div>
      <h2>Icon & Label</h2>
      <p>
        Place an <code>Icon</code> (SVG) inside a badges content and wrap the
        label with <code>&lt;span&gt;</code> element.
      </p>
      <div className='example-wrapper'>
        <Badge className='bdg' aria-label='Icon-only Badge'>
          <Icon title='test' icon={'time'} size={16} />
          <span>Label</span>
        </Badge>
      </div>
      <h2>Size Variants</h2>
      <p>
        Use the modifier classes <code>.bdg-sm</code> & <code>.bdg-lg</code> to
        change the badge size (scale).
      </p>
      <div className='example-wrapper'>
        <Badge size={'lg'}>Large</Badge>
        <Badge>Normal</Badge>
        <Badge size={'sm'}>Small</Badge>
      </div>
      <h2>Disabled</h2>
      <p>
        Use the <code>disabled</code> attribute to keep a user from clicking on
        the badge.
      </p>
      <div className='example-wrapper'>
        <Badge disabled>Disabled</Badge>
        <Badge color={'info'} disabled>
          Disabled
        </Badge>
        <Badge color={'success'} disabled>
          Disabled
        </Badge>
        <Badge color={'warning'} disabled>
          Disabled
        </Badge>
        <Badge color={'danger'} disabled>
          Disabled
        </Badge>
      </div>
      <h2>Full-Width</h2>
      <p>
        Use the modifier class <code>.bdg-fw</code> to change the badges
        <code>width</code>.
      </p>
      <div className='example-wrapper'>
        <Badge fullWidth>Badge</Badge>
      </div>
    </div>
  )
}

BadgeScreen.storyTitle = 'Badge'

export { BadgeScreen }
