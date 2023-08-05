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

export type RouteType = React.FC<RouteProps>
