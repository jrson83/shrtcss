import { useHistory, useMatch } from '@shrtcss/react-hooks'
import { useRouter } from '../router/router.js'

export interface History {
  length: number
  back(): void
  forward(): void
  push: (path: string) => void
  replace: (path: string) => void
}

export interface RouteComponentProps {
  history: History
  location: {
    params?: Record<string, string>
    pattern: RegExp
    pathname: string
  }
}

export type RouteComponent = React.FC<RouteComponentProps>

export interface RouteProps {
  component: RouteComponent
  path: string
  exact?: boolean
}

export default function Route({
  exact = false,
  component: Component,
  path,
}: RouteProps) {
  const { location } = useRouter()

  const history = useHistory()
  const match = useMatch(path, location)

  const isMatch = exact ? location === path : !!match

  if (!isMatch || !match) return null

  return <Component history={history} location={match} />
}
