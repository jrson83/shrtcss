import type { SHRTSize } from '@shrtcss/core'
import { cx } from 'classix'
import { useCallback } from 'react'
import Button from '../button/button.js'
import Icon from '../icon/icon.js'
import type { SHRTComponentPropsWithoutRef } from '../types.js'

export interface PaginationProps extends SHRTComponentPropsWithoutRef<'nav'> {
  /** The current page item */
  currentPage?: number

  /** Number of items to display per page - Defaults to `10` */
  itemsPerPage?: number

  /** Total number of items */
  totalItems?: number

  /** Predefined pagination size */
  size?: SHRTSize

  /** Event occurs on page change */
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

  if (pageCount === 1) throw new Error('Pagination component `pageCount` 1')

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
            <Icon title="Next" iconId={'ios-arrow-back'} size={20} />
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
            <Icon title="Next" iconId={'ios-arrow-forward'} size={20} />
          </Button>
        </li>
      </ul>
    </nav>
  )
}
