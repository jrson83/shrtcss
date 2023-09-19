import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import Divider from './divider'

describe('Divider component test', () => {
  afterEach(cleanup)

  test('Should render default horizontal divider', () => {
    render(<Divider />)

    const divider = screen.getByRole('separator')
    expect(divider).toBeInTheDocument()
  })

  test('Should render vertical divider', () => {
    render(<Divider orientation={'vertical'} />)

    const divider = screen.getByRole('separator')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveClass('vertical')
  })

  test('Should render labeled divider', () => {
    render(<Divider label={'Testing'} />)

    const divider = screen.getByText(/Testing/i)
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveClass('divider')
  })
})
