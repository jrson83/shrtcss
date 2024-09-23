import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import Button from './button.js'

describe('Button component test', () => {
  afterEach(cleanup)

  test('Should render default button', () => {
    render(<Button>Testing</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('btn')
  })

  test('Should render filled-info button', () => {
    render(
      <Button variant={'filled'} color={'info'}>
        Testing
      </Button>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('btn filled-info')
  })

  test('Should render disabled button', () => {
    render(<Button disabled>Testing</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  test('Should render fullWidth button', () => {
    render(<Button fullWidth>Testing</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('btn btn-fw')
  })

  test('Should render uppercase button', () => {
    render(<Button uppercase>Testing</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('btn uppercase')
  })
})
