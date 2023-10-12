import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  type SpyInstance,
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest'
import Icon from '../icon'
import Dropdown from './dropdown'

describe('Dropdown component test', () => {
  let dropdownEvent: ReturnType<typeof userEvent['setup']>
  let spyButton: SpyInstance

  beforeEach(() => {
    dropdownEvent = userEvent.setup()
    spyButton = vi.spyOn(dropdownEvent, 'click')
  })

  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  test('Should render default dropdown', async () => {
    render(<Dropdown label={'Click me'} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('btn btn-dropdown')
    expect(button).toHaveTextContent('Click me')

    expect(screen.queryByRole('list')).toBeNull()

    await dropdownEvent.click(button)

    const dropdown = screen.getByRole('list')
    expect(dropdown).toBeInTheDocument()
    expect(dropdown).toHaveClass('menu')

    expect(spyButton).toHaveBeenCalledOnce()
  })

  test('Should render dropdown with icon', async () => {
    render(
      <Dropdown
        label={'Click me'}
        icon={<Icon iconId={'ellipsis-vertical'} size={26} />}
      />
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument()
    expect(screen.queryByRole('list')).toBeNull()

    await dropdownEvent.click(button)

    const dropdown = screen.getByRole('list')
    expect(dropdown).toBeInTheDocument()
    expect(dropdown).toHaveClass('menu')

    expect(spyButton).toHaveBeenCalledOnce()
  })

  test('Should render dropdown with bottom-right position', async () => {
    render(<Dropdown label={'Click me'} position={'bottom-right'} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me')

    expect(screen.queryByRole('list')).toBeNull()

    await dropdownEvent.click(button)

    const dropdown = screen.getByRole('list')
    expect(dropdown).toBeInTheDocument()
    expect(dropdown).toHaveClass('menu menu-bottom-right')

    expect(spyButton).toHaveBeenCalledOnce()
  })
})
