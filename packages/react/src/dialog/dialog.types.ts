export interface DialogProps {
  name: string
  type?: 'error' | 'warning' | 'info' | 'success'
  title: string
  isDialogVisible: boolean
  useFocusTrap?: boolean
  fullScreen?: boolean
  position?: 'bottom'
  showCloseButton?: boolean
  showDialogFooter?: boolean
  submitButton?: {
    label?: 'Submit' | 'Save' | 'Update' | 'Delete'
    action?: (data: unknown) => void
  }
  cancelButton?: {
    label?: 'Cancel' | 'Reset'
    action?: (data: unknown) => void
  }
  closeDialog: () => void
}

export type DialogType = React.FC<React.PropsWithChildren<DialogProps>>
