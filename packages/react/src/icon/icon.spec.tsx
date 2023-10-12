import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import Icon from './icon'

describe('Icon component test', () => {
  afterEach(cleanup)

  test('Should render icon', () => {
    render(<Icon data-testid="test-icon" iconId={'playstation'} />)

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()

    expect(screen.queryByTitle('Test Title')).toBeNull()
  })

  test('Should render icon with title', () => {
    render(
      <Icon
        data-testid="test-icon"
        iconId={'playstation'}
        title={'Test Title'}
      />
    )

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()

    expect(screen.queryByTitle('Test Title')).toBeInTheDocument()
  })

  test('Should render icon with fill hex color', () => {
    render(
      <Icon data-testid="test-icon" iconId={'playstation'} color={'#339933'} />
    )

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()
    expect(icon.getAttribute('fill')).toBe('#339933')
  })

  test('Should render icon with fill css var', () => {
    render(
      <Icon
        data-testid="test-icon"
        iconId={'playstation'}
        color={'shrt-color-danger'}
      />
    )

    const icon = screen.getByTestId('test-icon')
    expect(icon).toBeInTheDocument()
    expect(icon.getAttribute('fill')).toBe('var(--shrt-color-danger)')
  })
})
