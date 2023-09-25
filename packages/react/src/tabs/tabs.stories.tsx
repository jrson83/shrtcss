import { decoratorsTemplate } from '@/storylite/decorators'
import { Story } from '@storylite/storylite'
import Tabs, { Tab } from './tabs'
import Docs from './tabs.docs.mdx'

type StoryType = Story<typeof Tabs>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Tabs',
  component: Tabs,
  decorators: decoratorsTemplate(true),
  args: {
    color: 'accent',
    ariaLabel: undefined,
    children: undefined,
  },
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
    color: 'accent',
    ariaLabel: 'Example Tabs',
  },
  decorators: [
    (_Story, context) => {
      return (
        <div className="story-wrapper story-wrapper-column">
          <Tabs ariaLabel="Example Tabs" color={'accent'} {...context?.args}>
            <Tab title="Tab #1">
              <p>Example Text #1</p>
            </Tab>
            <Tab title="Tab #2">
              <p>Example Text #2</p>
            </Tab>
            <Tab title="Tab #3">
              <p>Example Text #3</p>
            </Tab>
          </Tabs>
        </div>
      )
    },
  ],
}
