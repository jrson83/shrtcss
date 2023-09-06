import Blockquote from './blockquote'
import { Story } from '@storylite/storylite'

type StoryType = Story<typeof Blockquote>

export default {
  title: 'Blockquote',
  component: Blockquote,
  args: {
    cite: undefined,
    children: 'First, solve the problem. Then, write the code.',
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
  navigation: {
    order: 0,
  },
}

export const WithCite: StoryType = {
  args: {
    children: 'First, solve the problem. Then, write the code.',
    cite: '— John Johnson',
  },
}
