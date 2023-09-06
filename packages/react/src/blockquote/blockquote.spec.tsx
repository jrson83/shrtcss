import Blockquote from './blockquote'
import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

describe('Blockquote component test', () => {
  afterEach(cleanup)

  test('Should render blockquote', () => {
    render(<Blockquote>Testing</Blockquote>)

    const blockquote = screen.getByRole('blockquote')
    expect(blockquote).toBeInTheDocument()
    expect(blockquote).toHaveTextContent('Testing')
  })

  test('Should render blockquote with cite', () => {
    render(<Blockquote cite={'Test Cite'}>Testing</Blockquote>)

    const blockquote = screen.getByRole('blockquote')
    expect(blockquote).toBeInTheDocument()
    expect(blockquote).toHaveTextContent('Test Cite')
  })
})
