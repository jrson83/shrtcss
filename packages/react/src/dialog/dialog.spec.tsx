import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import {
  type SpyInstance,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest'
import Button from '../button'
import Dialog from './dialog'

describe('Dialog component test', () => {
  let dialogEvent: ReturnType<typeof userEvent['setup']>
  let spyButton: SpyInstance

  beforeAll(() => {
    /** https://github.com/jsdom/jsdom/issues/3294#issuecomment-1196577616 */
    HTMLDialogElement.prototype.show = vi.fn()
    HTMLDialogElement.prototype.showModal = vi.fn()
    HTMLDialogElement.prototype.close = vi.fn()
  })

  beforeEach(() => {
    dialogEvent = userEvent.setup()
    spyButton = vi.spyOn(dialogEvent, 'click')
  })

  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  test('Should render default dialog', async () => {
    const Wrapper = () => {
      const [isDialogVisible, setIsDialogVisible] = useState(false)
      const showDialog = () => setIsDialogVisible(true)
      const closeDialog = () => setIsDialogVisible(false)

      return (
        <>
          <Button className="btn" onClick={showDialog}>
            Click me
          </Button>
          <Dialog
            data-testid="test-dialog"
            name="example-dialog"
            type="info"
            title="Hello, Im a Heading"
            submitButton={{
              label: 'Submit',
              action: () => console.log('action'),
            }}
            cancelButton={{ label: 'Cancel' }}
            isDialogVisible={isDialogVisible}
            closeDialog={closeDialog}
          >
            <p>I'm a placeholder.</p>
          </Dialog>
        </>
      )
    }
    render(<Wrapper />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me')

    expect(screen.queryByRole('dialog')).toBeNull()

    await dialogEvent.click(button)

    const dialog = screen.getByTestId('test-dialog')
    expect(dialog).toBeInTheDocument()
    expect(dialog).toHaveClass('dialog')

    expect(spyButton).toHaveBeenCalledOnce()
  })
})
