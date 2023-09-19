import { Story } from '@storylite/storylite'
import Heading from './heading'

type StoryType = Story<typeof Heading>

export default {
  title: 'Heading',
  component: Heading,
  args: {
    as: 'h2',
    children: 'Heading #2',
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
  component: () => (
    <div className="example-wrapper column">
      <Heading as={'h1'}>
        Heading #1 <code>&lt;h1&gt;</code>
      </Heading>
      <Heading>
        Heading #2 <code>&lt;h2&gt;</code>
      </Heading>
      <Heading as={'h3'}>
        Heading #3 <code>&lt;h3&gt;</code>
      </Heading>
      <Heading as={'h4'}>
        Heading #4 <code>&lt;h4&gt;</code>
      </Heading>
      <Heading as={'h5'}>
        Heading #5 <code>&lt;h5&gt;</code>
      </Heading>
      <Heading as={'h6'}>
        Heading #6 <code>&lt;h6&gt;</code>
      </Heading>
    </div>
  ),
}

export const EmptyFix: StoryType = {}
