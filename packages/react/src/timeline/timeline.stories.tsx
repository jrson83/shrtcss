import { Story } from '@storylite/storylite'
import Timeline from './timeline'
import Docs from './timeline.docs.mdx'

type StoryType = Story<typeof Timeline>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Timeline',
  component: Timeline,
  args: {
    items: [],
    ariaLabel: 'timeline',
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
  args: {
    items: [
      {
        id: 1,
        completed: false,
        date: '17:00 PM',
        label: 'Test #1',
        color: 'success',
      },
      {
        id: 2,
        date: '13:00 PM',
        label: 'Test #2',
        color: 'success',
      },
      {
        id: 3,
        date: '12:00 PM',
        label: 'Test #3',
        color: 'success',
      },
      {
        id: 4,
        date: '11:00 PM',
        label: 'Test #4',
        color: 'success',
      },
    ],
  },
}
