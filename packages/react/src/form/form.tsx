import type { FormType } from './form.types'

const Form: FormType = ({ onSubmit, children }) => {
  return (
    <form className='form' onSubmit={onSubmit}>
      {children}
    </form>
  )
}

Form.displayName = 'Form'

export default Form
