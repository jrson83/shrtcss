import { RouterContext } from './router'
import { useContext } from 'react'

const useRouter = () => {
  const location = useContext(RouterContext)

  if (location === null) {
    throw new Error('useRouter must be used within Router')
  }

  return location
}

export { useRouter }
