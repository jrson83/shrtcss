import type { DividerType } from './divider.types'
import { cx } from 'classix'

const Divider: DividerType = ({ label, direction = 'horizontal' }) => {
  if (label) {
    return <div className='divider'>{label}</div>
  }
  return <hr className={cx(direction === 'vertical' && 'vertical')} />
}

Divider.displayName = 'Divider'

export default Divider
