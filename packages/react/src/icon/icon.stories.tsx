import { Story } from '@storylite/storylite'
import Icon from './icon'

type StoryType = Story<typeof Icon>

export default {
  title: 'Icon',
  component: Icon,
  args: {
    className: undefined,
    color: undefined,
    icon: 'ps4',
    size: 32,
    title: 'Icon',
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

export const IconList: StoryType = {
  args: {
    className: undefined,
    color: 'var(--shrt-color-info)',
    icon: 'ps4',
    size: 32,
    title: 'Icon',
  },
}
