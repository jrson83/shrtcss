import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import { useState } from 'react'
import Button from '../button/button.js'
import Docs from './drawer.docs.mdx'
import Drawer from './drawer.js'

type StoryType = Story<typeof Drawer>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Drawer',
  component: Drawer,
  args: {
    headerTitle: undefined,
    isOpen: false,
    closeDrawer: undefined,
  },
} satisfies StoryType

export const Main: StoryDocsType = {
  name: 'Docs',
  component: Docs,
  decorators: decoratorsTemplate(true),
  navigation: {
    icon: <span>📄</span>,
    order: 0,
  },
}

export const DefaultStory: StoryType = {
  name: 'Default',
  decorators: [
    (Story, context) => {
      const [isDrawerOpen, setIsDrawerOpen] = useState(false)
      const showDrawer = () => setIsDrawerOpen(true)
      const closeDrawer = () => setIsDrawerOpen(false)

      return (
        <div className="story-wrapper">
          <Button className="btn" onClick={showDrawer}>
            Open Dialog
          </Button>

          <Story
            isOpen={isDrawerOpen}
            closeDrawer={closeDrawer}
            {...context?.args}
          >
            <p>I'm a placeholder.</p>
          </Story>
        </div>
      )
    },
  ],
  args: {
    headerTitle: 'Header Title',
  },
}
