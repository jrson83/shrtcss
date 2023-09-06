import Icon from './icon'
import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

describe('Icon component test', () => {
  afterEach(cleanup)

  test('Should render icon', () => {
    render(<Icon data-testid='test-icon' icon={'ps4'} />)

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()

    expect(screen.queryByTitle('Test Title')).toBeNull()
  })

  test('Should render icon with title', () => {
    render(<Icon data-testid='test-icon' icon={'ps4'} title={'Test Title'} />)

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()

    expect(screen.queryByTitle('Test Title')).toBeInTheDocument()
  })

  test('Should render icon with fill hex color', () => {
    render(<Icon data-testid='test-icon' icon={'ps4'} color={'#339933'} />)

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()
    expect(icon.getAttribute('fill')).toBe('#339933')
  })

  test('Should render icon with fill css var', () => {
    render(
      <Icon data-testid='test-icon' icon={'ps4'} color={'shrt-color-danger'} />
    )

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()
    expect(icon.getAttribute('fill')).toBe('var(--shrt-color-danger)')
  })
})
