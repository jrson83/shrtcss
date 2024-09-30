import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  type MockInstance,
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest'
import Form from './form.js'

describe('Form component test', () => {
  // @ts-expect-error
  let submitEvent: ReturnType<(typeof userEvent)['setup']>
  let spyButton: MockInstance

  beforeEach(() => {
    // @ts-expect-error
    submitEvent = userEvent.setup()
    spyButton = vi.spyOn(submitEvent, 'click')
  })

  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  test('Should render default form', async () => {
    render(<Form />)

    await submitEvent.type(
      screen.getByRole('textbox', { name: /FTP-Server/i }),
      '192.168.178.79'
    )
    await submitEvent.type(
      screen.getByRole('spinbutton', { name: /port/i }),
      '1337'
    )
    await submitEvent.type(
      screen.getByRole('textbox', { name: /username/i }),
      'anonymous'
    )

    await submitEvent.click(screen.getByRole('button', { name: /Save/i }))

    expect(spyButton).toHaveBeenCalledOnce()
  })
})
