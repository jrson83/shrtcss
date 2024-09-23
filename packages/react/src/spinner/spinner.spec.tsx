import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import Spinner from './spinner.js'

describe('Spinner component test', () => {
  afterEach(cleanup)

  test('Should render default spinner', () => {
    render(<Spinner data-testid="test-spinner" />)

    const spinner = screen.getByTestId('test-spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('spinner')
  })

  test('Should render colored spinner', () => {
    render(<Spinner color={'info'} data-testid="test-spinner" />)

    const spinner = screen.getByTestId('test-spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('spinner spinner-info')
  })

  test('Should render sized spinner', () => {
    render(<Spinner size={'lg'} data-testid="test-spinner" />)

    const spinner = screen.getByTestId('test-spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('spinner scale-lg')
  })

  test('Should render labeled spinner', () => {
    render(
      <Spinner label={'Loading, please wait'} data-testid="test-spinner" />
    )

    const spinner = screen.getByTestId('test-spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveAttribute('aria-label')
  })
})
