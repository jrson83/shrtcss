import type { SHRTSize } from '@shrtcss/core/*'
import { cx } from 'classix'
import { useCallback } from 'react'
import Button from '../button'
import Icon from '../icon'

export interface PaginationProps {
  /** */
  currentPage?: number

  /** */
  itemsPerPage?: number

  /** */
  totalItems?: number

  /** */
  size?: SHRTSize

  /** */
  onPageChange?: (page: number) => void
}

export default function Pagination({
  currentPage,
  itemsPerPage = 10,
  totalItems = 0,
  size,
  onPageChange,
}: PaginationProps) {
  if (!currentPage)
    throw new Error('Pagination component missing `currentPage`')
  if (!onPageChange)
    throw new Error('Pagination component missing `onPageChange`')

  const pageCount = Math.ceil(totalItems / itemsPerPage)

  if (pageCount === 1) return null

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  const handleOnPageChange = useCallback(
    (p: number) => {
      onPageChange(p)
    },
    [currentPage]
  )

  return (
    <nav id="pagination">
      <ul
        className={cx('pagination', size && `pagination-${size}`)}
        aria-label="Pagination"
        itemScope
        itemType="http://schema.org/SiteNavigationElement/Pagination"
      >
        <li className="prev">
          <Button
            type="button"
            className={cx('pagination__item', currentPage === 1 && 'disabled')}
            title="Previous page"
            onClick={() => handleOnPageChange(currentPage - 1)}
            aria-label="Previous page"
          >
            <Icon title="Next" icon={'arrowLeft'} size={20} />
          </Button>
        </li>
        {pages.map((p, idx) => (
          <li key={idx}>
            <Button
              type="button"
              onClick={() => handleOnPageChange(p)}
              className={cx(
                'pagination__item',
                currentPage === p && 'is-active'
              )}
              {...(currentPage === idx && { 'aria-current': true })}
            >
              {p}
            </Button>
          </li>
        ))}
        <li>
          <Button
            type="button"
            className={cx(
              'pagination__item',
              currentPage === itemsPerPage && 'disabled'
            )}
            title="Next page"
            onClick={() => handleOnPageChange(currentPage + 1)}
            aria-label="Next page"
          >
            <Icon title="Next" icon={'arrowRight'} size={20} />
          </Button>
        </li>
      </ul>
    </nav>
  )
}
