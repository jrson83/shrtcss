import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import Alert from './alert.js'

describe('Alert component test', () => {
  afterEach(cleanup)

  test('Should render default alert', () => {
    render(<Alert>Testing</Alert>)

    const alert = screen.getByRole('status')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('alert')

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument()
    expect(screen.queryByRole('button')).toBeNull()
  })

  test('Should render info alert', () => {
    render(<Alert color={'info'}>Testing</Alert>)

    const alert = screen.getByRole('status')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('alert alert-info')
  })

  test('Should render alert with title', () => {
    render(
      <Alert color={'info'} title="Test Title">
        Testing
      </Alert>
    )

    const alert = screen.getByRole('status')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent('Test Title')
  })

  test('Should render alert without icon', () => {
    render(<Alert hasIcon={false}>Testing</Alert>)

    const alert = screen.getByRole('status')
    expect(alert).toBeInTheDocument()

    expect(screen.queryByRole('img', { hidden: true })).toBeNull()
  })

  test('Should render alert with close button', () => {
    render(<Alert closeBtn>Testing</Alert>)

    const alert = screen.getByRole('status')
    expect(alert).toBeInTheDocument()

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
