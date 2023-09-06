import Icon from '../icon'
import Dropdown from './dropdown'
import { Story } from '@storylite/storylite'

type StoryType = Story<typeof Dropdown>

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    label: 'Testing',
    icon: undefined,
    position: undefined,
  },
  decorators: [
    (Story, context) => {
      return (
        <div className='example-wrapper'>
          <Story {...context?.args} />
        </div>
      )
    },
  ],
} satisfies StoryType

export const Main: StoryType = {
  name: 'Default',
}

export const WithIconButton: StoryType = {
  args: {
    label: 'Testing',
    icon: <Icon title='Settings' icon={'ellipsis'} size={26} />,
  },
}
