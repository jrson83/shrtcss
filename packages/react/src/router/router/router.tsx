import {
  type ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'

interface RouterProviderProps {
  children?: ReactNode
}

export type TRouterContext = {
  location: string
  setLocation: any
}

export const RouterContext = createContext<TRouterContext | null>(null)

export function useRouter() {
  const location = useContext(RouterContext)

  if (location === null) {
    throw new Error('useRouter must be used within Router')
  }

  return location
}

export default function Router({ children }: RouterProviderProps) {
  const [location, setLocation] = useState(window.location.pathname)

  const handleRouteChange = (e: PopStateEvent) => {
    const {
      location: { pathname },
    } = e.currentTarget as Window

    if (pathname !== location) {
      setLocation(pathname)
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [location])

  return (
    <RouterContext.Provider value={{ location, setLocation }}>
      {children}
    </RouterContext.Provider>
  )
}
