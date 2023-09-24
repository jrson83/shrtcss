import { cx } from 'classix'
import type { ReactNode } from 'react'
import type { SHRTComponentProps } from '../../types'

export type ColumnType<T, K extends keyof T> = {
  key: K
  header: string
}

export interface TableProps<T, K extends keyof T>
  extends SHRTComponentProps<'table'> {
  items?: T[]
  columns?: ColumnType<T, K>[]
  caption?: string
  tfoot?: boolean
  bordered?: boolean
  hover?: boolean
  responsive?: boolean
  striped?: boolean
}

export interface TableHeaderProps<T, K extends keyof T> {
  columns: ColumnType<T, K>[]
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
      <tbody>
        {items?.map((item, idx) => (
          <tr key={idx}>
            {columns?.map((column) => (
              <td key={String(column.key)}>{item[column.key] as ReactNode}</td>
            ))}
          </tr>
        ))}
      </tbody>
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
