import { useRouter } from '../router'
import type { RouteType } from './route.types'
import { useHistory, useMatch } from '@shrtcss/react-hooks'

const Route: RouteType = ({ exact = false, component: Component, path }) => {
  const { location } = useRouter()

  const history = useHistory()
  const match = useMatch(path, location)

  const isMatch = exact ? location === path : !!match

  if (!isMatch || !match) return null

  return <Component history={history} location={match} />
}

export default Route
