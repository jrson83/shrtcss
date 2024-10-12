import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import { useState } from 'react'
import Button from '../button/button.js'
import Pagination from '../pagination/pagination.js'
import { usePagination } from '../pagination/use-pagination.js'
import { type User, users } from '../table/setup.data.js'
import Table, { TableResult } from '../table/table.js'
import Docs from './card.docs.mdx'
import Card, { CardHeader, CardBody, CardFooter } from './card.js'

type StoryType = Story<typeof Card>
type StoryDocsType = Story<typeof Card>

export default {
  title: 'Card',
  component: Card,
  args: {
    children: undefined,
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

const TestCard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { totalCount, data } = usePagination(users, currentPage, 15)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <CardHeader>
        <h5>Label overview</h5>
        <span
          style={{ display: 'grid', gridAutoFlow: 'column', gap: '0.75rem' }}
        >
          <div
            style={{
              flexGrow: '1',
              position: 'relative',
              width: '100%',
            }}
          >
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                top: '50%',
                left: '0.75rem',
                transform: 'translateY(-50%)',
                width: '18px',
                height: '18px',
                color: 'var(--shrt-color-text-weakest)',
              }}
            >
              <title>SVG</title>
              <path
                d="m16.03 14.61c1.23-1.54 1.97-3.49 1.97-5.61 0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.12 0 4.07-.74 5.61-1.97l3.97 3.97 1.41-1.41-3.97-3.97zm-7.03 1.39c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
                fill="currentColor"
              ></path>
            </svg>
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              style={{
                minWidth: '100%',
                paddingBlock: '0.5rem',
                paddingInline: '1rem',
                paddingLeft: '2.5rem',
              }}
              autoComplete="off"
              spellCheck="false"
              type="search"
              placeholder="Filter entries"
            />
          </div>
          <Button size={'sm'} leftIcon={'funnel-outline'} />
          <Button
            color={'info'}
            variant={'outline'}
            size={'sm'}
            leftIcon={'ios-add'}
          >
            <span>Create</span>
          </Button>
        </span>
      </CardHeader>
      <CardBody className="horizontal-scroll-container">
        <Table<User & { action?: 'delete' }, keyof User | 'action'>
          bordered={false}
          hover={true}
          items={data}
          columns={[
            { key: 'username', label: 'Username' },
            { key: 'address', label: 'Address' },
            { key: 'role', label: 'Role' },
            {
              key: 'action',
              label: '',
              render: (_, record) => {
                return (
                  <Button
                    size={'sm'}
                    color={'danger'}
                    variant={'light'}
                    data-id={record.id}
                    leftIcon={'ios-trash'}
                    aria-label="Delete entry"
                    title="Delete entry"
                    onClick={() => console.log('destroy')}
                  />
                )
              },
            },
          ]}
        />
      </CardBody>
      <CardFooter pagination={true}>
        <TableResult to={15} total={totalCount} from={currentPage} />
        <Pagination
          size={'sm'}
          align={'end'}
          currentPage={currentPage}
          itemsPerPage={15}
          totalItems={totalCount}
          onPageChange={handlePageChange}
        />
      </CardFooter>
    </>
  )
}

export const DefaultStory: StoryType = {
  name: 'Default',
  decorators: decoratorsTemplate(),
  args: {
    children: <TestCard />,
  },
}
