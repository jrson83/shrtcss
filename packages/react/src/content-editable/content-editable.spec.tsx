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
import ContentEditable from './content-editable.js'

describe('ContentEditable component test', () => {
  // @ts-expect-error
  let submitEvent: ReturnType<(typeof userEvent)['setup']>
  let contentEditable: MockInstance

  beforeEach(() => {
    // @ts-expect-error
    submitEvent = userEvent.setup()
    contentEditable = vi.spyOn(submitEvent, 'click')
  })

  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  test('Should render content-editable', async () => {
    render(
      <ContentEditable
        data-testid="content-editable"
        content={'hello'}
        data-id={1}
        onInput={() => console.log('onInput')}
        onBlur={() => console.log('onBlur')}
      />
    )

    const content = screen.getByTestId('content-editable')
    expect(content).toBeInTheDocument()
    expect(content).toHaveTextContent('hello')

    await submitEvent.click(content)
    await submitEvent.keyboard('abc')
    expect(content.textContent).toBe('helloabc')

    expect(contentEditable).toHaveBeenCalledOnce()
  })
})
