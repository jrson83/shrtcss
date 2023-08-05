import type { RouterContextProviderType, TRouterContext } from './router.types'
import { createContext, useLayoutEffect, useState } from 'react'

const RouterContext = createContext<TRouterContext | null>(null)

const Router: RouterContextProviderType = ({ children }) => {
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

export { Router as default, RouterContext }
