import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import Badge from './badge'

describe('Badge component test', () => {
  afterEach(cleanup)

  test('Should render default badge', () => {
    render(<Badge>Testing</Badge>)

    const badge = screen.getByText(/Testing/i)
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bdg')
  })

  test('Should render filled-info badge', () => {
    render(
      <Badge variant={'filled'} color={'info'}>
        Testing
      </Badge>
    )

    const badge = screen.getByText(/Testing/i)
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bdg filled-info')
  })

  test('Should render disabled badge', () => {
    render(<Badge disabled>Testing</Badge>)

    const badge = screen.getByText(/Testing/i)
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bdg bdg-disabled')
  })

  test('Should render fullWidth badge', () => {
    render(<Badge fullWidth>Testing</Badge>)

    const badge = screen.getByText(/Testing/i)
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bdg bdg-fw')
  })

  test('Should render uppercase badge', () => {
    render(<Badge uppercase>Testing</Badge>)

    const badge = screen.getByText(/TESTING/i)
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bdg uppercase')
  })
})
