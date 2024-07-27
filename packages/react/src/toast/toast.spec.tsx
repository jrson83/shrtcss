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
import Button from '../button'
import { useToasts } from './toast.hook'
import { ToastProvider } from './toast.provider'

function RenderButton() {
  const { add } = useToasts()

  const addToast = () => {
    add({
      color: 'info',
      title: 'This is a Title',
      children: 'Your changes has been saved',
    })
  }

  return <Button onClick={addToast}>Test</Button>
}

describe('Toast component test', () => {
  let toastEvent: ReturnType<(typeof userEvent)['setup']>
  let spyButton: MockInstance

  beforeEach(() => {
    toastEvent = userEvent.setup()
    spyButton = vi.spyOn(toastEvent, 'click')
  })

  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  test('Should render default toast', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ToastProvider>{children}</ToastProvider>
    )

    render(<RenderButton />, { wrapper })

    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()

    expect(screen.queryByRole('status')).toBeNull()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    await toastEvent.click(button)

    const dropdown = screen.getByRole('status')
    expect(dropdown).toBeInTheDocument()
    expect(dropdown).toHaveClass(
      /* 'toast toast-info' */ 'toast__item toast__item-info open alert-info'
    )

    expect(spyButton).toHaveBeenCalledOnce()
  })
})
