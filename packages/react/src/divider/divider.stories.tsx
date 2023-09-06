import Divider from './divider'
import { Story } from '@storylite/storylite'

type StoryType = Story<typeof Divider>

export default {
  title: 'Divider',
  component: Divider,
  args: {
    orientation: 'horizontal',
    label: undefined,
  },
} satisfies StoryType

export const Main: StoryType = {
  name: 'Default',
  decorators: [
    (Story, context) => {
      return (
        <div className='example-wrapper'>
          <Story {...context?.args} />
        </div>
      )
    },
  ],
}

export const Vertical: StoryType = {
  name: 'Vertical',
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story, context) => {
      return (
        <div className='example-wrapper'>
          Text <Story {...context?.args} /> Text
        </div>
      )
    },
  ],
}

export const WithLabel: StoryType = {
  args: {
    label: 'Label',
  },
  decorators: [
    (Story, context) => {
      return (
        <div className='example-wrapper column'>
          <Story {...context?.args} />
        </div>
      )
    },
  ],
}
