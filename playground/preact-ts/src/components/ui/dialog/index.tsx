import { Button, Icon } from '#/components/ui'
import { FocusTrap } from '#/hooks'
import type { DialogType } from '#/types'
import { browserSupportsHas } from '#/utils'
import { useEffect, useRef } from 'preact/hooks'

const Dialog: DialogType = ({
  children,
  name,
  type = 'info',
  title,
  isDialogVisible,
  useFocusTrap = true,
  fullScreen = false,
  showCloseButton = false,
  showDialogFooter = true,
  submitButton = {
    label: 'Submit',
  },
  cancelButton = {
    label: 'Cancel',
  },
  closeDialog,
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const shown = useRef<boolean>(false)

  const handleCloseModal = () => {
    dialogRef.current?.classList.add('close')
    dialogRef.current
      ?.animate([{ opacity: 0 }], { duration: 300 })
      .finished.then(() => {
        dialogRef.current?.close()
        dialogRef.current?.classList.remove('close')
        if (!browserSupportsHas) {
          document.body.style.overflow = 'visible'
        }
      })
  }

  useEffect(() => {
    const handleCancel = (event: Event) => {
      console.log('handleCancel')
      event.preventDefault()
      handleCloseModal()
    }
    dialogRef.current?.addEventListener('cancel', handleCancel)
    return () => {
      dialogRef.current?.removeEventListener('cancel', handleCancel)
    }
  }, [])

  useEffect(() => {
    if (isDialogVisible) {
      if (!shown.current) {
        if (!browserSupportsHas) {
          document.body.style.overflow = 'hidden'
        }
        dialogRef.current?.showModal()
      }
      shown.current = true
    } else {
      if (shown.current) {
        handleCloseModal()
      }
      shown.current = false
    }
  }, [isDialogVisible])

  const preventAutoClose = (e: MouseEvent) => e.stopPropagation()

  return (
    <FocusTrap enabled={useFocusTrap}>
      <dialog
        ref={dialogRef}
        onCancel={closeDialog}
        onClick={closeDialog}
        className={`dialog ${fullScreen ? 'dialog-fullscreen' : ''}`}
        id={name}
        aria-labelledby='dialog_title'
      >
        <div onClick={preventAutoClose}>
          <header className='dialog__header'>
            <p id='dialog_title' className='dialog__title'>
              {title}
            </p>
            {showCloseButton && (
              <Button onClick={closeDialog} aria-label='Close Dialog'>
                <Icon title='Close Dialog' icon={'close'} />
              </Button>
            )}
          </header>
          <main className='dialog__body'>{children}</main>
          {showDialogFooter && (
            <footer className='dialog__footer'>
              <span></span>
              <Button
                className='btn btn-outline'
                onClick={cancelButton.action || closeDialog}
                value='cancel'
              >
                {cancelButton.label}
              </Button>
              <Button
                type='submit'
                className={`btn btn-${type}`}
                onClick={submitButton.action}
              >
                {submitButton.label}
              </Button>
            </footer>
          )}
        </div>
      </dialog>
    </FocusTrap>
  )
}

export default Dialog
