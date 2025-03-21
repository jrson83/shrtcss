import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import ContentEditable from '../content-editable/content-editable.js'
import { type User, users } from './setup.data.js'
import Docs from './table.docs.mdx'
import Table from './table.js'

type StoryType = Story<typeof Table>
type StoryDocsType = Story<typeof Docs>

export default {
  title: 'Table',
  component: Table,
  args: {
    items: undefined,
    columns: undefined,
    caption: undefined,
    tfoot: false,
    bordered: false,
    hover: false,
    responsive: false,
    striped: false,
  },
  decorators: decoratorsTemplate(true),
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
  component: () => {
    return (
      <Table<User, keyof User>
        items={users}
        columns={[
          { key: 'username', label: 'Username' },
          { key: 'address', label: 'Address' },
          { key: 'role', label: 'Role' },
        ]}
        caption="Userlist"
      />
    )
  },
}

export const WithComponent: StoryType = {
  component: () => {
    return (
      <Table<User, keyof User>
        items={users}
        columns={[
          {
            key: 'username',
            label: 'Username',
            render: (_, record) => {
              return (
                <ContentEditable
                  content={record.username}
                  data-id={record.id}
                  onInput={() => console.log('onInput', record.id)}
                  onBlur={() => console.log('onBlur', record.id)}
                />
              )
            },
          },
          { key: 'address', label: 'Address' },
          {
            key: 'role',
            label: 'Role',
          },
        ]}
        caption="Userlist"
      />
    )
  },
}
