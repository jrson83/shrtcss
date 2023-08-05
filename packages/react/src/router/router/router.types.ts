export type TRouterContext = {
  location: string
  setLocation: any
}

export interface RouterContextProviderProps {
  children?: React.ReactNode
}

export type RouterContextProviderType = React.FC<RouterContextProviderProps>
