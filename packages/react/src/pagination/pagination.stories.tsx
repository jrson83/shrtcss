import { decoratorsTemplate } from '@/storylite/decorators'
import type { Story } from '@storylite/storylite'
import { useState } from 'react'
import Docs from './pagination.docs.mdx'
import Pagination from './pagination.js'
import { usePagination } from './use-pagination.js'

type StoryType = Story<typeof Pagination>
type StoryDocsType = Story<typeof Docs>

const testData: number[] = [...Array(100).keys()].map((i) => i + 1)

function PaginationStoryScreen({
  initialPage = 1,
  itemsPerPage = 10,
}: { initialPage?: number; itemsPerPage?: number }) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage)

  const { totalCount, data } = usePagination(
    testData,
    currentPage,
    itemsPerPage
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <div className="example-wrapper wrap">
        {data.map((item) => {
          return <div key={item}>{item}</div>
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalCount}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    size: undefined,
    onPageChange: undefined,
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
  component: () => <PaginationStoryScreen />,
}
