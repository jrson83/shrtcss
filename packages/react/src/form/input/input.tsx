import type { InputType } from './input.types'

const Input: InputType = (props) => {
  return <input className='form__field' {...props} />
}

export default Input
