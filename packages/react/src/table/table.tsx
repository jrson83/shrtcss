// https://medium.com/@thashwiniwattuhewa/generic-react-table-component-1407a6fc2179
import { cx } from 'classix'
import type { ReactElement } from 'react'
import type { SHRTComponentPropsWithoutRef } from '../types.js'

export type ColumnProps<T, K extends keyof T> = {
  key: K
  header: string
  render?: (column: ColumnProps<T, K>, item: T) => ReactElement
}

export interface TableProps<T, K extends keyof T>
  extends SHRTComponentPropsWithoutRef<'table'> {
  /** Array of data */
  items?: T[]

  /**
   * Table header column array of objects
   *
   * `[{ key: 'example', header: 'Example' }]`
   */
  columns?: ColumnProps<T, K>[]

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

export interface TableHeaderProps<T, K extends keyof T> {
  columns: ColumnProps<T, K>[]
}

export function TableHeader<T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={String(column.key)}>{column.header}</th>
        ))}
      </tr>
    </thead>
  )
}

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
      <td colSpan={columns?.length} className="text-center">
        No data
      </td>
    </tr>
  ) : (
    items?.map((item, idx) => (
      <tr key={idx}>
        {columns?.map((column, idx) => {
          const val = column.render
            ? column.render(column, item)
            : (item[column.key] as string)
          return <td key={idx}>{val}</td>
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
      {columns && <TableHeader columns={columns} />}
      <tbody>{rows}</tbody>
      {tfoot && (
        <tfoot>
          <tr>
            {columns?.map((column) => (
              <th key={String(column.key)}>{column.header}</th>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  )
}
