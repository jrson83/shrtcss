import type { DividerType } from './divider.types'

const Divider: DividerType = ({ label }) => {
  if (label) {
    return <div className='divider'>{label}</div>
  }
  return <hr />
}

Divider.displayName = 'Divider'

export default Divider
