// https://medium.com/@thashwiniwattuhewa/generic-react-table-component-1407a6fc2179
import { cx } from 'classix'
import type { ReactElement } from 'react'
import Button from '../button/button.js'
import Icon from '../icon/icon.js'
import type { SHRTComponentPropsWithoutRef } from '../types.js'

export type ColumnProps<T, K extends keyof T> = {
  key: K
  label: string
  sortable?: boolean
  render?: (column: ColumnProps<T, K>, item: T) => ReactElement
}

export interface TableProps<T, K extends keyof T>
  extends SHRTComponentPropsWithoutRef<'table'> {
  /**
   * Table header column array of objects
   *
   * `[{ key: 'example', label: 'Example' }]`
   */
  columns?: ColumnProps<T, K>[]

  /** Array of data */
  items?: T[]

  /** Defines a table caption */
  caption?: string

  /** Enable table footer columns - Defaults to `false` */
  tfoot?: boolean

  /** Enable predefined style - Defaults to `true` */
  bordered?: boolean

  /** Enable predefined style - Defaults to `false` */
  hover?: boolean

  /** Enable predefined style - Defaults to `false` */
  responsive?: boolean

  /** Enable predefined style - Defaults to `false` */
  striped?: boolean
}

/* export interface TableHeadProps<T, K extends keyof T> {
  columns: ColumnProps<T, K>[]
}

function TableHead<T, K extends keyof T>({ columns }: TableHeadProps<T, K>) {
  return (
    <thead>
      <tr>
        {columns.map(({ key, label }) => (
          <th key={String(key)} scope="col">
            {label}
          </th>
        ))}
      </tr>
    </thead>
  )
} */

export default function Table<T, K extends keyof T>({
  className = 'table',
  items,
  columns,
  caption,
  tfoot = false,
  bordered = true,
  hover = false,
  responsive = false,
  striped = false,
}: TableProps<T, K>) {
  const rows = !items?.length ? (
    <tr>
      <td colSpan={columns?.length}>No data</td>
    </tr>
  ) : (
    items?.map((item, idx) => (
      <tr key={idx}>
        {columns?.map((column, idx) => {
          const val = column.render
            ? column.render(column, item)
            : (item[column.key] as string)
          if (idx !== 0) {
            return (
              <td
                key={idx}
                {...(column.key === 'action' && {
                  id: `action-${idx}`,
                })}
              >
                {val}
              </td>
            )
          }
          return (
            <th key={idx} scope="row">
              {val}
            </th>
          )
        })}
      </tr>
    ))
  )
  return (
    <table
      className={cx(
        className,
        bordered && 'table-bordered',
        hover && 'table-hover',
        responsive && 'table-responsive',
        striped && 'table-striped'
      )}
    >
      {caption && <caption>{caption}</caption>}
      {columns && (
        <thead style={{ border: 'none' }}>
          <tr style={{ border: 'none' }}>
            {columns.map(({ key, label, sortable = false }) => (
              <th key={String(key)} scope="col">
                {!sortable ? (
                  <>{label}</>
                ) : (
                  <Button
                    className="btn btn-fw"
                    style={{ justifyContent: 'space-between' }}
                  >
                    {label}
                    <span style={{ display: 'grid' }}>
                      <Icon iconId={'caret-up'} size={14} />
                      <Icon iconId={'caret-down'} size={14} />
                    </span>
                  </Button>
                )}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>{rows}</tbody>
      {tfoot && (
        <tfoot>
          <tr>
            {columns?.map((column, idx) => {
              if (idx !== 0) {
                return <td key={String(column.key)}>{column.label}</td>
              }
              return (
                <th key={String(column.key)} scope="row">
                  {column.label}
                </th>
              )
            })}
          </tr>
        </tfoot>
      )}
    </table>
  )
}

export function TableResult({
  from,
  to,
  total,
}: { from: number; to: number; total: number }) {
  return (
    <small>
      Showing <strong>{from}</strong> to <strong>{to}</strong> of{' '}
      <strong>{total}</strong> entries
    </small>
  )
}
