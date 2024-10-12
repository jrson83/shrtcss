import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import { type User, users } from './setup.data.js'
import Table from './table.js'

describe('Table component test', () => {
  afterEach(cleanup)

  test('Should render default table', () => {
    render(
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

    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
  })
})
