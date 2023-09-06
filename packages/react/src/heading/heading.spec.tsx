import Heading from './heading'
import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

describe('Heading component test', () => {
  afterEach(cleanup)

  test('Should render default heading', () => {
    render(<Heading>Testing</Heading>)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
})
