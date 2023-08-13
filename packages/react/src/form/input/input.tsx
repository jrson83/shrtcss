import type { InputType } from './input.types'

const Input: InputType = (props) => {
  return <input className='form__field' {...props} />
}

Input.displayName = 'Input'

export default Input
