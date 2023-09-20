import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import Heading from './heading'

describe('Heading component test', () => {
  afterEach(cleanup)

  test('Should render default heading', () => {
    render(<Heading>Testing</Heading>)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })

  test('Should render h1 heading', () => {
    render(<Heading as={'h1'}>Testing</Heading>)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  test('Should render h2 heading', () => {
    render(<Heading as={'h2'}>Testing</Heading>)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })

  test('Should render h3 heading', () => {
    render(<Heading as={'h3'}>Testing</Heading>)

    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toBeInTheDocument()
  })

  test('Should render h4 heading', () => {
    render(<Heading as={'h4'}>Testing</Heading>)

    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading).toBeInTheDocument()
  })

  test('Should render h5 heading', () => {
    render(<Heading as={'h5'}>Testing</Heading>)

    const heading = screen.getByRole('heading', { level: 5 })
    expect(heading).toBeInTheDocument()
  })

  test('Should render h6 heading', () => {
    render(<Heading as={'h6'}>Testing</Heading>)

    const heading = screen.getByRole('heading', { level: 6 })
    expect(heading).toBeInTheDocument()
  })
})
