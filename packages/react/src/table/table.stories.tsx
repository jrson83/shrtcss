import type { Story } from '@storylite/storylite'
import { type User, users } from './setup.data'
import Table from './table'
import Docs from './table.docs.mdx'

type StoryType = Story<typeof Table>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Table',
  component: Table,
  args: {
    items: undefined,
    columns: undefined,
    caption: false,
    tfoot: false,
    bordered: false,
    hover: false,
    responsive: false,
    striped: false,
  },
} satisfies StoryType

export const Main: StoryDocsType = {
  name: 'Docs',
  component: Docs,
  decorators: [
    (Story, context) => {
      return (
        <div className="story-wrapper">
          <Story {...context?.args} />
        </div>
      )
    },
  ],
  navigation: {
    icon: <span>📄</span>,
    order: 0,
  },
}

export const DefaultStory: StoryType = {
  name: 'Default',
  decorators: [
    (_Story, _context) => {
      return (
        <div className="story-wrapper story-wrapper-doc">
          <Table<User, keyof User>
            items={users}
            columns={[
              { key: 'username', header: 'Username' },
              { key: 'address', header: 'Address' },
              { key: 'role', header: 'Role' },
            ]}
            caption="Userlist"
          />
        </div>
      )
    },
  ],
}
