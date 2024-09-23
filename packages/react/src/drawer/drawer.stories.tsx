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

const DrawerStoryScreen = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const showDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <div className="story-wrapper">
      <Button className="btn" onClick={showDrawer}>
        Open Drawer
      </Button>

      <Drawer
        isOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
        headerTitle={'Header Title'}
      >
        <p>I'm a placeholder.</p>
      </Drawer>
    </div>
  )
}

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
  component: () => <DrawerStoryScreen />,
}
